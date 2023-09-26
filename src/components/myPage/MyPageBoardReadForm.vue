<template>
    <div>
        <v-table>
            <tr class="BoardReadTr">
                <th> 게시물 번호 </th>
                <td>
                    {{ board.boardId }}
                </td>
            </tr>
            <tr class="BoardReadTr">
                <th> 작성자 </th>
                <td>
                    {{ nickname }}
                </td>
            </tr>
            <tr class="BoardReadTr">
                <th> 등록일자 </th>
                <td>
                    {{ board.boardRegisterDate }}
                </td>
            </tr>
            <tr class="BoardReadTr">
                <th> 제목 </th>
                <td>
                    {{ board.boardName }}
                </td>
            </tr>
            <tr class="BoardReadTr">
                <th> 내용 </th>
                <td>
                    {{ board.content }}
                </td>
            </tr>
        </v-table>
    </div>
</template>
<script>
export default {
    props: {
        board: {
            type: Object,
            required: true
        },
        nickname: {
            type: String,
            required: true
        }
    }
}
</script>
<style>
.BoardReadTr {
    height: 50px;
}
</style>