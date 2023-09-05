import {
    MANAGEMENT_BOARD_LIST,
    MANAGEMENT_BOARD,
    MYPAGE_BOARD
} from './mutation-types'
import axiosInst from '@/utility/axiosInst'

export default {
    // 관리자 - 게시물 받아오기
    requestmManagementBoardToSpring({ commit }) {
        return axiosInst.get("/board/list")
            .then((res) => {
            commit(MANAGEMENT_BOARD_LIST, res.data);
            return res.data;
        })
    },
    // 관리자 - 단일, 다중 게시물 삭제하기
    requestManagementBoardDeleteToSpring(_, boardId) {
        console.log("payload에 담긴 데이터:", boardId);
        const boardIds = boardId
        console.log(boardIds)

        return axiosInst.delete("/board/delete", { params: { boardId: boardIds } })
        .then(() => {
            alert("게시물 삭제가 완료되었습니다.")
        })
    },
    // 관리자 - 해당 게시물 받아오기
    requestManagementBoardReadToSpring({ commit }, boardId) {
        return axiosInst.get(`/board/${boardId}`)
        .then((res) => {
            commit(MANAGEMENT_BOARD, res.data);
            return res.data;
        })
    },

    //마이페이지 - 해당 게시물 받아오기
    requestBoardReadToSpring({ commit }, boardId) {
        console.log("requestBoardReadToSpring")
        return axiosInst.get(`/board/${boardId}`)
        .then((res) => {
            commit(MYPAGE_BOARD, res.data);
            return res.data;
        })
    }
}