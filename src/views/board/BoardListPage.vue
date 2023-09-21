<template>
    <div style="margin-top: 3rem;">
        <board-list-form :boards="boards"/>
        <button @click="goRegisterBoard" style="margin: 1rem; color: #fff; background-color: #000;">생성하기</button>
    </div>
</template>

<script>
import BoardListForm from "@/components/board/BoardListForm.vue"
import { mapActions, mapState } from 'vuex'
const BoardModule ='BoardModule'
    export default {
    components: {
         BoardListForm 
        },        
    computed: {
        ...mapState(BoardModule, ['boards']),
    },
    mounted() {
      this.BoardListToSpring()      
    },
    methods: {
        ...mapActions(BoardModule, ['BoardListToSpring']),
        goRegisterBoard() {
            this.$router.push("/board/register-page")
        }
    },
    }
</script>

<style lang="scss" scoped>

</style>