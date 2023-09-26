<template>
    <div style="color:black; background-color: white; padding: 30px;">
        <MyPageBoardReadForm v-if="nickname" :board="board" :nickname="nickname" />
        <v-btn class="centerBtn" @click="openModifyModal"> 수정 </v-btn>
        <v-btn class="centerBtn" @click="deleteBoard"> 삭제 </v-btn>
        <div id="modal">
            <v-container class="modal-content">
                <v-row align="center">
                    <v-col cols="11"></v-col>
                    <v-col cols="1">
                        <v-btn color="red" @click="closeModal">x</v-btn>
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
<style></style>