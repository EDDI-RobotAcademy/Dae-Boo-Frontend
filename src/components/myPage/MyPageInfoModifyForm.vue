<template>
    <div class="myInfoContainer">
        <v-form @submit.prevent="onSubmit">
            <v-table class="myInfoTable">
                <tbody>
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
            email: '',
            userId: '',
            interest1: '',
            interest2: '',
            interestList: [
                { name: '관심사1번', value: 'INTEREST1' },
                { name: '관심사2번', value: 'INTEREST2' },
                { name: '관심사3번', value: 'INTEREST3' },
                { name: '관심사4번', value: 'INTEREST4' }
            ]
        }
    },
    created() {
        this.name = this.myInfo.name
        this.nickname = this.myInfo.nickname
        this.mobile = this.myInfo.mobile
        this.gender = this.myInfo.gender
        this.email = this.myInfo.email
        this.userId = this.myInfo.userId
        this.interest1 = this.myInfo.interest1
        this.interest2 = this.myInfo.interest2
    },
    methods: {
        onSubmit() {
            const { nickname, mobile, email, interest1, interest2 } = this
            this.$emit('submit', { nickname, mobile, email, interest1, interest2 })
        }
        // onSubmit() {
        //     const { nickname, mobile, email, interest1 } = this
        //     this.$emit('submit', { nickname, mobile, email, interest1 })
        // }
    },

}
</script>
<style></style>