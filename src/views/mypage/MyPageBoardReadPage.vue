<template>
    <div style="color:black; background-color: white;">
        <MyPageBoardReadForm :thisBoard="thisBoard" />
        <button> 수정 </button>
        <button> 삭제 </button>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import MyPageBoardReadForm from '../../components/myPage/MyPageBoardReadForm.vue'
const BoardModule = 'BoardModule'
export default {
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
        ...mapActions(BoardModule, ['requestBoardReadToSpring'])
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