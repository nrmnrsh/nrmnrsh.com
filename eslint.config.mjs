import eslintConfigXo from 'eslint-config-xo';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

const xoConfig = eslintConfigXo({space: true});
const config = [
  {
    ignores: ['dist/**', 'coverage/**', '.astro/**', 'public/**'],
  },
  ...xoConfig,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
];

export default config;
