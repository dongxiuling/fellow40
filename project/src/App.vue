<template>
  <div id="app">
      <!-- <common-header></common-header> -->
      <!-- <home></home> -->
      <!-- <common-footer></common-footer> -->
      <router-link to="/">首页</router-link> | 
      <router-link to="/home">首页</router-link> | 
      <!-- <router-link to="/detail">详情页</router-link> |  -->
      <!-- <router-link :to="{name:'detail', params:{id:25,name:'xx'}}">详情页</router-link> |  -->
      <!-- <router-link :to="{path:'/detail', query:{id:25,name:'xx'}}">详情页</router-link> |  -->
      <router-link to="/detail/25/xx">详情页</router-link> | 
      <router-link to="/abc">abc</router-link> |
      <!--占位  -->
      <router-view/>
  </div>
</template>
<script>
    // 1 import 引入 2 components中声明
    import CommonHeader from './components/CommonHeader';
    import CommonFooter from './components/CommonFooter';
    import Home from './views/Home'
    export default {
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
</style>
