<template>
  <section>
        <div class="greet">
          <div class="row justify-content-center">
            <h1 class="heading w-80">{{ greet }}</h1>
          </div>
          <div class="row justify-content-center">
            <div class="message">
            <p>{{ message }}</p>
          </div>
          </div>
        </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      greet: 'Welcom to my home page!',
      message: 'こんにちは。こちらのサイトは大学生広田のポートフォリオサイトとなっております。これまでのプログラム経験や作品などを載せています。どうぞよろしくお願いします。'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/styles/base.css';
.greet{
  font-family:"Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体";
  padding-top:100px;
}
.message{
  margin: auto;
  width:80%;
  font-size:16px;
  color:#424242;
}
.heading{
  font-size:auto;
  font-weight:bolder;
  color:rgb(235, 185, 22);
  -webkit-text-stroke:2px #FFF;
  padding-bottom:70px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
