import axiosInst from '@/utility/axiosInst'
import {
    REQUEST_USERID_TO_SPRING,
    REQUEST_USER_TOKEN_TO_SPRING,
    REQUEST_USER_INFO_TO_SPRING
} from '../logIn/mutation-types'

export default {
    // NAVER OAuth
    requestNaverLoginToSpring() {
        return axiosInst.get('/authentication/naver/login')
            .then((res) => {
                window.location.href = res.data;
                alert(res.data)
            })
    },
    getTokenToSpring({ commit }, payload) {

        axiosInst.get("/authentication/naver/oauth-code?code=" + payload)
            .then((res) => {
                console.log("res.data : " + res.data)
                console.log("access_token : " + res.data.naverOAuthToken.access_token)
                console.log("userId : " + res.data.userId)
                localStorage.setItem("accesstoken", res.data.naverOAuthToken.access_token)
                localStorage.setItem("refreshtoken", res.data.naverOAuthToken.refresh_token)
                // localStorage.setItem("userId", res.data.userId)
                commit(REQUEST_USERID_TO_SPRING, res.data.userId)
            });
    },
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
    getKakaoTokenToSpring({commit}, payload) {
		alert("payload: " + payload)
        axiosInst.get("/authentication/kakao/callback", { params: { code: payload } })
        .then((res) => {
        //   console.log("accessToken : " + res.data.access_token)
        //   console.log("refreshToken : " + res.data.refresh_token)

        //   localStorage.setItem("accesstoken", res.data.access_token)
        //   localStorage.setItem("refreshtoken", res.data.refresh_token)

        console.log("userToken : " + res.data)
        localStorage.setItem("userToken", res.data)
        
        commit(REQUEST_USER_TOKEN_TO_SPRING, res.data)

        // 추가되는 코드 (토큰으로 사용자 정보 가져오기 함께 실행)
        const userToken = window.localStorage.getItem('userToken');
        alert("userToken: " + userToken);

        return axiosInst.post("/user/testToken", {
            userToken
        }).then((res) => {
            commit(REQUEST_USER_INFO_TO_SPRING, res.data);
            alert("사용자 정보 잘 받아왔습니다.");
        });
      })
      .catch(() => {
        console.error
      });
    },
    // vuex에 존재하는 값 삭제 (로그아웃)
    logout({commit}) {
        const LogInModule = 'LogInModule';

        localStorage.removeItem("userToken");

        // Vuex 스토어의 memberInfo 초기화
        commit(`${LogInModule}/setMemberInfo`, null);
    }
}