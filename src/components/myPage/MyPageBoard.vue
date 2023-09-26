<template>
    <v-container class="myPageBoards-mr">
        <h2 class="myPageBoards-title">게시글 관리</h2>
        <div style="margin-top: 40px;">
            <p class="ab" @click="boardPageNumber = 1">게시물</p>
            <p class="ab">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p class="ab" @click="boardPageNumber = 2">댓글</p>
        </div>
        <div v-if="boardPageNumber === 1">
            <!-- <v-table v-if="myBoards"> -->
            <v-table>
                <thead>
                    <tr align="center" justify="center" class="myPageBoards-mr">
                        <td align="center" width="5%" class="myPageBoards-line">check</td>
                        <td align="center" width="15%" class="myPageBoards-line">No.</td>
                        <td align="center" width="40%" class="myPageBoards-line">제목</td>
                        <td align="center" width="25%" class="myPageBoards-line">작성일</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="myPageBoards-mr" v-if="!myBoards || (Array.isArray(myBoards) && myBoards.length === 0)
                        ">
                        <th colspan="3" style="text-align: center">
                            현재 등록하신 게시글이 없습니다!
                        </th>
                    </tr>
                    <tr class="myPageBoards-mr myPageBoards-tr" v-else v-for="myBoard in paginatedMyBoards"
                        :key="myBoard.boardId">
                        <td align="center">
                            <input type="checkbox" v-model="selectedBoards" :value="myBoard.boardId" />
                        </td>
                        <td align="center">
                            {{ myBoard.boardId }}
                        </td>
                        <td align="left" @click="myBoardReadRink(myBoard.boardId)">
                            {{ myBoard.boardName }}
                        </td>
                        <td align="center">
                            {{ myBoard.boardRegisterDate }}
                        </td>
                    </tr>
                </tbody>
                <tr>
                    <th colspan="3">
                        <v-pagination v-model="page" :length="Math.ceil(myBoards.length / itemsPerPage)"
                            class="myPageBoards-nation" />
                    </th>
                </tr>
            </v-table>
            <v-btn class="myPageBoards-deletBtn" color="red" @click="deleteSelectedBoards"> 삭제 </v-btn>
        </div>

        <!-- 댓글 -->
        <div v-if="boardPageNumber === 2">
            <v-table>
                <thead>
                    <tr>
                        <td align="center" width="5%" class="myPageBoards-line">check</td>
                        <td align="center" width="15%" class="myPageBoards-line">No.</td>
                        <td align="center" width="40%" class="myPageBoards-line">내용</td>
                        <td align="center" width="25%" class="myPageBoards-line">작성일</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="myPageBoards-mr" v-if="!myComments || (Array.isArray(myComments) && myComments.length === 0)
                        ">
                        <th colspan="3" style="text-align: center">
                            현재 등록하신 댓글이 없습니다!
                        </th>
                    </tr>
                    <tr class="myPageBoards-mr myPageBoards-tr" v-else v-for="myComment in myComments"
                        :key="myComment.commentId">
                        <td align="center">
                            <input type="checkbox" v-model="selectedComments" :value="myComment.commentId" />
                        </td>
                        <td align="center">
                            {{ myComment.commentId }}
                        </td>
                        <td align="center" @click="commentToBoardReadRink(myComment.boardId)">
                            {{ myComment.content }}
                        </td>
                        <td align="center">
                            {{ myComment.createDate }}
                        </td>
                    </tr>
                </tbody>
            </v-table>
            <v-btn class="myPageBoards-deletBtn" color="red" @click="deleteSelectedCommnets"> 삭제 </v-btn>
        </div>
    </v-container>
</template>
<script>
import '@/assets/css/myPage/MyPageBoard.css'
import { mapActions } from 'vuex';
const BoardModule = 'BoardModule';
export default {
    data() {
        return {
            boardPageNumber: 1,
            selectedBoards: [],
            selectedComments: [],
            page: 1,
            itemsPerPage: 5
        }
    },
    props: {
        myBoards: {
            type: Array
        },
        myComments: {
            type: Array
        }
    },
    computed: {
        paginatedMyBoards() {
            const startIndex = (this.page - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.myBoards.slice(startIndex, endIndex);
        }
    },
    methods: {
        ...mapActions(BoardModule, ['requestManagementBoardDeleteToSpring', 'requestMyCommentsDeleteToSpring']),
        deleteSelectedBoards() {
            if (this.selectedBoards.length === 0) {
                alert("삭제할 게시물을 선택하세요.");
                return;
            }
            console.log(this.selectedBoards);
            let boardIds = this.selectedBoards.toString()
            this.requestManagementBoardDeleteToSpring(boardIds);
        },
        commentToBoardReadRink(boardId) {
            this.$router.push({ path: `/board/read-page/${boardId}` })
        },
        deleteSelectedCommnets() {
            if (this.selectedComments.length === 0) {
                alert("삭제할 댓글을 선택하세요.");
                return;
            }
            console.log(this.selectedComments);
            let commentIds = this.selectedComments.toString()
            this.requestMyCommentsDeleteToSpring(commentIds);
        },
        myBoardReadRink(boardId) {
            this.$router.push({ path: `/myPageBoardReadPage/${boardId}` })
        },
    }

}
</script>
<style></style>