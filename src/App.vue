<template>
  <div id="app">
    <Header></Header>
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Home,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
