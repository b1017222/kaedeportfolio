<template>
  <div class="header-menu">
  </div>
</template>

<script>
export default {
  name: 'Myportfolio',
  data () {
    return {
      msg: '12345',
      text: 'Test Data',
      ShowText: false
    }
  },
  methods: {
    toggle: function () {
      this.ShowText = !this.ShowText
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
div.content {
  background-color: rgb(114, 14, 14);
  display: inline-block;
  margin: 10px;
  width: 30%;
}
</style>
