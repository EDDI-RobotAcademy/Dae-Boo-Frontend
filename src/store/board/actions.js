import {
    MANAGEMENT_BOARD_LIST,
    MANAGEMENT_BOARD,
    MYPAGE_BOARD,
    BOARD_LIST_TO_SPRING,
    BOARD_TO_SPRING
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
    },
    //마이페이지 - 선택한 댓글 삭제하기
    requestMyCommentsDeleteToSpring(_, commentId){
        console.log("payload에 담긴 데이터:", commentId);
        const commentIds = commentId
        console.log(commentIds)
        return axiosInst.delete("/comment/delete", { params: { commentId: commentIds } })
        .then(() => {
            alert("댓글 삭제가 완료되었습니다.")
        })
    },
  // ----------------------------------------- 게시판 ----------------------------------------------
    
  BoardListToSpring ({ commit }) {
    axiosInst.get('/board/list')
        .then((res) => {
            commit(BOARD_LIST_TO_SPRING, res.data)
        })
        .catch(()=>{            
            alert('문제 발생',console.error)
        })
},
CreateBoardToSpring ( _ , payload) {
    const { boardName, content, writer, category, userId } = payload    
    return axiosInst.post('/board/register/data', { boardName, content, writer , category, userId })
        .then((res) => {
                alert('게시판 등록에 성공하였습니다.')
                console.log(res.data)
                return res.data
        })
        .catch((error) => {
            console.error(error)
        })
},

BoardReadToSpring ({ commit }, boardId) {
    return axiosInst.get(`/board/${boardId}`)
        .then((res) => {
            commit(BOARD_TO_SPRING, res.data)
        })
},
DeleteBoardToSpring ( _ , boardId) {
return axiosInst.delete(`/board/delete/${boardId}`)
        .then(() => {
            alert('삭제 성공!')
        })
        .catch(() => {
            console.error()
        })
},

BoardModifyToSpring (_, payload) {
    const { boardName, content, boardId, writer, category } = payload    
    // console.log("title: " + title + ", content: " + content + ", writer: " + writer + ", boardId: " + boardId)

    return axiosInst.put(`/board/modify/${boardId}`, { boardName, content, writer, category })
        .then(() => {
            alert("수정 성공!")
        })
        .catch((error) => {
            console.error(error)
        })
    }
}