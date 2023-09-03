<template>
    <div class="myInfoContainer">
        <b>내 정보 관리</b>
        <!-- <v-btn class="editBtn" append-icon="mdi-pencil-outline" variant="text"></v-btn> -->
        <span class="editBtn mdi mdi-pencil-outline" variant="text"></span>
        <v-table class="myInfoTable">
            <tbody>
                <tr>
                    <th scope="row">성명</th>
                    <td>{{ userInfo.name }}</td>
                </tr>
                <tr>
                    <th scope="row">아이디</th>
                    <td>{{ userInfo.id }}</td>
                </tr>
                <tr>
                    <th scope="row">비밀번호</th>
                    <td>{{ userInfo.pw }}</td>
                </tr>
                <tr>
                    <th scope="row">휴대폰 번호</th>
                    <td>{{ userInfo.tel }}</td>
                </tr>
                <tr>
                    <th scope="row">이메일</th>
                    <td>{{ userInfo.email }}</td>
                </tr>
                <tr>
                    <th scope="row">주소</th>
                    <td>{{ userInfo.adress }}</td>
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
    data() {
        return {
            userInfo:
            {
                name: "홍길동",
                id: "abc123",
                pw: "123",
                tel: "010-0000-0000",
                email: "abc@abc.com",
                adress: "서울시 강남구"
            }

        }
    },

}
</script>
<style></style>