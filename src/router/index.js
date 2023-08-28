import { createRouter, createWebHistory } from 'vue-router'
import mainRouter from '@/router/main';
import errorRouter from './error';
import logInRouter from '@/router/logIn'
import homeRouter from './home';
import helpRouter from './help';

const routes = [  
  ...mainRouter,
  ...errorRouter,
  ...logInRouter,
  ...helpRouter,
  ...homeRouter,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
