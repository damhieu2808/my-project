<template>
  <div id="app">
    <Header></Header>
    <HomePage></HomePage>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import HomePage from "./components/home/HomePage.vue";

export default {
  name: "App",
  components: {
    Header,
    HomePage,
    Footer
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
