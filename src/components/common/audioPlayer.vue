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
    mounted(){
        this.audio=document.getElementById('player');
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
.audio-player {
  // background-color:#229043;
  // width:200px;
  // height:50px;
  // position: fixed;
  // top:20px;
  // left:50%;
}
</style>