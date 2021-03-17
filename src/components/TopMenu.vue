<template>
    <div class="header-color">
        <ol>
            <li v-for="(item, i) in items" :key=i>
                <router-link v-bind:to= item.path>
                    {{ item.title }}
                </router-link>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
  name: 'TopMenu',
  data () {
    return {
      changecolor: false,
      items: [
        { title: 'HOME', path: '/' },
        { title: 'PROFILE', path: '/profile' },
        { title: 'SKILL', path: '/skill' },
        { title: 'WORK', path: '/work' },
        { title: 'CONTACT', path: '/contact' }
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      if (window.scrollY > 0) {
        document.getElementsByClassName(`header-color`)[0].style.opacity = 0.5
      } else {
        document.getElementsByClassName(`header-color`)[0].style.opacity = 1.0
      }
    }
  }
}
</script>

<style scoped>

.header-color{
    background-color: black;
    position:-webkit-sticky;
    position:sticky; top:0;
    width:100%;
}
.changecolor{
  background-color: rgb(185, 55, 55);
}
ol {
  margin-top: 0;
  margin-left: auto;
  width: 600px;
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 100px;
  height: 50px;
  margin-left:10px;
  margin-right:10px;
  font-size: 14px;
  background-color: black;
  border-radius: 8px;
  position: relative;
}

li:hover {
  opacity: 0.4;
}

a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  line-height: 50px;
}
</style>
