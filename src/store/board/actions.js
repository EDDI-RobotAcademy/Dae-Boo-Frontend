import {
    MANAGEMENT_BOARD_LIST
} from './mutation-types'
import axiosInst from '@/utility/axiosInst'

export default {
    // 게시물 받아오기
    requestmManagementBoardToSpring({ commit }) {
        return axiosInst.get("/board/list")
            .then((res) => {
            commit(MANAGEMENT_BOARD_LIST, res.data);
            return res.data;
        })
    },
}