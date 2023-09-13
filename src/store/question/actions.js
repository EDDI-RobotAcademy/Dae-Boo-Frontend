import axiosInst from '@/utility/axiosInst'

import {
    REQUEST_QUESTION_LIST_TO_SPRING,
    REQUEST_QUESTION_TO_SPRING,
} from './mutation-types'

export default {
    requestQuestionListToSpring ({ commit }, userId) {
        console.log("userId: " + userId)
        axiosInst.get(`/question/user/${userId}`)
            .then((res) => {
                console.log("userId: " + userId, res.data)
                commit(REQUEST_QUESTION_LIST_TO_SPRING, res.data)
            })
            .catch(()=>{            
                alert('문제 발생',console.error)
            })
    },
    requestCreateQuestionToSpring ( _ , payload) {
        const { title, contents, userId } = payload  
        console.log(payload, userId)  
        return axiosInst.post('/question/register', { title, contents, userId })
            .then((res) => {
                    alert('문의사항 등록에 성공하였습니다.')
                    console.log(res.data)
                    return res.data
            })
            .catch((error) =>{
                console.error('문의사항 등록 중 오류 발생:', error);
            })
    },
    
    requestQuestionToSpring ({ commit }, questionId) {
        console.log(questionId)
        return axiosInst.get(`/question/inquiry/${questionId}`)
            .then((res) => {
                commit(REQUEST_QUESTION_TO_SPRING, res.data)
            })
    },
       requestDeleteInquiryToSpring (_, questionId) {
        return axiosInst.delete(`/inquiry/${questionId}`)
            .then(() => {
                alert('삭제 성공!')
            })
            .catch(() => {
                console.error()
            })
    },
    
    // requestInquiryModifyToSpring (_, payload) {
    //     const { title, content, inquiryId, writer } = payload    
    //     console.log("title: " + title + ", content: " + content + ", writer: " + writer + ", inquiryId: " + inquiryId)

    //     return axiosInst.put(`/inquiry/${inquiryId}`, { title, content, writer })
    //         .then(() => {
    //             alert("수정 성공!")
    //         })
    //         .catch(() => {
    //             console.error()
    //         })
    // }
}
