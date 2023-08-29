<template>
  <v-footer class="footer-content">
    <v-row  no-gutters>
        <v-btn class="footer-name" @click="goFAQPage">
        <h2 class="text-h5">FAQ</h2>
      </v-btn>
        <v-btn class="footer-name2">
        <h2 class="text-h5">1:1문의</h2>
      </v-btn>     
      
      <v-col cols="12">
        <p class="footer-item">운영시간 : 평일 10:00 ~ 17:00 (점심시간 12:30 ~ 13:30 제외/주말 및 공유일 제외)</p>
      </v-col>
      
      <v-col class="footer-item2" cols="4">
        <h3 class="head-mr">NOTICE</h3>
        <div style="font-size: 14px;">
        <router-link to="/error-page" class="custom-link">
        <p>[공지] 신청/취소 관련 사용 정책 변경 사전 안내</p>
        </router-link>
        <router-link to="/error-page" class="custom-link">
        <p>[공지] 안전한 MOCA 서비스 이용을 위한 비밀 번호 변경 방법 안내</p>
      </router-link>
      <router-link to="/error-page" class="custom-link">
        <p>[공지] 8/14(월) 광복절 배송지연 안내</p>
      </router-link>
      <router-link to="/error-page" class="custom-link">
        <p>[공지] 부가 서비스 이용 정책 사전안내</p>
      </router-link>
      <router-link to="/error-page" class="custom-link">
        <p>[공지] 카드 신청 수단 변경 사전안내</p>
      </router-link>
    </div>
      </v-col>

      <v-col class="footer-item2" cols="2">
        <h3 class="head-mr">ABOUT US</h3>
        <router-link to="/home" class="custom-link">
          <p>MOCA 소개</p>
        </router-link>
        <router-link to="/recruitment" class="custom-link">
          <p>인재채용</p>
        </router-link>

      </v-col>
      <v-col class="footer-item2" cols="2">
        <h3 class="head-mr">MY MOCA</h3>
        <router-link to="/error-page" class="custom-link">
          <p>신청/취소 내역</p>
        </router-link>
        <router-link to="/error-page" class="custom-link">
          <p>리뷰 내역</p>
        </router-link>
        <router-link to="/error-page" class="custom-link">
          <p>1:1 문의내역</p>
        </router-link>
      </v-col>
      
      <v-col class="footer-item2" cols="2">
        <h3 class="head-mr">MY ACCOUNT</h3>
        <router-link to="/error-page" class="custom-link">
          <p>회원정보수정</p>
        </router-link>
        <router-link to="/error-page" class="custom-link">
          <p>회원등급</p>
        </router-link>
      </v-col>
      
      <v-col class="footer-item2" cols="2">
        <h3 class="head-mr">HELP</h3>
        <router-link to="/error-page" class="custom-link">
          <p>마케팅 제휴, 입점 문의</p>
        </router-link>
        <router-link to="/error-page" class="custom-link">
          <p>공지사항</p>
        </router-link>
        <router-link to="/error-page" class="custom-link">
          <p>카드 Q&A 내역</p>
        </router-link>
        <router-link to="/help/faq" class="custom-link">
          <p>FAQ</p>
        </router-link>
        <router-link to="/help/caution" class="custom-link">
          <p>유의사항</p>
          <br>
        </router-link>
      </v-col>      

      <h3 class="footer-item3-main">개인정보처리방침 | 이용약관</h3>
      <v-col cols="12">
        <p class="footer-item3">상호명 : 주식회사 모두의카드 MOCA | 사업장소재지 : 서울특별시 강남구 강남구 테헤란로14길 6 , 2층</p>
        <p class="footer-item3 item3-mt">
          전화번호 : 0644-0000 |
          이메일 : moca@maca.co.kr |
          대표 : 김모카 |
          개인정보 보호책임자 : 김모카 |
          호스팅 서비스 : ㈜ MOCA
        </p>
        <p class="footer-item3 item3-mt">일부 상품의 경우 MOCA 는 통신 판매의 당사자가 아닌 통신판매중개자로서 상품, 상품정보, 거래에 대한 책임이 제한될 수 있으므로, 각 상품 페이지에서 구체적인  내용을 확인하시기 바랍니다.
        </p>
        <br>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import '@/assets/css/navigation/Footer.css'
export default {
  setup() {

  },
  methods: {
    goFAQPage() {
      this.$router.push('/help/faq')
      window.scrollTo(0, 0);
    }
  },
};
</script>
