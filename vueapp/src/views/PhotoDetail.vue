<template>
    <div>
        <div class="img-box" 
            :style="{backgroundImage:`url(${$store.state.photo[idx].src})`}">
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                idx:this.$route.query.index
            }
        }
    }
</script>

<style lang="scss" scoped>
    .img-box{
        position: absolute;
        left:0;
        top:1rem;
        bottom:1rem;
        right:0;
        background: #000 center center no-repeat ;
        background-size:contain;
    }
</style>