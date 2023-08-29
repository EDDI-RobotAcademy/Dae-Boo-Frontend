import axiosInst from '@/utility/axiosInst'

export default {
    // NAVER OAuth
    requestNaverLoginToSpring() {
        return axiosInst.get('/authentication/naver/login')
            .then((res) => {
                window.location.href = res.data;
                alert(res.data)
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
    },
    }



    getBoardList(){
        axiosInst.get('/jpa-board/list')
            .then((res)=>{
                    console.log(res.data)
            })
            .catch(()=>{
                console.error
            })
    },
    // KAKAO OAuth
    requestKakaoLoginToSpring () {
        return axiosInst.get('/authentication/kakao/login')
        .then((res) => {
          window.location.href = res.data;
      })
    },
    getKakaoTokenToSpring(context, payload) {
      axiosInst.get("/authentication/kakao/callback", { params: { code: payload } })
        .then((res) => {
            console.log("accessToken : " + res.data.access_token)
            console.log("refreshToken : " + res.data.refresh_token)
  
            localStorage.setItem("accesstoken", res.data.access_token)
            localStorage.setItem("refreshtoken", res.data.refresh_token)
        });
    },
}