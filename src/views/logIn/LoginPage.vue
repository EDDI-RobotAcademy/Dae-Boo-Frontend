<template>
    <div>
        <v-btn class="naver" rounded @click="naverLogin" color="green">네이버로 로그인</v-btn>
        <!-- <v-btn @click="naverLogin" color="green">NAVER</v-btn> -->
    </div>
</template>
<script>
import { mapActions } from "vuex";
import '@/assets/css/navigation/appbar.css'
const LogInModule = 'LogInModule'
export default {
    methods: {
        ...mapActions(LogInModule, ['requestNaverLoginToSpring']),
        naverLogin() {
            this.requestNaverLoginToSpring()
        }
    }
}
</script>
<style></style>