import {
    COMMENT_LIST,
} from './mutation-types'
import axiosInst from '@/utility/axiosInst'

export default {
    requestCommentToSpring({ commit }, boardId) {
        return axiosInst.get(`/comment/list/${boardId}`)
            .then((res) => {
                console.log('123123331232',res.data)
            commit(COMMENT_LIST, res.data);
            return res.data;
        })
        .catch((error) => {
            console.error(error)
        })
    },
    requestCreateCommentToSpring ( _ , payload) {
        const { content, writer, userId, boardId } = payload    
        return axiosInst.post('/comment/register', { content, writer, userId, boardId })
            .then((res) => {
                    alert('댓글 등록에 성공하였습니다.')
                    console.log("이거임",res.data)
                    return res.data
            })
            .catch((error) => {
                console.error(error)
            })
    },

    requestCommentDeleteToSpring(_, commentId) {
        console.log("comment : " ,commentId)
        return axiosInst.delete(`/board/${commentId}`)
        .then(() => {
            alert("게시물 삭제가 완료되었습니다.")
        })
    },


}