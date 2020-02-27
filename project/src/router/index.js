import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Detail from './../views/Detail.vue';
import Test from './../views/Test.vue';
import A from './../views/A';
import Error from './../views/Error';
import Test1 from './../views/Test1'

Vue.use(VueRouter);

const routes = [
  {
    path:"/home",
    component:Home,
    children:[
      {
        path:"a",
        component:A
      }
    ]
  },{
    path:"/detail",
    name:"detail",
    component:Detail,
    // beforeEnter(to,from,next){
    //   console.log(to,from,next);
    //   next(false);
    // }
  },{
    path:"/test",
    component:Test,
    alias:'/abc'
  },
  ,{
    path:"/",
    redirect:'/home'
  },{
    path:'/test1',
    component:Test1
  },
  {
    path:'*',
    component:Error
  }
  
  
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
