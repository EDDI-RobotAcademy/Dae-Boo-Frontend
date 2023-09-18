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
                    <tr class="myPageBoards-mr myPageBoards-tr" v-else v-for="myBoard in myBoards" :key="myBoard.boardId">
                        <td align="center">
                            <input type="checkbox" v-model="selectedBoards" :value="myBoard.boardId" />
                        </td>
                        <td align="center">
                            {{ myBoard.boardId }}
                        </td>
                        <td align="left">
                            <router-link :to="{
                                name: 'MyPageBoardReadPage',
                                params: { boardId: myBoard.boardId.toString() }
                            }">
                                {{ myBoard.boardName }}
                            </router-link>
                        </td>
                        <td align="center">
                            {{ myBoard.boardRegisterDate }}
                        </td>
                    </tr>
                </tbody>
            </v-table>
            <v-btn class="myPageBoards-deletBtn" color="red" @click="deleteSelectedBoards"> 삭제 </v-btn>
        </div>

        <div v-if="boardPageNumber === 2">
            <table style="margin-top: 15px">
                <tr>
                    <th align="center" width="8%">check</th>
                    <th align="center" width="22%">댓글 번호</th>
                    <th align="center" width="50%">내용</th>
                    <th align="center" width="30%">작성일</th>
                </tr>
                <tr>
                    <td align="center">
                        <input type="checkbox" />
                    </td>
                    <td align="center">
                        dd
                    </td>
                    <td align="center">
                        dd
                    </td>
                    <td align="center">
                        ff
                    </td>
                </tr>
            </table>
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
            selectedBoards: []
        }
    },
    props: {
        myBoards: {
            type: Array
        }
    },
    methods: {
        ...mapActions(BoardModule, ['requestManagementBoardDeleteToSpring']),
        deleteSelectedBoards() {
            if (this.selectedBoards.length === 0) {
                alert("삭제할 게시물을 선택하세요.");
                return;
            }
            console.log(this.selectedBoards);
            let boardIds = this.selectedBoards.toString()
            this.requestManagementBoardDeleteToSpring(boardIds);
        }
    }

}
</script>
<style></style>