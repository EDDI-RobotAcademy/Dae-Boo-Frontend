import {
    REQUEST_NOTICE_LIST_TO_SPRING,
    REQUEST_NOTICE_TO_SPRING,
} from './mutation-types'
export default {
    [REQUEST_NOTICE_LIST_TO_SPRING] (state, receiveData) {
        state.notices = receiveData
    },
    [REQUEST_NOTICE_TO_SPRING] (state, receiveData) {
        state.notice = receiveData
    },
}