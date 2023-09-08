<template>
    <div class="myInfoContainer">
        <b>계정 정보</b>
        <v-table class="myInfoTable">
            <tbody>
                <tr>
                    <th scope="row">성명</th>
                    <td>{{ account.name }}</td>
                </tr>
                <tr>
                    <th scope="row">닉네임</th>
                    <td>{{ account.nickname }}</td>
                </tr>
                <tr>
                    <th scope="row">성별</th>
                    <td>{{ account.gender }}</td>
                </tr>
                <tr>
                    <th scope="row">휴대폰 번호</th>
                    <td>{{ account.mobile }}</td>
                </tr>
                <tr>
                    <th scope="row">이메일</th>
                    <td>{{ account.email }}</td>
                </tr>
                <tr>
                    <th scope="row">상태</th>
                    <td>{{ account.activate }}</td>
                </tr>
            </tbody>
        </v-table>
        <v-btn class="withdraw" append-icon="mdi-chevron-double-right" variant="text" @click="golist">
            뒤로가기
        </v-btn>
        <v-btn class="withdraw" variant="text" @click="userStop(account.userId)">
            계정 활성/비활성
        </v-btn>
    </div>
</template>
<script>
import '@/assets/css/myPage/MyPageInfo.css'
import { mapActions, mapState } from 'vuex';
const ManagementModule = 'ManagementModule'
export default {
    props: {
        id: {
            type: Number
        }
    },
    methods: {
        ...mapActions(ManagementModule,['requestAccountStatusSetToSpring','requestAccountListToSpring']),
        golist() {
            this.$emit('cancel');
        },
        userStop(id){
            this.requestAccountStatusSetToSpring(id)
        }
    },
    mounted() {
    },
    computed: {
        ...mapState(ManagementModule, ['account'])
    }

}
</script>
<style></style>