const logInRouter = [
    {
        path: "/login-page",
        name: "LoginPage",
        component: () => import("@/views/logIn/LoginPage.vue"),
        //component: LoginPage
    },
    {
        path: "/authentication/naver/login",
        name: "naver",
        component: () => import("@/views/logIn/LoginAccess.vue"),
    }
    
]

export default logInRouter