module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off", // não usar o this nas classes
    "no-param-reassign": "off", // receber parâmetros e fazer alterações nele
    camelcase: "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }], // aceitar usar uma variaval que não será utilizada
  },
};
