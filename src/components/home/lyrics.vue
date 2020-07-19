<template>
    <div v-show="show" class="home-lyrics" v-html="text">
    </div>
</template>

<script>
import API from "@/api/api";
export default {
    props:{
        lyricsUrl:{
            type:String,
            default:''
        },
        show:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            text:''
        }
    },
    watch:{
        show(val){
            if(val && this.lyricsUrl){
                this.getLyrics();
            }
        }
    },
    methods:{
        getLyrics(){
            this.$axios.get(API.getMusicList+'?lyrics='+this.lyricsUrl).then(res => {
                if (res.status == 200 && res.data) {
                    this.text=res.data.replace(/\n/g,'<br>');
                }
            });
        }
    }
}
</script>

<style lang="less" scoped>
.home-lyrics{
    width:100%;
    float:left;
    padding-left: 5px;
    padding-bottom: 10px;
}
</style>