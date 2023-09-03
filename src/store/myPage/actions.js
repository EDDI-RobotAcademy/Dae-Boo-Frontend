import axiosInst from '@/utility/axiosInst'
import {REQUEST_MY_BOARD_LIST_TO_SPRING} from '../myPage/mutation-types'

export default {
    // back에서 게시물 정보 가져오기
    // getMyBoardtoSpring(_, payload){
    //     console.log("userId: " + payload)

    //     return axiosInst.get('/board/myBoard' , { params: { userId: payload }})
    //     .then((res) => {
    //         console.log("res: " + res.data[0].boardName)
    //     })
    // }
    getMyBoardtoSpring({ commit }, payload){
        console.log("userId: " + payload)

        return axiosInst.get('/board/myBoard' , { params: { userId: payload }})
        .then((res) => {
            console.log("res: " + res.data[0].boardName)
            commit(REQUEST_MY_BOARD_LIST_TO_SPRING, res.data)
        })
    }
}