import { createRouter, createWebHistory } from 'vue-router'
import mainRouter from '@/router/main';
import errorRouter from './error';
import logInRouter from '@/router/logIn'

const routes = [  
  ...mainRouter,
  ...errorRouter,
  ...logInRouter
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
