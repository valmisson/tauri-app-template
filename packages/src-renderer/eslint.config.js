import globals from 'globals'
import ts from 'typescript-eslint'
import standard from 'eslint-config-std'

export default [
  ...ts.configs.recommended,
  ...standard.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}']
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  }
]
