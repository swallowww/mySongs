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
    ></my-song>
    <my-foot></my-foot>
  </div>
</template>

<script>
import API from "@/api/api";
import mySong from "@/components/home/song";
import myHeader from "@/components/home/header";
import myFoot from "@/components/home/foot";
export default {
  name: "home",
  data() {
    return {
      musicLsit: [],
      active: ""
    };
  },
  components: {
    mySong,
    myHeader,
    myFoot
  },
  created() {
    this.getMusicList();
  },
  methods: {
    setActive(src) {
      this.active = src;
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
