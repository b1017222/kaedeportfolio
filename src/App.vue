<template>
  <body>
    <div id="wrap">
      <div id="app">
        <top-menu></top-menu>
        <router-view class="container"></router-view>
      </div>
    </div>
  </body>
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
.wrap{
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #424242;
}
</style>

