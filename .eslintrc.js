/* eslint-env node */

module.exports = {
  "root": true,
  "parser": '@typescript-eslint/parser',
  "plugins": [
    '@typescript-eslint',
  ],
  "extends": [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  "rules": {
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
  "settings": {
    "react": {
      "version": "17.0.2"
    }
  }
};