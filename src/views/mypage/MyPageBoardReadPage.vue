<template>
    <div style="color:black; background-color: white; padding: 30px; width: 1200px; margin: auto; margin-top: 3rem;">
        <div class="container"
            style="color: black; display: flex; justify-content: flex-start; margin: 0; padding-bottom: 20px; align-items: center;">
            <div class="item" style="width: 95%;"></div>
            <div class="item" style="width: 5%;">
                <v-btn class="closeBtn" color="red" @click="goToBack" variant="outlined">x</v-btn>
            </div>
        </div>
        <MyPageBoardReadForm v-if="nickname" :board="board" :nickname="nickname" />
        <v-container>
            <v-row align="center">
                <v-col cols="5"></v-col>
                <v-col cols="1"><v-btn class="centerBtn" @click="openModifyModal"> 수정 </v-btn></v-col>
                <v-col cols="1"><v-btn class="centerBtn" @click="deleteBoard"> 삭제 </v-btn></v-col>
                <v-col cols="3"></v-col>
                <v-col cols="2"><v-btn block class="centerBtn" @click="goToBoardReadPage(boardId)"> 게시물 보러가기
                    </v-btn></v-col>
            </v-row>
        </v-container>


        <div id="modal">
            <v-container class="modal-content">
                <v-row align="center">
                    <v-col cols="11"></v-col>
                    <v-col cols="1">
                        <v-btn class="closeBtn" color="red" @click="closeModal" variant="outlined">x</v-btn>
                    </v-col>
                </v-row>
                <MyPageBoardModify @submit="onSubmit" v-if="nickname" v-model="board" :board="board" />
            </v-container>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import MyPageBoardReadForm from '../../components/myPage/MyPageBoardReadForm.vue'
import MyPageBoardModify from '../../components/myPage/MyPageBoardModify.vue'
import '@/assets/css/myPage/MyPageBoard.css'
const BoardModule = 'BoardModule'
const LogInModule = 'LogInModule'
const MyPageModule = 'MyPageModule'
export default {
    data() {
        return {
            userId: '',
            nickname: null
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
        ...mapActions(MyPageModule, ['getMyBoardToSpring', 'getMyInfoToSpring', 'getMyCommentsToSprong']),
        ...mapActions(BoardModule, ['requestBoardDeleteToSpring', 'BoardReadToSpring', 'BoardModifyToSpring']),
        deleteBoard() {
            const IdData = {
                boardId: this.boardId,
                userId: this.userId
            }
            this.requestBoardDeleteToSpring(IdData);
        },
        loadData() {
            // this.userId가 설정된 이후에 데이터를 가져옵니다.
            if (this.userId) {
                this.getMyBoardToSpring(this.userId);
                this.getMyInfoToSpring(this.userId);
                this.getMyCommentsToSprong(this.userId);
            }
        },
        async onSubmit(payload) {
            const { boardName, content } = payload
            const boardId = this.boardId
            const writer = this.board.userId.nickname
            await this.BoardModifyToSpring({ boardName, content, writer, boardId });
            await this.loadData();
        },
        closeModal() {
            document.getElementById("modal").style.display = "none";
        },
        openModifyModal() {
            document.getElementById("modal").style.display = "block";
        },
        nicknameIs() {
            this.nickname = this.$store.state[BoardModule].board.userId.nickname;
        },
        goToBoardReadPage(boardId) {
            this.$router.push({ path: `/board/read-page/${boardId}` })
        },
        goToBack() {
            this.$router.push({ path: `/myPage` })
        }
    },
    async created() {
        await this.BoardReadToSpring(this.boardId);
        await this.nicknameIs();
        this.userId = this.$store.state[LogInModule].memberInfo.userId;
    },
    computed: {
        ...mapState(BoardModule, ['board']),
        ...mapState(LogInModule, ['memberInfo']),
    }
}
</script>
<style>
.closeBtn {
    min-width: 0px;
}
</style>