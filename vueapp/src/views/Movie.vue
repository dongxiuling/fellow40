<template>
    <div>
        <ul class="list-box">
            <li class="list" 
                v-for="obj in movieList" 
                :key="obj.id"
                @click="goDetail(obj.id)"
            >
                <img :src="obj.images.medium" alt="">
                <div class="desc-box">
                    <h3>{{obj.original_title}}</h3>
                    <div>
                        <span v-for="cast in obj.casts" :key="cast.id">{{cast.name}}|</span>
                    </div>
                    <p>207147已观看</p>
                    <p>年份：2019</p>
                    <p>
                        <span v-for="(genre,index) in obj.genres" :key="index">{{genre}}</span>
                    </p>
                </div>
            </li>
            
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                movieList:[]
            }
        },
        methods:{
            goDetail(id){
                this.$router.push({path:'/movie-detail',query:{id}})
                // this.$router.push('/movie-detail/111')
            }
        },
        // 通过ajax请求数据  
        /**
         * 跨域 
         * 浏览器为了安全起见同源策略  -域名 协议 端口号 只要有一个不同的跨域
         * 
         * 解决方式  jsonbird
         * https://bird.ioliu.cn/v1?url=xx
         */
        created(){
            axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10')
            .then((res)=>{
                // console.log(res.data)
                this.movieList = res.data.subjects;
            }).catch((res)=>{
                console.log(res)
            })
        }
    }
</script>

<style lang="scss" scoped>
    .list{
        display: flex;
        color:#000;
        margin-bottom: 0.2rem;
    }
    .list img{
        width:1.8rem;
        height:2.46rem;
        margin-right: 0.2rem;
    }
    .desc-box{
        flex:1;
    }
    .list-box{
        padding:0.2rem;
    }
</style>