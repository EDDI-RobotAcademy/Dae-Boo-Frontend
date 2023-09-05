<template>
    <div class="">
        <b>게시글 관리</b><br />
        <div style="margin-top: 40px;">
            <p class="ab" @click="boardPageNumber = 1">게시물</p>
            <p class="ab">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p class="ab" @click="boardPageNumber = 2">댓글</p>
        </div>
        <div v-if="boardPageNumber === 1">
            <v-table style="margin-top: 15px" v-if="myBoards">
                <tr>
                    <th align="center" width="5%">check</th>
                    <th align="center" width="15%">게시물 번호</th>
                    <th align="center" width="40%">제목</th>
                    <th align="center" width="40%">작성일</th>
                </tr>
                <tr v-for="myBoard in myBoards" :key="myBoard.boardId">
                    <td align="center">
                        <input type="checkbox" />
                    </td>
                    <td align="center">
                        {{ myBoard.boardId }}
                    </td>
                    <td align="center">
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
            </v-table>
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
    </div>
</template>
<script>
import '@/assets/css/myPage/MyPageBoard.css'
export default {
    data() {
        return {
            boardPageNumber: 1
        }
    },
    props: {
        myBoards: {
            type: Array
        }
    },
}
</script>
<style></style>