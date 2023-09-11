<template>
    <div class="myInfoContainer">
        <b>내 정보 관리</b>
        <!-- <v-btn class="editBtn" append-icon="mdi-pencil-outline" variant="text"></v-btn> -->
        <span class="editBtn mdi mdi-pencil-outline" variant="text" @click="goToModifyPage"></span>
        <v-table class="myInfoTable">
            <tbody>
                <!-- <tr>
                    <th scope="row">성명</th>
                    <td>{{ myInfo.name }}</td>
                </tr> -->
                <tr>
                    <th scope="row">닉네임</th>
                    <td>{{ myInfo.nickname }}</td>
                </tr>
                <tr>
                    <th scope="row">성별</th>
                    <td>{{ myInfo.gender }}</td>
                </tr>
                <tr>
                    <th scope="row">휴대폰 번호</th>
                    <td>{{ myInfo.mobile }}</td>
                </tr>
                <tr>
                    <th scope="row">이메일</th>
                    <td>{{ myInfo.email }}</td>
                </tr>
                <tr>
                    <th scope="row">관심사</th>
                    <td>.₊̣̇.— ฅ/ᐠ. ̫ .ᐟ\ฅ —.₊̣̇.ა</td>
                </tr>
            </tbody>
        </v-table>
        <v-btn class="withdraw" append-icon="mdi-chevron-double-right" variant="text">
            탈퇴하기
        </v-btn>
    </div>
</template>
<script>
import '@/assets/css/myPage/MyPageInfo.css'
export default {
    props: {
        myInfo: {
            type: Object
        }
    },
    methods: {
        async goToModifyPage() {
            await this.$router.push({ path: `/myPageModify/${this.myInfo.userId}` });
        },
    },

}
</script>
<style></style>