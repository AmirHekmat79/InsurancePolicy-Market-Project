<template>
    <div ref="lottieContainer"></div>
  </template>
  
  <script>
  import lottie from 'lottie-web';
  
  export default {
    name: 'LottieAnimation',
    props: {
      animationData: {
        type: Object,
        required: true
      },
      loop: {
        type: Boolean,
        default: true
      },
      autoplay: {
        type: Boolean,
        default: true
      },
      speed: {
        type: Number,
        default: 1
      },
      backgroundColor: {
        type: String,
        default: 'red'
      }
    },
    mounted() {
      this.initLottie();
    },
    methods: {
      initLottie() {
        this.lottieAnimation = lottie.loadAnimation({
          container: this.$refs.lottieContainer,
          renderer: 'svg',
          loop: this.loop,
          backgroundColor : this.backgroundColor,
          speed : this.speed,
          autoplay: this.autoplay,
          animationData: this.animationData
        });
      }
    } ,
    
    
  }
  </script>