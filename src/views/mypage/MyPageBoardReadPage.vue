<template>
    <div style="color:black; background-color: white;">
        <MyPageBoardReadForm v-if="thisBoard" :thisBoard="thisBoard" />
        <button> 수정 </button>
        <button @click="deleteBoard"> 삭제 </button>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import MyPageBoardReadForm from '../../components/myPage/MyPageBoardReadForm.vue'
const BoardModule = 'BoardModule'
export default {
    data() {
        return {
            userId: 1,
        }
    },
    components: {
        MyPageBoardReadForm
    },
    props: {
        boardId: {
            type: String,
            required: true,
        },
    },
    methods: {
        ...mapActions(BoardModule, ['requestBoardReadToSpring', 'requestBoardDeleteToSpring']),
        deleteBoard() {
            const IdData = {
                boardId: this.boardId,
                userId: this.userId
            }
            this.requestBoardDeleteToSpring(IdData);
        }
    },
    created() {
        this.requestBoardReadToSpring(this.boardId);
    },
    computed: {
        ...mapState(BoardModule, ['thisBoard'])
    }

}
</script>
<style></style>