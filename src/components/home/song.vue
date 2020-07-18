<template>
  <div :class="'song '+bgColor">
    <div class="song-box">
      <span class="song-index">{{songIndex}}</span>
      <span class="song-dir">
        <div class="sub-list" v-if="song.fileList && song.fileList.song">
          <p v-for="(s,i) in song.fileList.song" :key="i">
            <span
              :class="{'active':active===s.src}"
              v-on:click="songClick(s)"
            >{{cutEndName(s.name)}}<i>（{{song.year}}）</i></span>
          </p>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import API from "@/api/api";
export default {
  data() {
    return {};
  },
  props: {
    song: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    setActive: {
      type: Function,
      default: () => {}
    },
    active: {
      type: String,
      default: ""
    }
  },
  computed: {
    bgColor() {
      if (this.index % 2 === 0) {
        return "white";
      } else {
        return "grey";
      }
    },
    songIndex() {
      if (this.total && this.total.toString) {
        let tlen = String(this.total).length;
        let nlen = String(this.index + 1).length;
        let res = "";
        for (let i = 0; i < tlen - nlen; i++) {
          res += "0";
        }
        res += this.index + 1;
        return res;
      } else {
        return this.index + 1;
      }
    }
  },
  methods: {
    songClick(s) {
      // this.active=s.src;
      this.setActive(s.src);
    },
    cutEndName(fileName) {
      for (let i = 0; i < API.cutSongEnd.length; i++) {
        let reg = new RegExp("." + API.cutSongEnd[i], "g");
        fileName = fileName.replace(reg, "");
      }
      return fileName;
    }
  }
};
</script>

<style lang="less" scoped>
.song {
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  .song-box {
    width: 100%;
    overflow: hidden;
    color: #333;
    display: flex;
    justify-content: center;
    > span {
      display: block;
      float: left;
      &.song-index {
        color: #ccc;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      &.song-dir {
        flex: 1;
        padding: 5px 0;
        .sub-list {
          width: 100%;
          > p {
            display: block;
            width: 100%;
            overflow: hidden;
            padding-right: 10px;
            > span {
              padding: 5px 0;
              display: block;
              float: left;
              line-height: 22px;
              cursor: pointer;
              &:hover {
                color: #ff5900;
              }
              &.active {
                color: #ff5900;
              }
              i{
                font-style: normal;
                font-size: 12px;
                color:#ccc;
              }
            }
          }
        }
      }
    }
  }
  &.white {
    background-color: #fff;
  }
  &.grey {
    background-color: #f6f6f6;
  }
}
</style>