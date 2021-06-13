<template>
  <ul id="app">
    <li v-for="ninja in ninjas">{{ ninja }}</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
     ninjas: ['Daniel', 'Charley', 'Alston']
    }
  },
}
</script>

<style>

</style>
