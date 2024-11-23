import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import airbnb from 'eslint-config-airbnb';
import airbnbHooks from 'eslint-config-airbnb/hooks';
import prettier from 'eslint-config-prettier';

export default [
  pluginJs.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser, parser: tsParser },
    plugins: {
      js: pluginJs,
      react: pluginReact,
      ts: tseslint,
    },
    rules: {
      ...airbnb.rules,
      ...airbnbHooks.rules,
      ...prettier.rules,
      semi: ['warn', 'always'],
    },
  },
];
