<template>
    <div class="myInfoContainer">
        <v-form @submit.prevent="onSubmit">
            <v-table class="myInfoTable">
                <tbody>
                    <tr>
                        <th scope="row">닉네임</th>
                        <td>
                            <input type="text" v-model="nickname" />
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
                            <input type="text" :value="myInfo.gender" disabled />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">휴대폰 번호</th>
                        <td>
                            <input type="text" v-model="mobile" />
                        </td>
                    </tr>
                    <!-- <tr>
                        <th scope="row">이메일</th>
                        <td>
                            <input type="text" v-model="email" />
                        </td>
                    </tr> -->

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
                    <!-- <tr>
                        <th scope="row">관심사2 </th>
                        <td>
                            <select v-model="interest2">
                                <option v-for="(interest, index) in interestList" :value="interest.value"
                                    v-bind:key="index">
                                    {{ interest.name }}
                                </option>
                            </select>
                        </td>
                    </tr> -->
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
            // name: '',
            nickname: '',
            gender: '',
            mobile: '',
            email: '',
            userId: '',
            interest1: '',
            interest2: '',
            nicknamePass: false,
            interestList: [
                { name: '관리비', value: '0' },
                { name: '교육', value: '1' },
                { name: '금융', value: '2' },
                { name: '대형마트', value: '3' },
                { name: '레저', value: '4' },
                { name: '렌탈', value: '5' },
                { name: '문화', value: '6' },
                { name: '베이커리', value: '7' },
                { name: '뷰티', value: '8' },
                { name: '쇼핑', value: '9' },
                { name: '영화', value: '10' },
                { name: '외식', value: '11' },
                { name: '의료', value: '12' },
                { name: '주유', value: '13' },
                { name: '카페', value: '14' },
                { name: '통신', value: '15' },
                { name: '편의점', value: '16' }
            ]
        }
    },
    created() {
        // this.name = this.myInfo.name
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
        // onSubmit() {
        //     const { nickname, mobile, email, interest1 } = this
        //     this.$emit('submit', { nickname, mobile, email, interest1 })
        // },
        async nicNameDuplicateCheck() {
            console.log("nickname: ", this.nickname)
            this.nicknamePass = await this.requestSpringToCheckNickname({ nickname: this.nickname});
            if(!this.nicknamePass) {
                alert("중복된 닉네임 입니다.");
            } else {
                alert("사용 가능한 닉네임입니다 !");
            }
        },
    },

}
</script>
<style></style>