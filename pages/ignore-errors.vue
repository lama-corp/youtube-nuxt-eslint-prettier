<template>
  <div>
    <div>Ce fichier contient des erreurs mais elles sont toutes ignorées.</div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div id="hey" data-attr1="1" v-html="text">
      Cette div contient une erreur
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <div
      id="salut"
      data-attr1="1"
      data-attr2="2"
      data-attr3="3"
      data-attr4="4"
      data-attr5="5"
      v-html="text"
    >
      <!-- eslint-enable vue/no-v-html -->
      <!--
      <div
        data-attr1="1"
        data-attr2="2"
        data-attr3="3"
        data-attr4="4"
        data-attr5="5"
        v-html="text"
      ></div>
      -->
      Cette div aussi !
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIgnoreErrors',
  data() {
    return {
      text: 'Mon texte',
    }
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars,prefer-const
    let first = 1
    // eslint-disable-next-line no-unused-vars,prefer-const
    let second = 1

    /* eslint-disable no-unused-vars */
    const third = 2
    const fourth = 'lama'
    /* eslint-enable */

    // eslint-disable-next-line no-unused-vars
    const fifth = 'whoops'
  },
  methods: {
    prettierExample1(test1, test2) {
      return test1 + test2
    },
    prettierExample2(test1, test2) {
      return test1 + test2
    },
    prettierExample() {
      this.prettierExample1(
        this.prettierExample2(
          this.prettierExample2('ralala', 'ralala'),
          'lalala'
        ),
        this.prettierExample2('ralala', 'ralala')
      )
    },
  },
}
</script>
