<template>
    <div class="myInfoContainer">
        <v-form @submit.prevent="onSubmit">
            <v-table class="myInfoTable">
                <tbody>
                    <tr>
                        <th scope="row">닉네임</th>
                        <td>
                            <input type="text" v-model="nickname" />
                            <v-btn @click="nicNameDuplicateCheck" text large outlined style="font-size: 13px"
                                class="mt-1 ml-2" color="teal lighten-1">
                                중복확인
                            </v-btn>
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
                        <th scope="row">관심사1 </th>
                        <td>
                            <v-select v-model="interest1" label="관심사1" :items="interestList" item-title="name"
                                item-value="value" variant="underlined"></v-select>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">관심사2 </th>
                        <td>
                            <v-select v-model="interest2" label="관심사2" :items="interestList" item-title="name"
                                item-value="value" variant="underlined"></v-select>
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
import { mapActions } from "vuex";
const MyPageModule = 'MyPageModule'

export default {
    props: {
        myInfo: {
            type: Object
        }
    },
    data() {
        return {
            nickname: '',
            gender: '',
            mobile: '',
            email: '',
            userId: '',
            interest1: '',
            interest2: '',
            nicknamePass: false,
            interestList: [
                { name: '관심사1번', value: 'INTEREST1' },
                { name: '관심사2번', value: 'INTEREST2' },
                { name: '관심사3번', value: 'INTEREST3' },
                { name: '관심사4번', value: 'INTEREST4' }
            ]
        }
    },
    created() {
        this.nickname = this.myInfo.nickname
        this.mobile = this.myInfo.mobile
        this.gender = this.myInfo.gender
        this.email = this.myInfo.email
        this.userId = this.myInfo.userId
        this.interest1 = this.myInfo.interest1
        this.interest2 = this.myInfo.interest2
    },
    methods: {
        ...mapActions(MyPageModule, ['requestSpringToCheckNickname']),
        onSubmit() {
            const { nickname, mobile, email, interest1, interest2 } = this
            this.$emit('submit', { nickname, mobile, email, interest1, interest2 })
        },
        async nicNameDuplicateCheck() {
            console.log("nickname: ", this.nickname)
            this.nicknamePass = await this.requestSpringToCheckNickname({ nickname: this.nickname });
            if (!this.nicknamePass) {
                alert("중복된 닉네임 입니다.");
            } else {
                alert("사용 가능한 닉네임입니다 !");
            }
        },
    },

}
</script>
<style></style>