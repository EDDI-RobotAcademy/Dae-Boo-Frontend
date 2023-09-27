<template>
    <v-container class="myPageBoard-modify-container">
        <form @submit.prevent="onSubmit">
            <div class="myPageBoard-read-mr">
                <v-row align="center" justify="left">
                    <v-col cols="12">
                        <v-text-field label="제목" variant="outlined" class="myPageBoard-register-body" v-model="boardName" />
                    </v-col>
                    <v-col cols="1">
                        <td class="myPageBoard-read-text">no. {{ board.boardId }}</td>
                    </v-col>
                    <v-col cols="8">
                        <td class="myPageBoard-read-text">작성자 : {{ board.userId.nickname }}</td>
                    </v-col>
                    <v-col cols="3">
                        <td class="myPageBoard-read-text">등록일자 : {{ board.boardRegisterDate }}</td>
                    </v-col>
                    <v-col cols="12">
                        <hr style="color: black;" />
                    </v-col>
                    <v-col cols="12">
                        <div id="editor" class="editor"></div>
                    </v-col>
                </v-row>
            </div>
            <div>
                <v-row>
                    <v-col cols="5">
                    </v-col>
                    <v-col cols="2">
                        <v-btn @click="onSubmit" type="button" color="green" style="width:100px;
                                margin:auto;
                                display:block;">수정</v-btn>
                    </v-col>
                </v-row>
            </div>
        </form>
    </v-container>
</template>
  
<script>
import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@/assets/css/myPage/MyPageBoard.css";
import { mapActions, mapState } from "vuex";
const BoardModule = 'BoardModule';

export default {
    data() {
        return {
            editor: null,
            nickname: "",
            boardName: "",
            content: "",
        };
    },
    computed: {
        ...mapState(BoardModule, ['board'])
    },
    mounted() {
        this.editor = new Editor({
            el: document.querySelector("#editor"),
            height: "500px",
            initialEditType: "wysiwyg",
            previewStyle: "vertical",
            usageStatistics: false,
            initialValue: this.content,
            // theme: "dark",
        });
    },
    methods: {
        onSubmit() {
            this.content = this.editor.getMarkdown();
            this.$emit("submit", {
                boardName: this.boardName,
                content: this.content,
                userId: this.userId
            });
        },
        ...mapActions(BoardModule, ['DeleteBoardToSpring']),
        async onDelete() {
            const boardId = this.boardId;
            console.log(boardId)
            await this.DeleteBoardToSpring(boardId);
            await this.$router.push({ name: 'BoardListPage' });
        }
    },
    created() {
        this.boardName = this.board.boardName;
        this.content = this.board.content;
        this.nickname = this.board.userId.nickname;
    },
};
</script>
  
<style></style>
  


<!-- <template lang="">
    <div>
        <v-form @submit.prevent="onSubmit" style="margin: 20px">
            <v-table>
                <tr class="modifyTr">
                    <th scope="row"> 카테고리 </th>
                    <td><input type="text" v-if="modifiedBoard.category" :value="modifiedBoard.category" disabled/></td>
                </tr>
                <tr class="modifyTr">
                    <th scope="row"> 제목 </th>
                    <td><input type="text" v-if="modifiedBoard.boardName" v-model="modifiedBoard.boardName"/></td>
                </tr>
                <tr class="modifyTr">
                    <th scope="row"> 내용 </th>
                    <td><input type="text" v-if="modifiedBoard.content" v-model="modifiedBoard.content" style="height: 200px"/></td>
                </tr>
                
            </v-table>
            <v-btn class="centerBtn" type="button" color="green" @click="onSubmit">
                수정완료
            </v-btn>
        </v-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            modifiedBoard: null
        }
    },
    props: {
        board: {
            type: Object,
            required: true
        }
    },

    created() {
        this.modifiedBoard = this.board
    },
    methods: {
        onSubmit() {
            const boardName = this.modifiedBoard.boardName;
            const content = this.modifiedBoard.content;
            this.$emit('submit', { content, boardName });
            this.$router.push({ path: `/myPage` });
        }
    },
}
</script>
<style lang="">
    
</style> -->