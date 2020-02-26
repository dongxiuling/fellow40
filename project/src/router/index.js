import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Detail from './../views/Detail.vue';
import Test from './../views/Test.vue';
import A from './../views/A';

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
    path:"/detail/:id/:name",
    name:"detail",
    component:Detail
  },{
    path:"/test",
    component:Test
  }
  
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
