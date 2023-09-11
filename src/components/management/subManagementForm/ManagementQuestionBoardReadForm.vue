<template>
    <div class="readBack">
        <h2>1:1 문의 읽기 페이지</h2>
        <table>
            <tr>
                <td>문의 제목</td>
                <td>
                    <input type="text" :value="questBoard.title" readonly/>
                </td>
            </tr>
            <tr>
                <td>문의 번호</td>
                <td>
                    <input type="text" :value="questBoard.questionId" readonly/>
                </td>
            </tr>
            <tr>
                <td>답변 상태</td>
                <td>
                    <input type="text" :value="questBoard.answerComplete" readonly/>
                </td>
            </tr>
            <tr>
                <td>작성일</td>
                <td>
                    <input type="text" :value="questBoard.createdAt" readonly/>
                </td>
            </tr>
            <tr>
                <td>작성자</td>
                <td>
                    <input type="text" v-if="questBoard.user.nickname" :value="questBoard.user.nickname" readonly/>
                    <input type="text" v-else value="작성자 정보 없음" readonly/>
                </td>
            </tr>
            <tr>
                <td>내용</td>
                <td>
                    <textarea cols="80" rows="30" :value="questBoard.contents" readonly/>
                </td>
            </tr>
        </table>
        <router-link class="returnBtn" :to="{ name: 'ManagementPage' }"> 돌아가기 </router-link>
    </div>
</template>

<script>
export default {
    name: "ManagementQuestionBoardReadForm",
    props: {
        questBoard: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped></style>