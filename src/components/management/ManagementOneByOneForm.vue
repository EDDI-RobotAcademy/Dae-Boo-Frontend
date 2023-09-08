<template>
    <div>
        <v-table style="margin: auto">
            <tr>
            <th align="center" width="10%">문의 번호</th>
            <th align="center" width="30%">제목</th>
            <th align="center" width="20%">작성자</th>
            <th align="center" width="20%">작성일</th>
            <th align="center" width="20%">상태</th>
            </tr>
            <tr>
            <td colspan="5">
                <hr style="margin: 10px auto;"> <!-- 가로 선 밑에 10px 여백 추가 -->
            </td>
            </tr>
            <tr v-if="!filteredBoards || (Array.isArray(filteredBoards) && filteredBoards.length === 0)">
            <td colspan="4">검색 결과가 없습니다.</td>
            </tr>
            <tr v-else v-for="question in filteredBoards" :key="question.questionId">
            <td align="center">
                {{ question.questionId }}
            </td>
            <td align="center">
                {{ question.title }}
            </td>
            <td align="center">
                {{ question.user.nickname }}
            </td>
            <td align="center" style="padding: 10px 0;">
                {{ question.createdAt }}
            </td>
            <td align="center" style="padding: 10px 0;">
                {{ question.answerComplete ? '완료' : '대기' }}
            </td>
            </tr>
        </v-table>

        <div class="managementQuestionBtn">
            <div class="question-search-container">
            <input type="text" v-model="searchQuery" placeholder="제목을 입력하세요" />
            <v-btn @click="search" class="mdi mdi-magnify" variant="text"></v-btn>
            </div>
        </div>

    </div>
</template>

<script>
import '@/assets/css/management/managementQuestionBoard.css'
export default {
    props: {
        questBoards: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            selectedItems: [],
            searchQuery: "",
        };
    },
    computed: {
        // "전체 선택" 버튼의 텍스트와 색상을 계산하는 계산된 속성
        selectAllButtonText() {
            return this.selectAll ? "전체 해제" : "전체 선택";
        },
        selectAllButtonColor() {
            return this.selectAll ? "green" : "black";
        },
        filteredBoards() {
            if(!this.questBoards || this.questBoards.length === 0) {
            return [];
            }
            // 검색어를 소문자로 변환
            const query = this.searchQuery.toLowerCase();
            // 검색어와 일치하는 게시물만 필터링
            return this.questBoards.filter((question) => {
            return question.title.toLowerCase().includes(query);
            });
        },
    }
}
</script>

<style lang="scss" scoped></style>