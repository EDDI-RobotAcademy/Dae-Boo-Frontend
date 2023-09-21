import axiosInst from '@/utility/axiosInst'
import {
    REQUEST_MY_BOARD_LIST_TO_SPRING,
    REQUEST_MY_INFO_TO_SPRING,
    REQUEST_MY_COMMENT_LIST_TO_SPRING
} from '../myPage/mutation-types'

export default {
    getMyBoardToSpring({ commit }, payload){
        console.log("userId: " + payload)

        return axiosInst.get('/board/myBoard' , { params: { userId: payload }})
        .then((res) => {
            // console.log("res: " + res.data[0].boardName)
            commit(REQUEST_MY_BOARD_LIST_TO_SPRING, res.data)
        })
    },

    getMyInfoToSpring({commit}, payload) {
        console.log("userId: " + payload)
        return axiosInst.get('/user/userInfo', { params: { userId:payload }})
        .then((res) => {
            console.log("MyInfo res: " + res.data.name)
            commit(REQUEST_MY_INFO_TO_SPRING, res.data)
        })
        .catch((error) => {
            console.error("Error fetching MyInfo:", error);
        });
    },
    getMyCommentsToSprong({ commit }, payload){
        return axiosInst.get('/comment/myComment', { params: { userId: payload }})
        .then((res) => {
            commit(REQUEST_MY_COMMENT_LIST_TO_SPRING,res.data)
        })
    },
    requestMyInfoModifyToSpring({commit}, payload) {
        const { nickname, mobile, email, interest1, interest2, userId } = payload;
        axiosInst.put(`/user/user-info/${userId}`, { nickname, mobile, email, interest1, interest2 })
        .then((res) => {
            commit(REQUEST_MY_INFO_TO_SPRING, res.data);
        })
    },
    requestMyPageUserInfo({commit}) {
        // 추가되는 코드 (토큰으로 사용자 정보 가져오기 함께 실행)
        const userToken = window.localStorage.getItem('userToken');
        return axiosInst.post("/user/testToken", {
            userToken
        }).then((res) => {
            commit(REQUEST_MY_INFO_TO_SPRING, res.data);
        });
   },
    // requestMyInfoModifyToSpring(_, payload) {
    //     const { nickname, mobile, email,interest1, userId } = payload;  
    //         return axiosInst.put(`/user/user-info/${userId}`, { nickname, mobile, email, interest1})
    // },
    requestDeleteToSpring(_, payload) {
        return axiosInst.delete('/user/user-info', {params: { userId:payload }}
        ).then(() => {
            alert("탈퇴되었습니다.")
        }).catch(() => {
            alert("탈퇴되지 않았습니다.")
        })
    },
    deleteVuexUserInfo({commit}) {
        commit(REQUEST_MY_INFO_TO_SPRING, null);
    }
}