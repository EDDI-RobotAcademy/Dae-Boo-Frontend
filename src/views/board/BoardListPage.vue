<template>
    <div style="margin-top: 3rem;">
        <board-list-form :boards="boards" />
        <button @click="goRegisterBoard" style="margin: 1rem; color: #222; background-color: #fff;">생성하기</button>
    </div>
</template>

<script>
import BoardListForm from "@/components/board/BoardListForm.vue"
import { mapActions, mapState } from 'vuex'
const BoardModule = 'BoardModule'
const LogInModule = 'LogInModule'
export default {
    components: {
        BoardListForm
    },
    computed: {
        ...mapState(BoardModule, ['boards']),
        ...mapState(LogInModule, ['memberInfo'])
    },
    mounted() {
        this.BoardListToSpring()
    },
    methods: {
        ...mapActions(BoardModule, ['BoardListToSpring']),
        goRegisterBoard() {
            if (this.memberInfo && this.memberInfo.userId) {
                this.$router.push("/board/register-page");
            } else {
                alert("로그인 후에 이용 가능합니다.");
            }
        }
    },
}
</script>

<style lang="scss" scoped></style>