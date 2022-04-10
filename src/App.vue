<template>
  <div id="app">
    <Header></Header>
    <home />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import home from './components/home.vue'
export default {
  name: 'App',
  components: {
    Header,
    home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
