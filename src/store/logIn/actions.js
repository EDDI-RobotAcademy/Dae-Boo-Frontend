import axiosInst from '@/utility/axiosInst'

export default {
    requestNaverLoginToSpring() {
        return axiosInst.get('/authentication/naver/login')
            .then((res) => {
                window.location.href = res.data;
            })
    },
    getTokenToSpring(context, payload) {
        axiosInst.get("/authentication/naver/oauth-code?code=" + payload)
            .then((res) => {
                console.log("token : " + res.data)
                console.log("token : " + res.data.access_token)

                localStorage.setItem("accesstoken", res.data.access_token)
                localStorage.setItem("refreshtoken", res.data.refresh_token)
            });

    }
}