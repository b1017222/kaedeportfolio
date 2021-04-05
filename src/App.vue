<template>
  <div id="app">
    <top-menu></top-menu>
    <router-view/>
  </div>
</template>

<script>

import TopMenu from './components/TopMenu.vue'

export default {
  name: 'App',
  components: {
    TopMenu
  }
}
</script>

<style>
body {
  margin: auto;
  background-image:url('./assets/egg.png');

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #424242;
}
</style>
