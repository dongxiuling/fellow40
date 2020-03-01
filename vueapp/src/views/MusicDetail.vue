<template>
    <div>
        音乐
        <!-- {{$route.query.id}} -->
        <aplayer 
            :music="{
                title: 'secret base~君がくれたもの~',
                artist: 'Silent Siren',
                src: 'http://m10.music.126.net/20200301002801/5112efffc3818e8b88a74e36a5352e94/ymusic/b1c4/b5de/74d0/9158ae4873e10b743790320db9ef9b29.mp3',
                pic: 'http://p1.music.126.net/QHw-RuMwfQkmgtiyRpGs0Q==/102254581395219.jpg',
                lrc:'data/xxx.a.lrc'
            }"
            :list="musicList"
            :showLrc= "true"
        />

        
    </div>
</template>

<script>
    import axios from 'axios';
    import Aplayer from 'vue-aplayer'
    export default {
        data(){
            return {
                musicList:[]
            }
        },
        created(){
            axios.get('data/musicdata.json')
            .then((res)=>{
                this.musicList = res.data.musicData;
            }).catch((res)=>{

            })
        },
        components:{
            Aplayer
        }
    }
</script>

<style lang="scss" scoped>


</style>