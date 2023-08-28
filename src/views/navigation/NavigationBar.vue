<template>
  <v-app-bar :style="appBarStyle" scroll-behavior="elevate" class="app-bar-color">
    <v-spacer />
    <v-col cols="auto">
      <v-btn variant="plain" :ripple="false" to="/" class="main-logo">MOCA</v-btn>
    </v-col>
    <v-spacer />
    <v-spacer />
    <v-spacer />
    <v-spacer />
    <v-col cols="auto">
      <v-btn variant="plain" :ripple="false" to="/card" class="main-button">카드</v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn variant="plain" :ripple="false" to="/home" class="main-button">소개</v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn variant="plain" :ripple="false" to="/" class="main-button">게시판</v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn variant="plain" :ripple="false" to="/" class="main-button" @click="list">내 공간</v-btn>
    </v-col>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-col cols="auto">
          <v-btn v-bind="props" rounded variant="plain" style="color: rgb(255, 255, 255)" icon="mdi-account"></v-btn>
        </v-col>
      </template>
      <div class="triangle"></div>
      <v-list style="background-color: #222224;" align="center" justify="center" class="list-mt">
        <div :style="{ display: LoginDisplay }">
          <p class="text-h4 login-title">LOGIN</p>
          <p class="login-font">로그인 후 이용해 주세요!</p>
          <v-btn class="kakao" rounded @click="kakaoLogin">
            <b style="color:black">KAKAO</b>
          </v-btn>
          <v-btn @click="naverLogin" color="green" class="naver" rounded>NAVER</v-btn>
          <v-btn class="google" rounded>구글로 로그인</v-btn>
        </div>

        <div :style="{ display: LogoutDisplay }">
          <!-- <p class="text-h4 login-title">LOGOUT</p>-->
          <!-- <p class="login-font">모카님 반갑습니다!</p> -->
          <v-btn @click="logOut" class="logout" rounded>
            <b style="color:rgb(255, 255, 255)"> LOGOUT </b>
          </v-btn>
        </div>
      </v-list>
    </v-menu>
    <v-spacer />
  </v-app-bar>
</template>

<script>
import '@/assets/css/navigation/appbar.css'
import { ref, onMounted } from 'vue';
import { useStore, mapActions } from "vuex";

const LogInModule = 'LogInModule'

export default {
  setup() {
    const store = useStore()
    const appBarStyle = ref({ backgroundColor: 'transparent' });

    const LoginDisplay = ref("block");
    const LogoutDisplay = ref("none");
    const localStorageAccessToken = localStorage.getItem("accesstoken")

    const signOut = () => {
      store.dispatch("userModule/requestSignOut")
    }

    onMounted(() => {
      // 스크롤 이벤트를 추가하여 스크롤을 감지하고 배경을 변경합니다.
      window.addEventListener('scroll', handleScroll);

      // 로컬 스토리지 확인
      updateLoginDisplay();
      updateLogoutDisplay();
    });

    const handleScroll = () => {
      // 스크롤 위치를 확인하여 배경 색상을 조절합니다.
      if (window.scrollY > 0) {
        appBarStyle.value.backgroundColor = '#222224';
      } else {
        appBarStyle.value.backgroundColor = 'transparent';
      }
    };

    const updateLoginDisplay = () => {
      if (localStorageAccessToken !== null) {
        LoginDisplay.value = "none";
        console.log("LoginDisplay : none");
      } else {
        LoginDisplay.value = "block";
        console.log("LoginDisplay : block");
      }
    }
    const updateLogoutDisplay = () => {
      if (localStorageAccessToken !== null) {
        LogoutDisplay.value = "block";
        console.log("LogoutDisplay : none");
      } else {
        LogoutDisplay.value = "none";
        console.log("LogoutDisplay : block");
      }
    }

    return {
      appBarStyle,
      signOut,
      LoginDisplay,
      LogoutDisplay,
      localStorageAccessToken
    };
  },
  methods: {
    ...mapActions(LogInModule, [
      'requestNaverLoginToSpring',
      'getBoardList',
      'requestKakaoLoginToSpring'
    ]),
    naverLogin() {
      this.requestNaverLoginToSpring()
      window.location.reload();
    },
    kakaoLogin() {
      this.requestKakaoLoginToSpring()
    },
    list() {
      this.getBoardList()
    },
    async logOut() {
      await localStorage.removeItem("accesstoken")
      await localStorage.removeItem("refreshtoken")
      await window.location.reload();
    }
  },
}
</script>

<style></style>