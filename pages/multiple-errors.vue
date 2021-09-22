<template>
  <div>
    <p>
      Cette page contient plusieurs erreur ESLint.<br />
      Utiliser "eslint --fix pages/multiple-errors.vue" pour corriger les
      erreurs. Pour fixer une unique règle installer
      https://github.com/IanVS/eslint-nibble Pourquoi ? "eslint --fix --rule
      'quotes: [2, double]' pages/multiple-errors.vue" corrige toutes les
      erreurs (normal ?) "eslint --no-eslint --fix --rule 'quotes: [2, double]'
      pages/multiple-errors.vue" plante car la config pour les .vue n'est pas
      chargée
    </p>
  </div>
</template>

<script>
export default {
  name: 'MultipleErrors',
  mounted() {
    const test1 = 50
    const test2 = 100
    const test3 = 150
    if (test1 && test2) {
      // eslint-disable-next-line no-const-assign,no-unused-vars
      test3 = test1 + test2
    }
  },
}
</script>
