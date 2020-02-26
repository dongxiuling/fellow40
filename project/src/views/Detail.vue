<template>
    <div>
        我是详情页
        <!-- params传过来的参数 地址栏中没有参数 刷新取不到 -->
        <!-- 
        {{$route.params.id}}
        {{$route.params.name}} 
        -->
        <!-- query传过来的参数 在地址栏中会有参数 -->
        
        {{$route.query.id}}
        {{$route.query.name}} 
       
        <!-- 通过url传参  首先需要在router index.js配置-->
        <!-- {{$route.params.id}}
        {{$route.params.name}} -->
    </div>
</template>

<script>
    export default {
        // beforeRouteEnter(to,from,next){
        //     console.log(to,from,next);
        //     next(false);
        // }
    }
</script>

<style lang="scss" scoped>

</style>