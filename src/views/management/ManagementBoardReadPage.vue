<template>
    <div>
        <ManagementBoardReadForm v-if="board" :board="board"/>
    </div>
</template>

<script>
import ManagementBoardReadForm from '@/components/management/subManagementForm/ManagementBoardReadForm.vue'
import { mapActions, mapState } from "vuex";
import '@/assets/css/management/managementBoardRead.css'
const BoardModule = 'BoardModule';

export default {
    components: {
        ManagementBoardReadForm
    },
    props: {
        boardId: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapState(BoardModule, ['board'])
    },
    methods: {
        ...mapActions(BoardModule, ['requestManagementBoardReadToSpring']),
    },
    created() {
        this.requestManagementBoardReadToSpring(this.boardId);
    },
}
</script>

<style lang="scss" scoped></style>