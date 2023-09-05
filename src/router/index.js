import { createRouter, createWebHistory } from "vue-router";
import mainRouter from "@/router/main";
import errorRouter from "./error";
import logInRouter from "@/router/logIn";
import homeRouter from "./home";
import helpRouter from "./help";
import ManagementRouter from "@/router/management";
import myPageRouter from "./myPage";
import recruitmentRouter from "./recruitment";
import cardRouter from "./card";
import noticeRouter from "./notice";

const routes = [
  ...mainRouter,
  ...errorRouter,
  ...logInRouter,
  ...helpRouter,
  ...homeRouter,
  ...ManagementRouter,
  ...myPageRouter,
  ...recruitmentRouter,
  ...cardRouter,
  ...noticeRouter
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
