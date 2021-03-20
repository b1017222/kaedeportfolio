<template>
<section>
    <div class="page-wrapper">
        <h1 class="title">Work</h1>
        <div class="box-wrapper">
            <div v-for="(work, i) in works" :key="i" class="work-box">
                <img width="10%" v-bind:src= "work.icon" class="div-cover" @click="openModal(i)"/>
                <modal :ref='i'>
                    <div class="contents">
                        <h1>{{work.content}}</h1>
                        <img width="25%" v-bind:src= "work.icon" />
                        <button @click="closeModal(i)">閉じる</button>
                    </div>
                </modal>
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
      works: [
        {name: '神経衰弱', content: 'あああああ', icon: require('@/assets/aiueo.png')},
        {name: 'Kaedesportfolio', content: 'いいいいいいい', icon: require('@/assets/yorokobi.png')}
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
.work-box{
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
    width: 40%;
    vertical-align: top;
    margin: 0 20px 40px 0;
    border-radius: 20px;
    background-color: #fff;
    position: relative;
    padding-bottom: 64px;
}
.contents {
  background: #fff;
  border-radius: 5px;
  padding: 20px;
}
.div-cover{
    background-size: cover;
    background-position: 50% 50%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
</style>
