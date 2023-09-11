<template>
    <div style="color:black; background-color: white; padding: 30px;">
        <MyPageBoardReadForm v-if="thisBoard" :thisBoard="thisBoard" />
        <v-btn class="centerBtn" @click="openModifyModal"> 수정 </v-btn>
        <v-btn class="centerBtn" @click="deleteBoard"> 삭제 </v-btn>


        <div id="modal">
            <div class="modal-content">
                <MyPageBoardModify @submit="onSubmit" v-if="thisBoardA" v-model="thisBoardA" :thisBoardA="thisBoardA" />
                <!-- <MyPageBoardModify @submit="onSubmit" v-if="thisBoardA" v-model="thisBoardA" /> -->
                <v-btn class="close" color="red" @click="closeModal">x</v-btn>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import MyPageBoardReadForm from '../../components/myPage/MyPageBoardReadForm.vue'
import MyPageBoardModify from '../../components/myPage/MyPageBoardModify.vue'
import '@/assets/css/myPage/MyPageBoard.css'
const BoardModule = 'BoardModule'
const MyPageModule = 'MyPageModule'
export default {
    data() {
        return {
            userId: '',
            thisBoardA: null
        }
    },
    components: {
        MyPageBoardReadForm,
        MyPageBoardModify
    },
    props: {
        boardId: {
            type: String,
            required: true,
        },
    },
    methods: {
        ...mapActions(BoardModule, ['requestBoardReadToSpring', 'requestBoardDeleteToSpring', 'requestMyBoardModifyToSpring']),
        deleteBoard() {
            const IdData = {
                boardId: this.boardId,
                userId: this.userId
            }
            this.requestBoardDeleteToSpring(IdData);
        },
        async onSubmit(payload) {
            const { boardName, content } = payload
            const boardId = this.boardId
            const category = this.thisBoard.category
            const userId = this.thisBoard.userId
            // console.log("content: " + content + ", boardName: " + boardName)
            await this.requestMyBoardModifyToSpring({ category, boardName, content, userId, boardId });
        },
        closeModal() {
            document.getElementById("modal").style.display = "none";
        },
        openModifyModal() {
            document.getElementById("modal").style.display = "block";
        }
    },
    created() {
        this.requestBoardReadToSpring(this.boardId);
        this.userId = this.$store.state[MyPageModule].myInfo.userId;
    },
    computed: {
        ...mapState(BoardModule, ['thisBoard']),
    },
    watch: {
        // state의 thisBoard가 변경될 때 thisBoardA에 할당
        thisBoard: {
            handler(newThisBoard) {
                this.thisBoardA = newThisBoard;
            },
            immediate: true // 초기에도 실행
        }
    }

}
</script>
<style></style>