<template>
    <div>
      <v-row justify-md="center" align="center">
        <v-col cols="12">
          <h1 class="faq-head" align="center">FAQ</h1>
        </v-col>
        <v-expansion-panels v-model="panel" multiple class="faq">

          
          <v-expansion-panel class="faq3 no-margin">
            <v-expansion-panel-title class="faq-title">
             Q. 카드 중개업체란 무엇인가요?
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              카드 중개업체는 다양한 금융 기관의 신용카드 상품을 비교하고 고객에게 최적의 카드를 추천해주는 서비스를 제공하는 기업입니다.
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel class="faq3 no-margin">
            <v-expansion-panel-title class="faq-title">
              Q. 카드 추천 서비스는 어떻게 동작하나요?
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              고객님의 소비패턴을 파악한 후 고객님의 우선순위와 라이프스타일에 따라 가장 적합한 카드를 추천해드립니다.
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel class="faq3 no-margin">
            <v-expansion-panel-title class="faq-title">
             Q.  카드 중개업체의 서비스를 이용하는데 비용이 드나요?
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              아니요, 저희 카드 중개업체의 서비스는 무료로 제공됩니다. <br><br> 
              언제든지 원하는만큼 카드 상품을 비교하고 추천받을 수 있습니다.
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel class="faq3 no-margin">
            <v-expansion-panel-title class="faq-title">
              Q. 제공하는 카드 추천이 신뢰할만한가요?
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              저희는 다양한 금융 기관과 파트너십을 맺어 신뢰성 높은 카드 추천을 제공하고 있습니다. <br><br> 
              고객의 신용 등급과 필요한 조건을 고려하여 카드를 추천하며, 고객의 개인 정보는 보안을 위해 철저히 관리됩니다.
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel class="faq3 no-margin">
            <v-expansion-panel-title class="faq-title">
              Q. 이미 카드를 가지고 있어도 서비스를 이용할 수 있나요?
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              네, 기존 카드 소지자도 저희 서비스를 이용하여 다른 카드를 비교하고 새로운 카드를 추천받을 수 있습니다.
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel class="faq3 no-margin">
            <v-expansion-panel-title class="faq-title">
              Q. 문의사항이나 도움이 필요한 경우 어떻게 연락하나요?
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              문의 사항이 있으시면 1:1문의를 통하여 문의하실 수 있습니다. <br><br>
              1:1문의 같은 경우는 항상 여러분을 도와드리기 위해 준비되어 있습니다.
            </v-expansion-panel-text>
          </v-expansion-panel>

        </v-expansion-panels>
      </v-row>
    </div>
  </template>

<script>
import '@/assets/css/help/faq.css'
    export default {
        data () {
      return {
        panel: [],
      }
    },
    }
</script>

<style lang="css" scoped>
.no-margin {
    margin: 0;
  }
</style>