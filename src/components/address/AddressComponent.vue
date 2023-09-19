<template>
    <div>
      <form>
        <!-- 기존 코드 유지 -->
        <input type="text" v-model="zonecode" readonly />
        <v-btn id="postcode" @click="openPostcode">검색</v-btn><br />
        <input type="text" v-model="roadAddress" placeholder="주소" readonly /><br />
        <input type="text" v-model="detailAddress" placeholder="상세주소" />
        <v-btn @click="showAddress">주소 확인 완료</v-btn>
        <span v-if="totalAddress != null">{{ totalAddress }}</span>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      // totalAddress를 props로 받음
      totalAddress: String,
    },
    data() {
      return {
        zonecode: '',
        roadAddress: '',
        detailAddress: '',
      };
    },
    methods: {
      openPostcode() {
        new window.daum.Postcode({
          oncomplete: (data) => {
            this.zonecode = data.zonecode;
            this.roadAddress = data.roadAddress;
          },
        }).open();
      },
      showAddress() {
        // 부모 컴포넌트로 totalAddress 값을 이벤트를 통해 전달
        this.$emit('update:totalAddress', this.zonecode +" "+ this.roadAddress);
      },
    },
  };
  </script>
  