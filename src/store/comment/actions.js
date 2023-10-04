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
        return axiosInst.delete(`/comment/${commentId}`)
        .then(() => {
            confirm("댓글을 삭제 하시겠습니까?")
        })
        .catch((error) => {
            console.error(error)
        })
    },


}