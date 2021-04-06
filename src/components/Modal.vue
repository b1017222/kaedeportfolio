<template>
  <transition name="modal">
    <div class="modal-open" v-if="modal">
      <p class="modal-close" @click.self="close">✖</p>
      <slot class="contents"/>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      modal: false
    }
  },
  methods: {
    open () {
      this.modal = true
    },
    close () {
      this.modal = false
    }
  }
}
</script>

<style>
@import '../assets/styles/base.css';
.modal-enter-active,
.modal-leave-active {
  transition: opacity 1s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active > .contents {
  animation-name: modal-enter;
  animation-duration: 1s;
  animation-timing-function: ease;
}
.modal-leave-active > .contents {
  animation-name: modal-leave;
  animation-duration: 1s;
  animation-timing-function: ease;
}

@keyframes modal-enter {
  0% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes modal-leave {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.5, 1.5);
  }
  100% {
    transform: scale(0, 0);
  }
}

</style>
