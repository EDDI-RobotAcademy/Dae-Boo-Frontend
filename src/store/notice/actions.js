import axiosInst from '@/utility/axiosInst'

import {
    REQUEST_NOTICE_LIST_TO_SPRING,
    REQUEST_NOTICE_TO_SPRING,
} from './mutation-types'

export default {
    requestNoticeListToSpring ({ commit }) {
        axiosInst.get('/notice/list')
            .then((res) => {
                commit(REQUEST_NOTICE_LIST_TO_SPRING, res.data)
            })
            .catch(()=>{            
                alert('문제 발생',console.error)
            })
    },
    requestCreateNoticeToSpring ( _ , payload) {
        const { title, content, writer } = payload    
        return axiosInst.post('/notice/register', { title, content, writer })
            .then((res) => {    
                    alert('공지사항 등록에 성공하였습니다.')
                    console.log(res.data)
                    return res.data
            })
    },
    
    requestNoticeToSpring ({ commit }, noticeId) {
        return axiosInst.get(`/notice/${noticeId}`)
            .then((res) => {
                commit(REQUEST_NOTICE_TO_SPRING, res.data)
            })
    },
       requestDeleteNoticeToSpring (_, noticeId) {
        return axiosInst.delete(`/notice/${noticeId}`)
            .then(() => {
                alert('삭제 성공!')
            })
            .catch(() => {
                console.error()
            })
    },
    
    requestNoticeModifyToSpring (_, payload) {
        const { title, content, noticeId, writer } = payload    
        console.log("title: " + title + ", content: " + content + ", writer: " + writer + ", noticeId: " + noticeId)

        return axiosInst.put(`/notice/${noticeId}`, { title, content, writer })
            .then(() => {
                alert("수정 성공!")
            })
            .catch(() => {
                console.error()
            })
    }
}
