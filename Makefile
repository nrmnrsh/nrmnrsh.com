.PHONY: clean tests coverage validate webfont webpack critical serviceworker optimize build release run

clean:
	rm -rf ./coverage/
	rm -rf ./web/

tests:
	./node_modules/.bin/jest \
		src/ \
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
		./src/**/*.js \
		./src/**/*.scss \
		./src/**/*.hbs \
		./src/**/*.yml \
		./src/**/*.xml \
		./src/**/*.json \
		./src/**/*.webmanifest

	./node_modules/.bin/sass-lint \
		--verbose \
		--no-exit \
		"./src/scss/**/*.scss"

webfont:
	sh -c 'if [ ! -d "./src/fonts" ]; then mkdir ./src/fonts; fi'

	./node_modules/.bin/webfont \
		"./src/fonts/icons/*.svg" \
		--config "./webfont.config.js" \
		--dest "./src/fonts/"

webpack:
	./node_modules/.bin/webpack --mode production

	mv ./web/browserconfig.xml.html ./web/browserconfig.xml
	mv ./web/manifest.webmanifest.html ./web/manifest.webmanifest
	mv ./web/robots.txt.html ./web/robots.txt
	mv ./web/sitemap.xml.html ./web/sitemap.xml

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

serviceworker:
	./node_modules/.bin/workbox injectManifest ./workbox.config.js

	sed -i.bak \
		"s/__workbox_version__/$(shell ./node_modules/.bin/workbox --version)/g" \
		"./web/sw.js"

	rm ./web/sw.js.bak

optimize:
	./node_modules/.bin/imagemin ./web/img/backgrounds --out-dir=web/img/backgrounds
	./node_modules/.bin/imagemin ./web/img/meta --out-dir=web/img/meta

	./node_modules/.bin/svgo -f ./web/img/brands

	./node_modules/.bin/htmlprocessor ./web/index.html -o ./web/index.processed.html

	./node_modules/.bin/html-minifier \
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

	./node_modules/.bin/uglifyjs \
		--compress \
		--mangle\
		--output ./web/sw.js \
		./web/sw.js

build: clean validate tests webfont webpack critical serviceworker optimize

release: build
	cp ./CNAME ./web/CNAME

	# Create empty unused file for logrocket to prevent "version-bump-prompt" to fail if file is not created.
	touch web/js/logrocket-empty.js

	./node_modules/.bin/bump \
		--commit "Release v%s" \
		--tag \
		--all \
		package.json \
		package-lock.json \
		src/js/components/logrocket/actions/Initialize.js \
		web/js/logrocket-*.js

	./node_modules/.bin/gh-pages -d ./web/

run:
	./node_modules/.bin/live-server ./web/
