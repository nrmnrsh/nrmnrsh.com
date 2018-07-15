.PHONY: tests validate build release

tests:
	./node_modules/.bin/jest \
		sources/js/ \
		-- verbose \
		-- coverage

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
	./node_modules/.bin/grunt build

	./node_modules/.bin/webpack --mode production

optimize:
	cat release/index.html | ./node_modules/.bin/critical \
		--base release/ \
		--ignore '@font-face' \
		--inline > release/index.critical.html

	mv release/index.critical.html release/index.html

	./node_modules/.bin/grunt optimize

release: build optimize
	./node_modules/.bin/grunt release
