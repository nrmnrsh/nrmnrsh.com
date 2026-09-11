.PHONY: clean tests coverage validate webfont build optimize develop release serve


clean:
	rm -rf ./coverage/
	rm -rf ./dist/


tests:
	./node_modules/.bin/vitest run --coverage


coverage:
	node_modules/.bin/codecov


validate:
	./node_modules/.bin/eslint .

	./node_modules/.bin/astro check

	./node_modules/.bin/lintspaces \
		--editorconfig .editorconfig \
		--maxnewlines 2 \
		--ignores "js-comments" \
		./*.js \
		./*.json \
		./*.yml \
		./src/**/*.{js,ts,astro} \
		./src/**/*.scss \
		./src/**/*.yml \
		./src/**/*.json

	./node_modules/.bin/stylelint \
		"./src/**/*.scss"


webfont:
	sh -c 'if [ ! -d "./src/fonts" ]; then mkdir ./src/fonts; fi'

	./node_modules/.bin/webfont \
		"./src/fonts/icons/*.svg" \
		--config "./webfont.config.json" \
		--dest "./public/fonts/"


optimize:
	./node_modules/.bin/imagemin ./public/img/meta --out-dir=public/img/meta
	./node_modules/.bin/svgo ./src/img/brands/*.svg --config ./.svgo.yml


develop: clean webfont
	./node_modules/.bin/astro dev


build: webfont optimize
	NODE_ENV=production ./node_modules/.bin/astro build


serve: build
	./node_modules/.bin/astro preview


release: clean validate tests build
	./node_modules/.bin/bump \
		--commit "Release v%s" \
		--tag \
		--all \
		package.json \
		package-lock.json

	./node_modules/.bin/gh-pages -d ./dist/

	git push && git push --tags
