<template>
    <div>
        <v-table>
            <tr>
                <td> 게시물 번호 </td>
                <td>
                    {{ thisBoard.boardId }}
                </td>
            </tr>
            <tr>
                <td> 작성자 </td>
                <td>
                    {{ thisBoard.userId.name }}
                </td>
            </tr>
            <tr>
                <td> 등록일자 </td>
                <td>
                    {{ thisBoard.boardRegisterDate }}
                </td>
            </tr>
            <tr>
                <td> 제목 </td>
                <td>
                    {{ thisBoard.boardName }}
                </td>
            </tr>
            <tr>
                <td> 내용 </td>
                <td>
                    {{ thisBoard.content }}
                </td>
            </tr>
        </v-table>
    </div>
</template>
<script>
export default {
    props: {
        thisBoard: {
            type: Object,
            required: true
        }
    }
}
</script>
<style></style>