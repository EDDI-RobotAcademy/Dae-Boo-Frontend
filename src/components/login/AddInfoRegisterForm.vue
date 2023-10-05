<template>
    <h2 style="color:white">사용자 필수 정보 기입 !</h2>
    <v-container>
        <v-form @submit.prevent="onSubmit">
            <v-table class="myInfoTable">
                <tbody>
                    <tr>
                        <th scope="row">닉네임</th>
                        <td>
                            <input type="text" v-model="formData.nickname" />
                            <v-btn @click="nicNameDuplicateCheck"
                                    text large outlined style="font-size: 13px"
                                    class="mt-1 ml-2" color="teal lighten-1">
                                중복확인
                            </v-btn>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">성별</th>
                        <td>
                            <input type="text" v-model="formData.gender" disabled />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">휴대폰 번호</th>
                        <td>
                            <input type="text" v-model="formData.mobile" />
                        </td>
                    </tr>
                    <!-- <tr>
                        <th scope="row">이메일</th>
                        <td>
                            <input type="text" v-model="formData.email" />
                        </td>
                    </tr> -->
                    <tr>
                        <th scope="row">관심사 1 </th>
                        <td>
                            <v-select v-model="formData.interest1" :items="interestList" item-title="name"
                                item-value="value" variant="underlined"></v-select>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">관심사 2 </th>
                        <td>
                            <v-select v-model="formData.interest2" :items="interestList" item-title="name"
                                item-value="value" variant="underlined"></v-select>
                        </td>
                    </tr>
                </tbody>
            </v-table>
            <v-btn type="submit" block x-large rounded
                   color="rgb(96, 143, 255)" style="color:white;" class="mt-6"
                   :disabled="isFormValid()">
                수정 완료
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
import '@/assets/css/login/addInfoRegister.css'
import { mapActions, mapState } from "vuex";
const MyPageModule = 'MyPageModule'

export default {
    data() {
        return {
            formData: {
                nickname: '',
                mobile: '',
                gender: '',
                email: '',
                userId: '',
                interest1: '',
                interest2: '',
                nicknamePass: ''
            },
            interestList: [
                { name: '관리비', value: '1' },
                { name: '교육', value: '2' },
                { name: '금융', value: '3' },
                { name: '대형마트', value: '4' },
                { name: '레저', value: '5' },
                { name: '렌탈', value: '6' },
                { name: '문화', value: '7' },
                { name: '베이커리', value: '8' },
                { name: '뷰티', value: '9' },
                { name: '쇼핑', value: '10' },
                { name: '영화', value: '11' },
                { name: '외식', value: '12' },
                { name: '의료', value: '13' },
                { name: '주유', value: '14' },
                { name: '카페', value: '15' },
                { name: '통신', value: '16' },
                { name: '편의점', value: '17' }
            ]
        }
    },
    props: {
        myInfo: {
            type: Object,
            required: true
        }
    },
    computed: {
        ...mapState(MyPageModule, ['myInfo'])
    },
    created() {
        if (this.myInfo) {
            this.formData.nickname = this.myInfo.nickname;
            this.formData.mobile = this.myInfo.mobile;
            this.formData.gender = this.myInfo.gender;
            this.formData.email = this.myInfo.email;
            this.formData.userId = this.myInfo.userId;
            this.formData.interest1 = this.myInfo.interest1;
            this.formData.interest2 = this.myInfo.interest2;
        }
    },
    methods: {
        ...mapActions(MyPageModule, ['requestSpringToCheckNickname']),
        onSubmit() {
            const { nickname, mobile, email, interest1, interest2 } = this.formData;
            this.$emit('submit', { nickname, mobile, email, interest1, interest2 });
        },
        async nicNameDuplicateCheck() {
            console.log("nickname: ", this.formData.nickname)
            this.nicknamePass = await this.requestSpringToCheckNickname({ nickname: this.formData.nickname});
            if(!this.nicknamePass) {
                alert("중복된 닉네임 입니다.");
            } else {
                alert("사용 가능한 닉네임입니다 !");
            }
        },
        isFormValid () {
            return this.nicknamePass
        },
    }
}
</script>

<style lang="scss" scoped></style>