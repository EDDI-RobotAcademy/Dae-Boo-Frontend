import {
    MANAGEMENT_QUESTION_BOARD_LIST,
    MANAGEMENT_QUESTION_BOARD,
    MANAGEMENT_ANSWER_BOARD,
} from './mutation-types'
import axiosInst from '@/utility/axiosInst'
// import router from '@/router';

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
        console.log('게시물 ',questionId)
        return axiosInst.get(`/question/${questionId}`)
        .then((res) => {
            commit(MANAGEMENT_QUESTION_BOARD, res.data.questBoard);
            return res.data.questBoard;
        })
    },
    // 관리자 - 1:1 게시판 해당 게시물에 댓글 달기
    responseManagementQuestionAnswerSaveToSping(context, payload) {
        const { answer, questionId, userId } = payload
        console.log("전달받은 데이터: "+ answer, questionId, userId);

        return axiosInst.post("/question/managerAnswer", {
            answer,
            questionId,
            userId
        }) .then((res) => {
            alert("답변 등록이 완료되었습니다.")
            // router.push({ name: 'ManagementPage'})
            window.location.reload(); // 화면 새로고침
            return res.data;
        })
    },
    // 관리자 - 1:1 게시판 해당 게시물의 댓글 불러오기
    requestManagementDetailQuestionAnswerToSpring({ commit }, questionId) {
        console.log('답변', questionId)
        return axiosInst.get(`/answer/details/${questionId}`)
        .then((res) => {
            commit(MANAGEMENT_ANSWER_BOARD, res.data)
            return res.data;
        })
    },
}