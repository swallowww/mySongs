<template>
  <div class="home-page">
    <my-header />
    <my-song
      v-for="(song,index) in musicLsit"
      :key="index"
      :song="song"
      :index="index"
      :total="musicLsit.length"
      :active="active"
      :setActive="setActive"
      :playState="playState"
    ></my-song>
    <my-foot></my-foot>
    <audio-player :playSrc="active" :changePlayState="changePlayState"></audio-player>
  </div>
</template>

<script>
import API from "@/api/api";
import mySong from "@/components/home/song";
import myHeader from "@/components/home/header";
import myFoot from "@/components/home/foot";
import audioPlayer from "@/components/common/audioPlayer";
export default {
  name: "home",
  data() {
    return {
      musicLsit: [],
      active: "",
      playState:"加载中"
    };
  },
  components: {
    mySong,
    myHeader,
    myFoot,
    audioPlayer
  },
  created() {
    this.getMusicList();
  },
  methods: {
    changePlayState(info){
      this.playState=info;
    },
    setActive(src) {
      if(this.active !== src){
        this.active = src;
      }else{
        let player=document.getElementById('player');
        if(player.paused){
          player.play();
          this.changePlayState('播放中')
        }else{
          player.pause();
          this.changePlayState('已暂停');
        }
      }
    },
    getMusicList() {
      this.$axios.get(API.getMusicList).then(res => {
        if (res.status == 200 && res.data) {
          this.musicLsit = res.data;
        }
      });
    }
  }
};
</script>

<style scoped>
.home-page {
  width: 100%;
  max-width: 750px;
  margin: auto;
}
</style>
