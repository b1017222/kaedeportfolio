<template>
<div class="">
  <section>
    <div class="page-wrapper">
      <h1 class="row justify-content-center title">Work</h1>
      <p>{{ message }}</p>
      <div class="box row justify-content-center pt-4">
        <div class="work-box col" v-for="(work, i) in works" :key="i">
          <img width="100%" v-bind:src= "work.icon" class="" @click="openModal('modal' + i)"/>
          <modal :ref="'modal' + i">
            <div class="contents">
              <h1 class="pt-2">{{work.name}}</h1>
              <img width="25%" v-bind:src= "work.icon"/>
              <p class="mx-auto col-6 pt-2">{{work.content}}</p>
              <p>{{work.language}}</p>
              <div v-if="work.url">
                <a :href="work.url" target="_blank" rel="noopener noreferrer" class="url-color">
                    {{ work.value }}
                </a>
              </div>
              <button class="btn btn-warning pt-2" @click="closeModal('modal' + i)">close</button>
            </div>
          </modal>
          <div>{{work.name}}</div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import Modal from '../components/Modal.vue'

export default {
  name: 'Work',
  components: {
    Modal
  },
  data () {
    return {
      message: 'これまで作成した作品を載せていきます。更新予定です',
      works: [
        {name: 'Kaedesportfolio', content: 'このポートフォリオサイトです。就活用に作成しましたがせっかくなのでモダンjsの学習も兼ねてVueを用いて作成しました。', language:'使用言語　 Vue.js HTML/CSS Bootstrap', icon: require('@/assets/samune1.png'), url:''},
        {name: '神経衰弱ゲーム', content: '一年ほど前にモバイルアプリで簡単なゲームを作ってみようと思いアルゴリズムの勉強も兼ねて作成しました。',language:'使用言語　 Kotlin', icon: require('@/assets/samune2.png'),url:'https://github.com/b1017222/ShinkeiSuijaku', value:'作品はこちらからどうぞ'},
        {name: 'Todo-List', content: 'サーバーサイドの仕組みやDockerについてもう一度しっかりと勉強をしたいと思い作成しました。',language:'使用言語　 PHP(Laravel) HTML Docker MySQL', icon: require('@/assets/todolist.png'),url:'https://github.com/b1017222/Todo-List', value:'作品はこちらからどうぞ'}
      ]
    }
  },
  methods: {
    openModal (i) {
      console.log(this.$refs[i])
      this.$refs[i].open()
    },
    closeModal (i) {
      console.log(i)
      this.$refs[i].close()
    }
  }
}
</script>

<style>
@import '../assets/styles/base.css';
.box{
display: flex;
justify-content: center;
}
.work-box{
  width:400px;
  padding:20px;
}
.work-box img{
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 30%);
  width:400px;
  height:227px;
}
.contents{
  width:700px;
  height:500px;
  background-color:#FFF;

}
</style>
