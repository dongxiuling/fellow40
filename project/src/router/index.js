import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Detail from './../views/Detail.vue';
import Test from './../views/Test.vue'

Vue.use(VueRouter);

const routes = [
  {
    path:"/home",
    component:Home
  },{
    path:"/detail",
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
