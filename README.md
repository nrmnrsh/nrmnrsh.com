# nrmnrsh.com

The portfolio website of Norman Rusch

[![Actions Status](https://github.com/nrmnrsh/nrmnrsh.com/actions/workflows/ci.yml/badge.svg)](https://github.com/nrmnrsh/nrmnrsh.com/actions)
[![Coverage Status on Codecov](https://codecov.io/gh/nrmnrsh/nrmnrsh.com/branch/main/graph/badge.svg)](https://codecov.io/gh/nrmnrsh/nrmnrsh.com)

## [Used tools](./package.json)

* [Webpack](https://webpack.js.org/)
* [Pacto](https://github.com/schorfES/pacto) & [Pacto.Model](https://github.com/schorfES/pacto.model)
* [Sass](https://sass-lang.com/)
* [Workbox](https://developers.google.com/web/tools/workbox/)
* [Eleventy](https://www.11ty.dev/)
* [Babel](https://babeljs.io/)
* [ESlint](https://eslint.org/)
* [Sass Lint](https://github.com/sasstools/sass-lint)
* [Lintspaces](https://github.com/facebook/jest)
* [Jest](https://jestjs.io/)
* [Codecov](https://codecov.io/)
* [Postcss](https://postcss.org/)
* [CSS Nano](https://cssnano.co/)
* [Autoprefixer](https://www.npmjs.com/package/autoprefixer)
* [HTML Minifier](https://www.npmjs.com/package/html-minifier)
* [Imagemin](https://www.npmjs.com/package/imagemin)
* [SVGO](https://www.npmjs.com/package/svgo)
* [Uglify JS](https://www.npmjs.com/package/uglify-js)
* [Critical](https://www.npmjs.com/package/critical)

## [Available tasks](./Makefile)

This project uses a Makefile to run tasks. Here are some of them:

* `make develop` starts webpack and eleventy in watch mode.
* `make tests` runs all unit tests using jest.
* `make validate` runs all validations using ESLint, Sass Lint and Lintspaces.
* `make build` creates a production build.
* `make serve` creates a production build and serves them.
* `make release` creates a new release and publishes them to github pages.
