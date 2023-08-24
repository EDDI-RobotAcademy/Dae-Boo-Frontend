<template>
  <v-app-bar :style="appBarStyle" scroll-behavior="elevate" class="app-bar-color">
    <v-spacer />
    <v-col cols="auto">
      <v-btn variant="plain" :ripple="false" to="/" class="text-h5 main-logo">MOCA</v-btn>
    </v-col>
    <v-spacer />
    <v-spacer />
    <v-spacer />
    <v-spacer />
    <v-col cols="auto">
      <v-btn v-bind="props" variant="plain" :ripple="false" to="/" class="main-button">유의사항</v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn variant="plain" :ripple="false" to="/card" class="main-button">카드</v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn variant="plain" :ripple="false" to="/" class="main-button">소개</v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn variant="plain" :ripple="false" to="/" class="main-button">내 공간</v-btn>
    </v-col>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-col cols="auto">
          <v-btn v-bind="props" rounded variant="plain" style="color: rgb(255, 255, 255)" icon="mdi-account"></v-btn>
        </v-col>
      </template>
      <div class="triangle"></div>
      <v-list style="background-color: #222224;" align="center" justify="center" class="list-mt">
        <p class="text-h4 login-title">LOGIN</p>
        <p class="login-font">로그인 후 이용해 주세요!</p>
        <v-btn class="kakao" rounded>카카오로 로그인</v-btn>
        <LoginPage />
        <!-- <v-btn class="naver" rounded>네이버로 로그인</v-btn> -->
        <v-btn class="google" rounded>구글로 로그인</v-btn>
      </v-list>
    </v-menu>
    <v-spacer />
  </v-app-bar>
</template>

<script>
import '@/assets/css/navigation/appbar.css'
import { ref, onMounted } from 'vue';
import { useStore } from "vuex";
import LoginPage from '@/views/logIn/LoginPage.vue'
export default {
  setup() {
    const store = useStore()
    const appBarStyle = ref({ backgroundColor: 'transparent' });

    const signOut = () => {
      store.dispatch("userModule/requestSignOut")
    }

    onMounted(() => {
      // 스크롤 이벤트를 추가하여 스크롤을 감지하고 배경을 변경합니다.
      window.addEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
      // 스크롤 위치를 확인하여 배경 색상을 조절합니다.
      if (window.scrollY > 0) {
        appBarStyle.value.backgroundColor = '#222224';
      } else {
        appBarStyle.value.backgroundColor = 'transparent';
      }
    };


    return {
      appBarStyle,
      signOut,
    };
  },

  components: {
    LoginPage
  }
}
</script>

<style></style>