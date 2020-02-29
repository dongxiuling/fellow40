<template>
    <div>
电影详情页
{{$route.query.id}}
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                movie:{}
            }
        },
        // https://api.douban.com/v2/movie/subject/26942674
        created(){
            axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/subject/'+this.$route.query.id)
            .then((res)=>{
                // console.log(res.data)
                this.movie = res.data;
            }).catch((res)=>{
                console.log(res)
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>