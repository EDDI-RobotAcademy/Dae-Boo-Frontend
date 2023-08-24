const logInRouter = [
    {
        path: "/authentication/naver/login",
        name: "naver",
        component: () => import("@/views/logIn/LoginAccess.vue"),
    }
    
]

export default logInRouter