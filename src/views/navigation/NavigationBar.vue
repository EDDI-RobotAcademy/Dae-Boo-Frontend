<template>
  <v-app-bar :style="appBarStyle" scroll-behavior="elevate" class="app-bar-color">
    <v-spacer />
    <v-col cols="auto">
      <v-btn variant="text" :ripple="false" to="/" class="main-logo">MOCA</v-btn>
    </v-col>
    <v-spacer />
    <v-spacer />
    <v-spacer />
    <v-spacer />

    <v-menu open-on-hover>
      <!-- open-on-hover -->
      <template v-slot:activator="{ props }">
        <v-col cols="auto">
          <v-btn v-bind="props" variant="plain" :ripple="false" class="main-button">카드</v-btn>
          <!-- to="/card" -->
        </v-col>
      </template>
      <v-list style="background-color: white" align="left" justify="center" class="card-list">

        <v-row>
          <v-col cols="2">
            <v-btn class="btn-size" rounded="3" style="height: 11vh; color: black;" to="/card">카드 추천</v-btn>
          </v-col>
          <v-col cols="1"><span /></v-col>
          <v-col cols="3">
            <h3 class="card-title">모두의 혜택</h3>
            <router-link to="/home" class="custom-link">
              <p class="appbar-card-text">포인트</p>
            </router-link>
            <router-link to="/home" class="custom-link">
              <p class="appbar-card-text">미니게임</p>
            </router-link>
          </v-col>

          <v-col cols="3">
            <h3 class="card-title">모두의 카드</h3>
            <router-link to="/home" class="custom-link">
              <p class="appbar-card-text">전체 카드</p>
            </router-link>
            <router-link to="/home" class="custom-link">
              <p class="appbar-card-text">카드 신청</p>
            </router-link>
          </v-col>

          <v-col cols="3">
            <h3 class="card-title">우리의 카드</h3>
            <router-link to="/recruitment" class="custom-link">
              <p class="appbar-card-text">오시는 길</p>
            </router-link>
            <router-link to="/notice/list-page" class="custom-link">
              <p class="appbar-card-text">공지사항</p>
            </router-link>
            <router-link to="/help/caution" class="custom-link">
              <p class="appbar-card-text">유의사항</p>
            </router-link>
            <router-link to="/help/faq" class="custom-link">
              <p class="appbar-card-text">자주묻는 질문</p>
            </router-link>
          </v-col>

        </v-row>

        <v-row>
          <v-col cols="2">
            <v-btn class="btn-size" style="height: 12vh; color: black;" to="/card-search">카드 검색</v-btn>
          </v-col>
          <v-col cols="1"><span /></v-col>
          <v-col cols="3">
            <h3 class="card-title">모두의 회원</h3>
            <router-link to="/board/list-page" class="custom-link">
              <p class="appbar-card-text">게시판</p>
            </router-link>
          </v-col>

          <v-col cols="3">
            <h3 class="card-title">모두의 쇼핑</h3>
            <router-link to="/shopMainpage" class="custom-link">
              <p class="appbar-card-text">기프트 샵</p>
            </router-link>
            <router-link to="/shopSearch" class="custom-link">
              <p class="appbar-card-text">가게 찾기</p>
            </router-link>
          </v-col>
        </v-row>
      </v-list>
    </v-menu>

    <v-col cols="auto">
      <v-btn variant="plain" :ripple="false" to="/shopMainpage" class="main-button">쇼핑</v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn variant="plain" :ripple="false" to="/home" class="main-button">소개</v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn variant="plain" :ripple="false" to="/board/list-page" class="main-button">게시판</v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn variant="plain" :ripple="false" to="/myPage" v-if="memberInfo && memberInfo.role === 'NORMAL'" class="main-button" @click="list">내 공간</v-btn>
    </v-col>
    <v-col cols="auto">
      <v-btn variant="plain" :ripple="false" to="/manageMentPage" v-if="memberInfo && memberInfo.role === 'MANAGER'" class="main-button">관리자 페이지</v-btn>
    </v-col>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-col cols="auto">
          <v-btn v-bind="props" rounded variant="plain" style="color: black" icon="mdi-account"></v-btn> <!--사람 아이콘 색-->
        </v-col>
      </template>
      <div class="triangle"></div>
      <v-list style="background-color: white;" align="center" justify="center" class="list-mt">
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
          <v-btn @click="logOut" class="logout" rounded>
            <b style="color:black"> LOGOUT </b>
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
import { useStore, mapActions, mapState } from "vuex";

const LogInModule = 'LogInModule'
const MyPageModule = 'MyPageModule'

export default {
  setup() {
    const store = useStore()
    const appBarStyle = ref({ backgroundColor: 'transparent' });

    const LoginDisplay = ref("block");
    const LogoutDisplay = ref("none");

    // redis 로 인해 바꾼 코드
    const localStorageAccessToken = localStorage.getItem("userToken");

    const handleScroll = () => {
      // 스크롤 위치를 확인하여 배경 색상을 조절합니다.
      if (window.scrollY > 0) {
        appBarStyle.value.backgroundColor = 'white';
        // appBarStyle.value.backgroundColor = '#000000';
      } else {
        appBarStyle.value.backgroundColor = 'transparent';
      }
    };

    // 크기 변경 이벤트 처리 추가
    const handleResize = () => {
      try {
        // 크기 변경 이벤트 처리 로직 추가
      } catch (error) {
        console.error("Error handling resize:", error);
        // 예외 처리 코드 추가 (예: 에러 로그 출력)
      }
    };

    // 스크롤 이벤트를 추가하여 스크롤을 감지하고 배경을 변경합니다.
    window.addEventListener('scroll', handleScroll);
    // 크기 변경 이벤트 처리 추가
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.body);

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
      'requestKakaoLoginToSpring',
      'logout'
    ]),
    ...mapActions(MyPageModule, ['deleteVuexUserInfo', 'requestMyPageUserInfo']),
    async naverLogin() {
      await this.requestNaverLoginToSpring()
    },
    async kakaoLogin() {
      await this.requestKakaoLoginToSpring()
    },
    list() {
      this.getBoardList()
      this.requestMyPageUserInfo() // 내 공간 페이지 들어갈 때, 사용자 정보 부르기
    },
    async logOut() {
      // redis 작업 중 추가 (로그아웃 액션 호출)
      await this.logout();
      await this.$router.push({ path: `/` });
      await this.deleteVuexUserInfo();
      await window.location.reload();
    }
  },
  computed: {
        ...mapState(LogInModule, ['memberInfo'])
    },
}
</script>

<style></style>