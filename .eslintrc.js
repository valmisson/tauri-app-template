module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
}
