module.exports = {
  env: {
    es6: true,
    browser: true,
    jasmine: true,
    node: true,
  },
  settings: {
    // 'import/resolver': {
    //   webpack: {
    //     config: path.join(__dirname, 'webpack.config.ts'),
    //   },
    // },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    "prettier/@typescript-eslint",
  ],
  ignorePatterns: [
    'docs',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
