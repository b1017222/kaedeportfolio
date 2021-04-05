<template>
<section>
  <div class="page-wrapper">
    <h1 class="title">Work</h1>
    <p>{{ message }}</p>
    <div class="box">
      <div class="work-box" v-for="(work, i) in works" @key="i">
          <img width="100%" v-bind:src= "work.icon" class="" @click="openModal(i)"/>
          <modal @ref='i'>
            <div class="contents">
              <h1>{{work.name}}</h1>
              <img width="25%" v-bind:src= "work.icon" />
              <p>{{work.content}}</p>
              <button @click="closeModal(i)">閉じる</button>
            </div>
          </modal>
          <div>{{work.name}}</div>
        </div>
    </div>
  </div>
</section>
</template>

<script>
import Modal from './Modal'

export default {
  name: 'Work',
  components: {
    Modal
  },
  data () {
    return {
      message: 'これまで作成した作品を載せていきます。更新予定です',
      works: [
        {name: 'Kaedesportfolio', content: 'あああああ', icon: require('@/assets/samune1.png')},
        {name: '神経衰弱ゲーム', content: 'いいいいいいい', icon: require('@/assets/samune2.png')}
      ]
    }
  },
  methods: {
    openModal (i) {
      this.$refs[i][0].open()
    },
    closeModal (i) {
      this.$refs[i][0].close()
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
  padding:40px;
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
