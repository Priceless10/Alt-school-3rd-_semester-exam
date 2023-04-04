/**import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import Repository from '../components/Repository.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView 
      },
      {
        path: '/repo/:id',
        name: 'about',
        component: Repository 
      },]
      })**/
import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ErrorView from '../views/404.vue';
import Repository from '../views/Repository.vue';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView 
      },
      {
        path: '/repo',
        name: 'repo-page',
        component: AboutView
      },
      
      {
        path: '/:catchAll(.*)*',
        name: 'Error404',
        component: ErrorView
      },
    ]
      })

      export default router;
// router.js
/**import {createRouter, createWebHistory} from "vue-router"
import Home from '../views/HomeView.vue'
import Repository from '../components/Repository.vue'
import NotFound from '../views/404.vue'

vue.use(vue-router)

export default new vue-router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/repo/:id',
      name: 'Repository',
      component: Repository
    },
    {
      path: '*',
      name: 'NotFound',
      component: 404
    }
  ]
})

**/