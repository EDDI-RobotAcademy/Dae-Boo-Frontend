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
                <tr v-else v-for="questBoard in filteredBoards" :key="questBoard.questionId">
            <td align="center">
                {{ questBoard.questionId }}
            </td>
            <td align="center">
                <router-link
                :to="{
                    name: 'ManagementQuestionBoardReadPage',
                    params: { questionId: questBoard.questionId.toString() },
                }">
                {{ questBoard.title }}
                </router-link>
            </td>
            <td align="center">
                {{ questBoard.user.nickname }}
            </td>
            <td align="center" style="padding: 10px 0;">
                {{ questBoard.createdAt }}
            </td>
            <td align="center" style="padding: 10px 0;">
                {{ questBoard.answerComplete ? '완료' : '대기' }}
            </td>
            </tr>
        </v-table>
        
        <div class="managementQuestionBtn">
            <div class="question-search-container">
            <input type="text" v-model="searchQuery" placeholder="제목을 입력하세요" />
            <v-btn @click="search" class="mdi mdi-magnify" variant="text"></v-btn>
            </div>
        </div>

        <!-- 페이지네이션 컨트롤 -->
        <div class="pagination">
            <button @click="previousPage" :disabled="currentPage === 1">이전</button>
            <span>페이지 {{ currentPage }} / {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">다음</button>
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
            currentPage: 1, // 현재 페이지 번호
            itemsPerPage: 15, // 페이지당 항목 수
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
            if (!this.questBoards || this.questBoards.length === 0) {
                return [];
            }
            // 검색어를 소문자로 변환
            const query = this.searchQuery.toLowerCase();
            // 검색어와 일치하는 게시물만 필터링
            const filteredData = this.questBoards.filter((questBoard) => {
                return questBoard.title.toLowerCase().includes(query);
            });
            // 현재 페이지에 따라 데이터를 잘라냅니다.
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return filteredData.slice(startIndex, endIndex);
        },
        // 전체 페이지 수를 계산하는 계산된 속성
        totalPages() {
            if (!this.questBoards || this.questBoards.length === 0) {
                return 0;
            }
            const filteredData = this.questBoards;
            const totalPages = Math.ceil(filteredData.length / this.itemsPerPage);
            return totalPages;
        }
    },
    methods: {
    // 이전 페이지로 이동하는 메서드
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    // 다음 페이지로 이동하는 메서드
    nextPage() {
      const totalPages = this.totalPages;
      if (this.currentPage < totalPages) {
        this.currentPage++;
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>