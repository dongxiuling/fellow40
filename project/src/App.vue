<template>
  <div id="app">
      <!-- <common-header></common-header> -->
      <!-- <home></home> -->
      <!-- <common-footer></common-footer> -->
      <router-link to="/">首页</router-link> | 
      <router-link to="/home">首页</router-link> | 
      <!-- <router-link to="/detail">详情页</router-link> |  -->
      <!-- <router-link :to="{name:'detail', params:{id:25,name:'xx'}}">详情页</router-link> |  -->
      <router-link :to="{path:'/detail', query:{id:25,name:'xx'}}">详情页</router-link> | 
      <!-- <router-link to="/detail/25/xx">详情页</router-link> |  -->
      <router-link to="/abc">abc</router-link> |
      <button @click="fn">click</button>
      <!--占位  -->
      <transition name="fade">
        <router-view/>
      </transition>


  </div>
</template>
<script>
    // 1 import 引入 2 components中声明
    import CommonHeader from './components/CommonHeader';
    import CommonFooter from './components/CommonFooter';
    import Home from './views/Home'
    export default {
        data(){
          return {

          }
        },
        methods:{
          fn(){
            // 
            // this.$router.push('/home');
            // this.$router.push({path:'/detail', query:{id:25,name:'xx'}});
            this.$router.go(-1); //后退一步  相当于history.back(); 
            this.$router.go(1); //前进一步  相当于history.forward();
          }
        },
        components:{
          CommonHeader,
          CommonFooter,
          Home
        }
    }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-enter{
  // opacity: 0;
  transform: translate(100%);
}
.fade-enter-active{
  // transition:opacity 1s ease ;
  transition:transform 1s ease ;
}
.fade-enter-to{
  // opacity: 1;
  transform: translate(0)
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition:opacity 1s linear;
}
.fade-leave-to{
  opacity: 0;
}
</style>
