import {
    COMMENT_LIST,
} from './mutation-types'
import axiosInst from '@/utility/axiosInst'

export default {
    requestCommentToSpring({ commit }, boardId) {
        return axiosInst.get(`/comment/list/${boardId}`)
            .then((res) => {
            commit(COMMENT_LIST, res.data);
            return res.data;
        })
        .catch(() => {
            console.error(error)
        })
    },
    requestCreateCommentToSpring ( _ , payload) {
        const { content, writer } = payload    
        return axiosInst.post('/comment/register', { content, writer })
            .then((res) => {
                    alert('댓글 등록에 성공하였습니다.')
                    console.log(res.data)
                    return res.data
            })
            .catch(() => {
                console.error(error)
            })
    },

    requestBoardDeleteToSpring(_, IdData) {
        console.log("boardId : " + IdData.boardId)
        return axiosInst.delete("/board/myPageBoardDelete", { params: { boardId: IdData.boardId, userId: IdData.userId } })
        .then(() => {
            alert("게시물 삭제가 완료되었습니다.")
        })
    },


}