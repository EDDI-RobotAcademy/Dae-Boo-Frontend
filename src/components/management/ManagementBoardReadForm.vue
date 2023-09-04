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
                    <input type="text" :value="board.userId.email" readonly/>
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