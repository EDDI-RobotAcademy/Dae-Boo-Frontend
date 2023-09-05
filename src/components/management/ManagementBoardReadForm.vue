<template>
    <div class="readBack">
        <h2>게시물 읽기 페이지</h2>
        <table>
            <tr>
                <td>게시물 번호</td>
                <td>
                    <input type="text" :value="board.boardId" readonly/>
                </td>
            </tr>
            <tr>
                <td>카테고리</td>
                <td>
                    <input type="text" :value="board.category" readonly/>
                </td>
            </tr>
            <tr>
                <td>제목</td>
                <td>
                    <input type="text" :value="board.boardName" readonly/>
                </td>
            </tr>
            <tr>
                <td>작성자</td>
                <td>
                    <!-- board.userId가 정의되어 있을 때만 email을 출력하도록 조건부 렌더링 -->
                    <input type="text" v-if="board.userId" :value="board.userId.email" readonly/>
                    <input type="text" v-else value="작성자 정보 없음" readonly/>
                </td>
            </tr>
            <tr>
                <td>등록일자</td>
                <td>
                    <input type="text" :value="board.boardRegisterDate" readonly/>
                </td>
            </tr>
            <tr>
                <td>내용</td>
                <td>
                    <textarea cols="80" rows="30" :value="board.content" readonly/>
                </td>
            </tr>
        </table>
        <router-link class="returnBtn" :to="{ name: 'ManagementPage' }"> 돌아가기 </router-link>
    </div>
</template>

<script>
export default {
    name: "ManagementBoardReadForm",
    props: {
        board: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped></style>