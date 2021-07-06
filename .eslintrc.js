/* eslint-env node */

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
      },
    ],
  },
  settings: {
    react: {
      version: '17.0.2',
    },
  },
}
