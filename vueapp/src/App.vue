<template>
  <div id="app">
    <common-header></common-header>
    <div class="container">
      dfguhijoiudgfhjklkgjfhgjh
    </div>
    <common-footer></common-footer>
  </div>
</template>
<script>
import CommonHeader from './components/CommonHeader';
import CommonFooter from './components/CommonFooter';

export default {
    components:{
      CommonHeader,
      CommonFooter
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
}
.container{
  margin-top:1rem;
  margin-bottom: 1rem;
}


</style>
