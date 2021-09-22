<template>
  <div>
    <p>Cette page contient des warnings ! Ouvrez la console pour les voir :)</p>
  </div>
</template>

<script>
export default {
  name: 'PageWarnings',
  mounted() {
    console.log('Cette ligne génère un warning !')
    console.log('Second warning')
  },
}
</script>
