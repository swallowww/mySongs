<template>
  <div class="audio-player">
    <audio
      :src="playSrc"
      loop="loop"
      id="player"
      autoplay="autoplay"
      @canplaythrough="canplaythrough"
    ></audio>
  </div>
</template>

<script>
export default {
    props:{
        playSrc:{
            type:String,
            default:''
        },
        changePlayState:{
            type:Function,
            default:()=>{}
        }
    },
    data(){
        return {
            audio:''
        }
    },
    watch:{
        playSrc(){
            this.changePlayState('加载中')
        }
    },
    methods:{
        canplaythrough(){
            this.changePlayState('播放中')
        }
    }
}
</script>

<style lang="less" scoped>

</style>