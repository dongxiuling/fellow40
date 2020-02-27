<template>
  <div>
    <!-- $store.commit('') 触发mutations中的方法 -->
    <button @click="$store.commit('add',5)">count add</button>
    <button @click="reduce">count --</button>
    <button @click="addAction">触发addAction</button>
    <div>
         count:{{$store.state.count}}
    </div>
    <div>
         num:{{$store.state.num}}
    </div>
    <div> 通过mapState映射出来的count值 :{{count}}</div>
    <div>
        getters中的xx  count*2+num：{{xx}}
    </div>
    

  </div>
</template>

<script>
import { mapState, mapMutations ,mapGetters,mapActions} from "vuex";
export default {
    computed:{
        ...mapState(["count","num"]),
        ...mapGetters(["xx"])
    },
    methods:{
        ...mapMutations(["add","reduce"]),
        ...mapActions(['addAction'])
    }   
};


// let obj = {name:'zs',age:20}
// let obj2 = {school:'zzz'}
// let xx = {...obj,...obj2}
// xx = {name:'zs',age:20,school:'zz'}

</script>





<style lang="scss" scoped>
</style>