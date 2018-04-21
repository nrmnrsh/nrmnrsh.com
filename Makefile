.PHONY: validate build release

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

build: validate
	grunt build
	webpack --mode production

release: build
	grunt optimize release
