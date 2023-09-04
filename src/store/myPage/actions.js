import axiosInst from '@/utility/axiosInst'
import {REQUEST_MY_BOARD_LIST_TO_SPRING, REQUEST_MY_INFO_TO_SPRING} from '../myPage/mutation-types'

export default {
    getMyBoardtoSpring({ commit }, payload){
        console.log("userId: " + payload)

        return axiosInst.get('/board/myBoard' , { params: { userId: payload }})
        .then((res) => {
            console.log("res: " + res.data[0].boardName)
            commit(REQUEST_MY_BOARD_LIST_TO_SPRING, res.data)
        })
    },
    getMyInfoToSpring( { commit }, payload) {
        console.log("userId: " + payload)
        return  axiosInst.get('/user/userInfo', { params: { userId:payload }})
        .then((res) => {
            console.log("MyInfo res: " + res.data.name)
            commit(REQUEST_MY_INFO_TO_SPRING, res.data)
        })
    }
}