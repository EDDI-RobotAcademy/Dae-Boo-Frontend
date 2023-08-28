const logInRouter = [
    {
        path: "/authentication/naver/login",
        name: "naver",
        component: () => import("@/views/logIn/LoginAccess.vue"),
    },
    {
        path: "/authentication/kakao/callback",
        name: "kakao",
        component: () => import("@/views/logIn/KakaoLoginAccess.vue"),
        props: route => ({ code: route.query.code }), // 이 부분을 추가하여 query 파라미터를 props로 전달합니다.
    },
]

export default logInRouter