<template>
    <div v-show="AccountList">
        <v-table height="800px">
            <tr>
                <th align="center" width="10%">닉네임</th>
                <th align="center" width="5%">성별</th>
                <th align="center" width="25%">휴대폰 번호</th>
                <th align="center" width="25%">이메일</th>
                <th align="center" width="10%">상태</th>
            </tr>
            <tr>
                <td colspan="5">
                    <hr style="margin: 10px 0;"> <!-- 가로 선 밑에 10px 여백 추가 -->
                </td>
            </tr>
            <tr v-for="item in paginatedUser" :key="item.userId" @click="goRead(item.userId)" style="align:center">
                <td align="center"><span v-html="item.nickname"></span></td>
                <td align="center"><span v-html="item.gender"></span></td>
                <td align="center"><span v-html="item.mobile"></span></td>
                <td align="center"><span v-html="item.email"></span></td>
                <td align="center"><span v-html="item.activate"></span></td>
            </tr>
        </v-table>
        <div style="text-align: center;">
            <v-btn @click="prevPage">이전 페이지</v-btn>
            <v-btn @click="nextPage">다음 페이지</v-btn>
            <span> {{ ' ' + currentPage }}</span>
        </div>
    </div>
    <ManagementAccountInfoForm v-show="!AccountList" :userId="userId" @cancel="cancelForm"/>

</template>
<script>
import ManagementAccountInfoForm from './ManagementAccountInfoForm.vue';
import { mapActions, mapState } from 'vuex';
const ManagementModule = 'ManagementModule';
export default {
    components: { ManagementAccountInfoForm },
    data() {
        return {
            items: [],
            currentPage: 1,
            pageSize: 15,
            AccountList:true,

        };
    },
    computed: {
        ...mapState(ManagementModule, ['accounts']),
        paginatedUser() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.items.slice(startIndex, endIndex);
        }
    },
    methods: {
        ...mapActions(ManagementModule, ['requestAccountListToSpring','getAccountInfoToSpring']),
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            const maxPage = Math.ceil(this.items.length / this.pageSize);
            if (this.currentPage < maxPage) {
                this.currentPage++;
            }
        },
        goRead(id) {
            this.AccountList=false;
            this.getAccountInfoToSpring(id)

        },
        async cancelForm(){
            this.AccountList=!this.AccountList
            await this.requestAccountListToSpring()
        }
    },
    mounted() {
        this.requestAccountListToSpring()
            .then(() => {
                this.items = this.accounts;
            });
    },

};
</script>
<style>
.centered-div {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>