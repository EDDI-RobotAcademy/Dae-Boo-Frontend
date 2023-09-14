import axiosInst from '@/utility/axiosInst'
// import {REQUEST_MY_BOARD_LIST_TO_SPRING, REQUEST_MY_INFO_TO_SPRING} from '../myPage/mutation-types'
import {REQUEST_MY_BOARD_LIST_TO_SPRING} from '../myPage/mutation-types'

export default {
    getMyBoardToSpring({ commit }, payload){
        console.log("userId: " + payload)

        return axiosInst.get('/board/myBoard' , { params: { userId: payload }})
        .then((res) => {
            // console.log("res: " + res.data[0].boardName)
            commit(REQUEST_MY_BOARD_LIST_TO_SPRING, res.data)
        })
    },
    // getMyInfoToSpring( _, payload) {
    //     console.log("userId: " + payload)
    //     return  axiosInst.get('/user/userInfo', { params: { userId:payload }})
    //     .then((res) => {
    //         console.log("MyInfo res: " + res.data.name)
    //         commit(REQUEST_MY_INFO_TO_SPRING, res.data)
    //     })
    // },
    // requestMyInfoModifyToSpring(_, payload) {
    //     const { nickname, mobile, email,interest1, interest2, userId } = payload;
    //     // console.log("requestMyInfoModifyToSpring() nickname: " + nickname +
    //     //     "mobile: " + mobile +
    //     //     "userId: " + userId);
        
    //         return axiosInst.put(`/user/user-info/${userId}`, { nickname, mobile, email, interest1, interest2 })
    // },
    requestMyInfoModifyToSpring(_, payload) {
        const { nickname, mobile, email,interest1, userId } = payload;  
            return axiosInst.put(`/user/user-info/${userId}`, { nickname, mobile, email, interest1})
    },
    requestDeleteToSpring(_, payload) {
        return axiosInst.delete('/user/user-info', {params: { userId:payload }}
        ).then(() => {
            alert("탈퇴되었습니다.")
        }).catch(() => {
            alert("탈퇴되지 않았습니다.")
        })
    }
}