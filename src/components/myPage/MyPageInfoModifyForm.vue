<template>
    <div class="myInfoContainer">
        <v-form @submit.prevent="onSubmit">
            <v-table class="myInfoTable">
                <tbody>
                    <tr>
                        <th scope="row">성명</th>
                        <td>
                            <input type="text" :value="myInfo.name" disabled />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">닉네임</th>
                        <td>
                            <input type="text" v-model="nickname" />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">성별</th>
                        <td>
                            <input type="text" :value="myInfo.gender" disabled />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">휴대폰 번호</th>
                        <td>
                            <input type="text" v-model="mobile" />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">이메일</th>
                        <td>
                            <input type="text" v-model="email" />
                        </td>
                    </tr>
                </tbody>
            </v-table>
            <v-btn type="button" @click="onSubmit">
                수정 완료
            </v-btn>
        </v-form>
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
    data() {
        return {
            name: '',
            nickname: '',
            gender: '',
            mobile: '',
            email: ''
        }
    },
    created() {
        this.name = this.myInfo.name
        this.nickname = this.myInfo.nickname
        this.mobile = this.myInfo.mobile
        this.gender = this.myInfo.gender
        this.email = this.myInfo.email
    },
    methods: {
        onSubmit() {
            const { nickname, mobile, email } = this
            this.$emit('submit', { nickname, mobile, email })
        }
    },

}
</script>
<style></style>