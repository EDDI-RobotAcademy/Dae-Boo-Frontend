import {
    REQUEST_PRODUCT_TO_SPRING,
    REQUEST_PRODUCT_LIST_TO_SPRING,
} from './mutation-types'
export default {
    [REQUEST_PRODUCT_TO_SPRING] (state, receiveData) {
        state.notices = receiveData
    },
    [REQUEST_PRODUCT_LIST_TO_SPRING] (state, receiveData) {
        state.notice = receiveData
    },
}