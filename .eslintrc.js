module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base'],
  plugins: ['import'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'import/no-cycle': 'warn',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'never',
        prev: ['singleline-const', 'singleline-let', 'singleline-var'],
        next: ['singleline-const', 'singleline-let', 'singleline-var'],
      },
    ],
  },
  ignorePatterns: ['/test/*.js', '**/node_modules/*.js'],
};
