<template>
    <div class="myInfoContainer">
        <b>내 정보 관리</b>
        <!-- <v-btn class="editBtn" append-icon="mdi-pencil-outline" variant="text"></v-btn> -->
        <span class="editBtn mdi mdi-pencil-outline" variant="text" @click="goToModifyPage"></span>
        <td>.₊̣̇.— ฅ/ᐠ. ̫ .ᐟ\ฅ —.₊̣̇.ა</td>
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
                    <th scope="row">관심사1</th>
                    <td>1. {{ interest1ToKorean }}</td>
                </tr>
                <tr>
                    <th scope="row">관심사2</th>
                    <td>2. {{ interest2ToKorean }}</td>
                </tr>

            </tbody>
        </v-table>
        <v-btn class="withdraw" append-icon="mdi-chevron-double-right" variant="text" @click="deleteUser">
            탈퇴하기
        </v-btn>
    </div>
</template>
<script>
import '@/assets/css/myPage/MyPageInfo.css'
import { mapActions, mapState } from "vuex"
const MyPageModule = 'MyPageModule'

export default {
    props: {
        myInfo: {
            type: Object
        }
    },
    methods: {
        ...mapActions(MyPageModule, ['requestDeleteToSpring']),
        async goToModifyPage() {
            await this.$router.push({ path: `/myPageModify/${this.myInfo.userId}` });
        },
        deleteUser() {
            this.requestDeleteToSpring(this.myInfo.userId)
        },
    },
    computed: {
        ...mapState(MyPageModule, ['myInfo']),
        interest1ToKorean() {
            switch (this.myInfo.interest1) {
                case "INTEREST1":
                    return "관심사1";
                case "INTEREST2":
                    return "관심사2";
                case "INTEREST3":
                    return "관심사3";
                default:
                    return "관심사4";
            }
        },
        interest2ToKorean() {
            switch (this.myInfo.interest2) {
                case "INTEREST1":
                    return "관심사1";
                case "INTEREST2":
                    return "관심사2";
                case "INTEREST3":
                    return "관심사3";
                default:
                    return "관심사4";
            }
        }
    }

}
</script>
<style></style>