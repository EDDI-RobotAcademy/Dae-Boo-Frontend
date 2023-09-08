<template>
    <div>
        <v-table>
            <tr class="BoardReadTr">
                <th> 게시물 번호 </th>
                <td>
                    {{ thisBoard.boardId }}
                </td>
            </tr>
            <tr class="BoardReadTr">
                <th> 작성자 </th>
                <td>
                    {{ thisBoard.userId.nickname }}
                </td>
            </tr>
            <tr class="BoardReadTr">
                <th> 등록일자 </th>
                <td>
                    {{ thisBoard.boardRegisterDate }}
                </td>
            </tr>
            <tr class="BoardReadTr">
                <th> 제목 </th>
                <td>
                    {{ thisBoard.boardName }}
                </td>
            </tr>
            <tr class="BoardReadTr">
                <th> 내용 </th>
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
    },
    methods: {
        // deleteBoard() {}
    },
}
</script>
<style>
.BoardReadTr {
    height: 50px;
}
</style>