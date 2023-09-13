<template>
  <v-container>
    <v-table>
      <thead>
        <tr align="center" justify="center" class="row-mr">
          <td width="10%" align="center" class="bottom-line">No.</td>
          <td width="45%" align="left" class="bottom-line">제목</td>
          <td width="20%" align="center" class="bottom-line">작성자</td>
          <td width="25%" align="center" class="bottom-line">작성일</td>
        </tr>
      </thead>
      <tbody>
        <tr class="row-mr" v-if="!notices || (Array.isArray(notices) && notices.length === 0)">
          <th colspan="4" style="text-align: center;">현재 등록된 공지가 없습니다!</th>
        </tr>
        <tr
          v-else
          v-for="(notice) in paginatedNotices"
          :key="notice.noticeId"
          @click="noticeReadRink(notice.noticeId)"
          class="row-mr cardTr"
        >
          <td align="center">{{  notice.noticeId  }}</td>
          <td>
              [공지] {{ notice.title }}
          </td>
          <td align="center">{{ notice.writer }}</td>
          <td align="center">{{ notice.createDate }}</td>
        </tr>
      </tbody>
      <tr>
        <th colspan="4">
      <v-pagination
        v-model="page" :length="Math.ceil(notices.length / itemsPerPage)" class="page-nation"/>
    </th>
    </tr>
    </v-table>
  </v-container>
</template>

<script>
import "@/assets/css/notice/noticeList.css";

export default {
  props: {
    notices: {
      type: Array,
    },
  },
  data() {
    return {
      page: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    paginatedNotices() {
      const startIndex = (this.page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.notices.slice(startIndex, endIndex);
    },
  },
  methods: {
    noticeReadRink(noticeId) {
      this.$router.push({path: `/notice/read-page/${noticeId}`})
    }
  },
};
</script>

<style lang="css" scoped>

</style>
