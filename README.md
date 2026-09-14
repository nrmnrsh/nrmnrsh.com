# nrmnrsh.com

The portfolio website of Norman Rusch

[![Actions Status](https://github.com/nrmnrsh/nrmnrsh.com/actions/workflows/ci.yml/badge.svg)](https://github.com/nrmnrsh/nrmnrsh.com/actions)
[![Coverage Status on Codecov](https://codecov.io/gh/nrmnrsh/nrmnrsh.com/branch/main/graph/badge.svg)](https://codecov.io/gh/nrmnrsh/nrmnrsh.com)

## [Used tools](./package.json)

* [Astro](https://astro.build/)
* [TypeScript](https://www.typescriptlang.org/)
* [Sass](https://sass-lang.com/) (CSS Modules)
* [astro-critical-css](https://github.com/rumaan/astro-critical-css) (critical CSS inlining)
* [ESLint](https://eslint.org/) ([XO](https://github.com/xojs/xo) config)
* [Stylelint](https://stylelint.io/)
* [Lintspaces](https://github.com/evanshortiss/lintspaces)
* [Vitest](https://vitest.dev/)
* [Codecov](https://codecov.io/)
* [Imagemin](https://www.npmjs.com/package/imagemin)
* [SVGO](https://www.npmjs.com/package/svgo)

## [Available tasks](./Makefile)

This project uses a Makefile to run tasks. Each target is also available as a `pnpm run <task>` script.

* `make develop` starts the Astro dev server in watch mode.
* `make tests` runs all unit tests using Vitest.
* `make validate` runs all validations using ESLint, `astro check`, Stylelint and Lintspaces.
* `make build` creates a production build.
* `make serve` creates a production build and serves it.
* `make release` creates a new release and publishes them to github pages.
