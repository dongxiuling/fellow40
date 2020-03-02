<template>
    <div>
        <img v-for="(obj,index) in $store.state.photo" 
            :key="index" 
            :src="obj.src" 
            @click="$router.push({path:'/photo-detail',query:{index}})"
            alt="">
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                // photo:[]
            }
        },
        created(){
            axios.get('data/photodata.json')
            .then((res)=>{
                // this.photo = res.data.photoData;
                this.$store.commit('addPhoto',res.data.photoData);
            }).catch((res)=>{
                console.log(res)
            })
        }
    }
</script>

<style lang="scss" scoped>
    img{
        width:50%;
        float: left;
    }
</style>