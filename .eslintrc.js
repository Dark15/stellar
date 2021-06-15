module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['standard', 'standard-jsx', 'standard-react', 'prettier'],
  plugins: ['@typescript-eslint'],
  rules: {
    semi: 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_|^err|^ev' // _xxx, err, error, ev, event
      }
    ],
    'no-useless-escape': 2,
    'jsx-quotes': ['error', 'prefer-double'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  }
}
