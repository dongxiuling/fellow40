<template>
  <div id="app">
     哈哈哈
     <a href="#">baidu</a>
     <div id="arrow"></div>
     <ul>
       <li class="list1">111</li>
       <li class="list2">222</li>
       <li class="list3">333</li>
     </ul>
  </div>
</template>

<style lang="scss">
@mixin arrow($width:5px) {
  width:0;
  height:0;
  border:#{$width} solid transparent;
  border-bottom:#{$width} solid #000;
}
$color:red;
$a:'width';
/*这是注释**/
// 这也是注释2
body{
  background: $color;
  #{$a}:200px;
  #app{
    width: abs(-300px+100px);
    height: 300px;
    background: #0f0;
    a{
      color:#00f;
      &:hover{
        color:pink;
      }
    }
    #arrow{
      @include arrow(20px);
    }
    @for $i from 1 through 5{
      .list#{$i}{
        width:20px*$i;
        background: violet;
      }
    }
  }
}
</style>
