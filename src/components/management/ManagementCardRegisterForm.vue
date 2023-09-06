<template lang="">
  <div  class="centered-div" style="width:1000px;">
    <v-card  justify-center width="1000px">
      <h2 style="text-align:center">신용카드 등록</h2>
      <div>
        <v-card-text >
          <form @submit.prevent="onSubmit">
            <table >
              <tr style="text-align: center;">
                <td style="font-weight: bold"> 카드 상품</td>
                <td>
                  <v-text-field width="200px" type="text" class="inputValue" 
                  v-model="cardName" placeholder=""/>
                </td>
              </tr> 
              <tr style="text-align: center;">
                <td style="font-weight: bold"> 카드사</td>

                <td>
                  <v-text-field type="text" class="inputValue" 
                  v-model="cardCompany" placeholder=""/>
                </td>
              </tr> 
              <tr style="text-align: center;">
                <td style="font-weight: bold"> 연회비 </td>

                <td>
                  <v-text-field type="text" class="inputValue" 
                  v-model="cardFee" placeholder=""/>
                </td>
              </tr> 
              <tr style="text-align: center;">
                <td style="font-weight: bold"> 전월 실적 </td>

                <td>
                  <v-text-field type="text" class="inputValue" 
                  v-model="cardCondition" placeholder=""/>
                </td>
              </tr> 
              <tr style="text-align: center;">
                <td style="font-weight: bold"> 혜택 </td>

                <td>
                  <v-text-field type="text" class="inputValue" 
                  v-model="cardBenefit" placeholder=""/>
                </td>
              </tr> 
              <tr style="text-align: center;">
                <td style="font-weight: bold"> 이미지 </td>

                <td>
                  <v-text-field type="text" class="inputValue" 
                  v-model="cardImage" placeholder=""/>
                </td>
              </tr> 
          </table>
          <v-btn raised type="submit">등록</v-btn>
          <v-btn @click="golist">취소</v-btn>
        </form>
      </v-card-text>
    </div>
  </v-card>
</div>
</template>
<script>
import { mapActions } from 'vuex';
const ManagementModule = 'ManagementModule';
export default {
  data() {
    return {
      cardRegister: true,
      cardBenefit: '',
      cardCompany: '',
      cardName: '',
      cardCondition: '',
      cardFee: '',
      cardImage: '',
    };
  },
  methods: {
    ...mapActions(ManagementModule, ['requestCardRegisterToSpring', 'requestCardListToSpring']),
    async onSubmit() {
      let formData = new FormData()
      let aboutCard = {
        name: this.cardName,
        company: this.cardCompany,
        fee: this.cardFee,
        cardCondition: this.cardCondition,
        benefit: this.cardBenefit,
        cardImage: this.cardImage,
      }
      formData.append(
        "aboutCard",
        new Blob([JSON.stringify(aboutCard)], { type: "application/json" })
      )

      try {
        const card = await this.requestCardRegisterToSpring(aboutCard);
        if (card !== null) {
          alert("등록 성공!");
          this.golist();
          this.requestCardListToSpring();
        }
      } catch (error) {
        console.error("등록 중 오류 발생:", error);
        // 오류 처리 추가
      }
    },
    golist() {
      this.$emit('cancel');
    },
  },
};
</script>
<style lang="">

</style>