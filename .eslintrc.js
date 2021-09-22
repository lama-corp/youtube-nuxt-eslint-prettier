module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    // ecmaVersion: 2018, // Si on utilise pas Babel pour modifier la version d'ECMAScript
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    // 'nuxt/no-env-in-context': 2,
    // semi: ['error', 'always'], // https://eslint.org/docs/rules/semi
    // 'no-console': 'warn', // 0 = off, 1 = warn, 2 = error
  },
}
