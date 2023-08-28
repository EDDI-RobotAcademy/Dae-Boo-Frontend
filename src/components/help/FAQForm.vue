<template>
    <div>
      <v-row justify-md="center" align="center">
        <v-col cols="12">
          <h1 class="faq-head" align="center">FAQ</h1>
        </v-col>
        <v-expansion-panels v-model="panel" multiple class="faq">

          
          <v-expansion-panel class="faq3 no-margin">
            <v-expansion-panel-title class="faq-title">
             Q. title1
            </v-expansion-panel-title>
            <v-expansion-panel-text>
               text1
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel class="faq3 no-margin">
            <v-expansion-panel-title class="faq-title">
              Q. title2
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              text2
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel class="faq3 no-margin">
            <v-expansion-panel-title class="faq-title">
             Q. title3
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              text3
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel class="faq3 no-margin">
            <v-expansion-panel-title class="faq-title">
              Q. title4
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              text4
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel class="faq3 no-margin">
            <v-expansion-panel-title class="faq-title">
              Q. title5
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              text5
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel class="faq3 no-margin">
            <v-expansion-panel-title class="faq-title">
              Q. title6
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              text6
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