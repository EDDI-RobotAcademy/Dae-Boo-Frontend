import {
    MANAGEMENT_QUESTION_BOARD_LIST,
    MANAGEMENT_QUESTION_BOARD
} from './mutation-types'
import axiosInst from '@/utility/axiosInst'

export default {
    // 관리자 - 1:1 게시판 리스트 불러오기
    requestManagementQuestionBoardToSpring({ commit }) {
        return axiosInst.get("/question/list")
        .then((res) => {
            commit(MANAGEMENT_QUESTION_BOARD_LIST, res.data);
            return res.data;
        })
    },
    // 관리자 - 1:1 게시판 해당 게시물 받아오기
    requestManagementQuestionBoardReadToSpring({ commit }, questionId) {
        return axiosInst.get(`/question/${questionId}`)
        .then((res) => {
            commit(MANAGEMENT_QUESTION_BOARD, res.data.questBoard);
            return res.data.questBoard;
        })
    },
}