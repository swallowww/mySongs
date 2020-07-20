<template>
  <div class="audio-player">
    <audio
      :src="audioSrc"
      loop="loop"
      id="player"
      autoplay="autoplay"
      @canplaythrough="canplaythrough"
    ></audio>
  </div>
</template>

<script>
import API from "@/api/api";
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
    computed:{
        audioSrc(){
            return this.playSrc?API.hostName+'/'+this.playSrc:'';
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