module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['plugin:vue/essential', 'plugin:vue/recommended', '@vue/prettier'],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 1,
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
