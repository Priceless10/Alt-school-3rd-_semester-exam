import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
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
        component: Repository
      },
      
      {
        path: '/:catchAll(.*)*',
        name: 'Error404',
        component: ErrorView
      },
    ]
      })

      export default router;
