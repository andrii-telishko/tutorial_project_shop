module.exports = {
   parser: "babel-eslint",
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    },
  parserOptions: {
    ecmaVersion: 12,
    },
  rules: {
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    "no-unused-vars": 0
    },
}
