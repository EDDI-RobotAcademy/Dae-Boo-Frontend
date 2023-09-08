<template lang="">
    <div>
        <v-form @submit.prevent="onSubmit" style="margin: 20px">
            <v-table>
                <tr class="modifyTr">
                    <th scope="row"> 카테고리 </th>
                    <td><input type="text" :value="modifiedBoardA.category" disabled/></td>
                </tr>
                <tr class="modifyTr">
                    <th scope="row"> 제목 </th>
                    <td><input type="text" v-model="modifiedBoardA.boardName"/></td>
                </tr>
                <tr class="modifyTr">
                    <th scope="row"> 내용 </th>
                    <td><input type="text" v-model="modifiedBoardA.content" style="height: 200px"/></td>
                </tr>
                
            </v-table>
            <v-btn class="centerBtn" type="button" color="green" @click="onSubmit">
                수정완료
            </v-btn>
        </v-form>
    </div>
</template>
<script>
import '@/assets/css/myPage/MyPageBoard.css'
import { mapState } from "vuex";
const BoardModule = 'BoardModule'
export default {
    data() {
        return {
            modifiedBoardA: null,
        }
    },
    props: {
        thisBoardA: {
            type: Object,
            required: true
        }
    },
    created() {
        this.modifiedBoardA = this.thisBoardA

    },
    computed: {
        ...mapState(BoardModule, ['thisBoard']),
    },
    methods: {
        onSubmit() {
            const boardName = this.modifiedBoardA.boardName;
            const content = this.modifiedBoardA.content;
            this.$emit('submit', { content, boardName });
            this.$router.push({ path: `/myPage` });
        }
    },
    watch: {
        thisBoard: {
            handler(newThisBoard) {
                this.modifiedBoardA = newThisBoard;
            },
            immediate: true // 초기에도 실행
        }
    }
}
</script>
<style lang="">
    
</style>