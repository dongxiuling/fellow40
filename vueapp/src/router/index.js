import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from './../views/Movie'
import Music from './../views/Music'
import Book from './../views/Book'
import Photo from './../views/Photo'
import MovieDetail from './../views/MovieDetail'
import MusicDetail from './../views/MusicDetail'
import PhotoDetail from './../views/PhotoDetail'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/movie'
  },{
    path:'/movie',
    component:Movie
  },
  {
    path:'/music',
    component:Music
  },
  {
    path:'/book',
    component:Book
  },
  {
    path:'/photo',
    component:Photo
  },{
    path:'/movie-detail',
    name:'movie-detail',
    component:MovieDetail
  }
  ,{
    path:'/music-detail',
    component:MusicDetail
  },
  ,{
    path:'/photo-detail',
    component:PhotoDetail
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
