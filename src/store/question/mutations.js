import {
    REQUEST_QUESTION_LIST_TO_SPRING,
    REQUEST_QUESTION_TO_SPRING,
} from './mutation-types'
export default {
    [REQUEST_QUESTION_LIST_TO_SPRING] (state, receiveData) {
        state.questions = receiveData
    },
    [REQUEST_QUESTION_TO_SPRING] (state, receiveData) {
        state.question = receiveData
    },
}