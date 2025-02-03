import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    extends: ['airbnb', 'eslint:recommended'],
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react/prop-types': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'consistent-return': 'off',
      'no-underscore-dangle': 'off',
      'import/extensions': 'off',
      'func-names': 'off',
      'no-extra-boolean-cast': 'off',
      'no-restricted-syntax': 'off',
      'arrow-body-style': 'off',
      'operator-assignment': 'off',
      'prefer-destructuring': 'off',
      'no-plusplus': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
      'max-len': ['error', { code: 140, ignoreComments: true }],
      'no-param-reassign': 'off',
      'max-classes-per-file': 'off',
      'import/no-unresolved': 'off',
      camelcase: 1,
      'no-new': 'off',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-shadow': 'off',
      'class-methods-use-this': 'off',
      'default-param-last': 'off',
      'no-restricted-exports': 'off',
      'no-eval': 'off',
      'no-prototype-builtins': 'off',
      'linebreak-style': 'off',
      'no-continue': 'off',
    },
  },
];
