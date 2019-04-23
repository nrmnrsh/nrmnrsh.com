.PHONY: clean tests coverage validate webfont webpack critical optimize build release

clean:
	rm -rf ./coverage/
	rm -rf ./web/

tests:
	./node_modules/.bin/jest \
		sources/js/ \
		-- verbose \
		-- coverage

coverage:
	node_modules/.bin/codecov

validate:
	./node_modules/.bin/eslint\
		. \
		--ext .js

	./node_modules/.bin/lintspaces \
		--editorconfig .editorconfig \
		--maxnewlines 2 \
		--ignores "js-comments" \
		./*.js \
		./*.json \
		./*.yml \
		./sources/**/*.js \
		./sources/**/*.scss \
		./sources/**/*.hbs \
		./sources/**/*.yml \
		./sources/**/*.xml \
		./sources/**/*.json \
		./sources/**/*.webmanifest

	./node_modules/.bin/sass-lint \
		--verbose \
		--no-exit \
		"./sources/scss/**/*.scss"

webfont:
	sh -c 'if [ ! -d "./sources/fonts" ]; then mkdir ./sources/fonts; fi'

	./node_modules/.bin/webfont \
		"./sources/fonts/icons/*.svg" \
		--config "./webfont.config.js" \
		--dest "./sources/fonts/"

webpack:
	./node_modules/.bin/webpack --mode production

	mv ./web/browserconfig.xml.html ./web/browserconfig.xml
	mv ./web/manifest.webmanifest.html ./web/manifest.webmanifest

critical:
	sed -i.bak \
		"s/critical.pkg.js.map/\/web\/js\/critical.pkg.js.map/g" \
		"./web/js/critical.pkg.js" && \
	rm ./web/js/critical.pkg.js.bak

	cat ./web/index.html | ./node_modules/.bin/critical \
		--base ./web/ \
		--ignore '@font-face' \
		--inline > ./web/index.critical.html

	mv ./web/index.critical.html ./web/index.html

optimize:
	imagemin ./web/img/backgrounds --out-dir=web/img/backgrounds
	imagemin ./web/img/meta --out-dir=web/img/meta

	svgo -f ./web/img/brands

	htmlprocessor ./web/index.html -o ./web/index.processed.html

	html-minifier \
		--collapse-whitespace \
		--remove-comments \
		--remove-redundant-attributes \
		--remove-script-type-attributes \
		--remove-tag-whitespace \
		--use-short-doctype \
		--minify-css true \
		--minify-js true \
		./web/index.processed.html > ./web/index.min.html

	mv ./web/index.min.html ./web/index.html
	rm ./web/index.processed.html

build: clean validate tests webfont webpack critical optimize

release: build
	./node_modules/.bin/bump \
		--commit "Release v%s" \
		--tag \
		--all
	gh-pages -d ./web/
