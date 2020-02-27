<template>
    <div>
        <!-- $store.commit('')触发mutations中的方法 -->
        <button @click="$store.commit('add',5)">count add</button>
        {{$store.state.count}}
        {{$store.state.num}}
    </div>
</template>

<script>
    export default {
        
       
    }
</script>

<style lang="scss" scoped>

</style>