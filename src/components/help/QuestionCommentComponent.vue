<template>
  <v-container fluid>
    <v-card>
      <v-card-title style="margin-bottom: 2rem;"><h3>답변</h3></v-card-title>
      <v-card-text style="margin-bottom: 1rem;">
        <tbody>
          <tr style="margin: auto;">
            <td align="left" width="20%">
              <div v-if="answer && answer.userId">
                작성자: {{ answer.userId.nickname }}
              </div>
            </td>
            <td  align="left" width="63.5%">
              <p style="font-size: 17px;">
                A : {{ answer.content }}
              </p>
            </td>
            <td align="right" width="20%">
              <div>
                {{ answer.createdDate }} <v-icon>mdi-clock-time-four-outline</v-icon>
              </div>
            </td>
          </tr>
        </tbody>
      </v-card-text>
    </v-card>
  </v-container>
</template>

  
<script>
export default {
  props: {
    answer: {
      type: Object, // 수정: answer를 객체로 처리
      required: true,
    }
  },
};
</script>
  
<style scoped></style>
