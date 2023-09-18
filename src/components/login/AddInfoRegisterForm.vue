<template>
    <h2 style="color:white">사용자 정보 기입</h2>
    <div>
        <v-form @submit.prevent="onSubmit">
            <v-table class="myInfoTable">
                <tbody>
                    <tr>
                        <th scope="row">닉네임</th>
                        <td>
                            <input type="text" v-model="formData.nickname" />
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
                    <tr>
                        <th scope="row">이메일</th>
                        <td>
                            <input type="text" v-model="formData.email" />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">관심사1 </th>
                        <td>
                            <v-select v-model="formData.interest1" label="관심사1" :items="interestList" item-title="name"
                                item-value="value" variant="underlined"></v-select>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">관심사2 </th>
                        <td>
                            <v-select v-model="formData.interest2" label="관심사2" :items="interestList" item-title="name"
                                item-value="value" variant="underlined"></v-select>
                        </td>
                    </tr>
                </tbody>
            </v-table>
            <v-btn color="primary" type="submit">
                완료
            </v-btn>
        </v-form>
    </div>
</template>

<script>
import '@/assets/css/login/addInfoRegister.css'

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
            },
            interestList: [
                { name: '관심사1번', value: 'INTEREST1' },
                { name: '관심사2번', value: 'INTEREST2' },
                { name: '관심사3번', value: 'INTEREST3' },
                { name: '관심사4번', value: 'INTEREST4' }
            ]
        }
    },
    props: {
        myInfo: {
            type: Object,
            required: true
        }
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
        onSubmit() {
            const { nickname, mobile, email, interest1, interest2 } = this.formData;
            this.$emit('submit', { nickname, mobile, email, interest1, interest2 });
        }
    }
}
</script>

<style lang="scss" scoped></style>
