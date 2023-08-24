import { createRouter, createWebHistory } from 'vue-router'
import mainRouter from '@/router/main';
import errorRouter from './error';
const routes = [  
  ...mainRouter,
  ...errorRouter
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
