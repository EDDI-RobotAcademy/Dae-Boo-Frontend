import {
    MANAGEMENT_BOARD_LIST,
    MANAGEMENT_BOARD,
    MYPAGE_BOARD,
    MANAGEMENT_QUESTION_BOARD_LIST
} from './mutation-types'
import axiosInst from '@/utility/axiosInst'

export default {
    // 관리자 - 게시물 받아오기
    requestManagementBoardToSpring({ commit }) {
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
    // 관리자 - 1:1 게시판 리스트 불러오기
    requestManagementQuestionBoardToSpring({ commit }) {
        return axiosInst.get("/question/list")
        .then((res) => {
            commit(MANAGEMENT_QUESTION_BOARD_LIST, res.data);
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
    },

    requestBoardDeleteToSpring(_, IdData) {
        console.log("boardId : " + IdData.boardId)
        return axiosInst.delete("/board/myPageBoardDelete", { params: { boardId: IdData.boardId, userId: IdData.userId } })
        .then(() => {
            alert("게시물 삭제가 완료되었습니다.")
        })
    },
    requestMyBoardModifyToSpring(_, payload) {
        const { category, boardName, content, userId, boardId } = payload
        console.log("requestMyBoardModifyToSpring()" + "content: " + content + ", boardName: " +boardName + ", boardId: " +boardId)
        return axiosInst.put(`/board/${boardId}`, { category, boardName, content, userId })
    }
}