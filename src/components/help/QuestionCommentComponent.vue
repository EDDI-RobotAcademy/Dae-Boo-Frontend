<template>
  <v-container fluid>
    <v-card>
      <v-card-title style="margin-bottom: 2rem;"><h3>답변</h3></v-card-title>
      <v-card-text style="margin-bottom: 1rem;">
        <tbody>
          <tr style="margin: auto;">
            <td align="left" width="20%">
              <div v-if="question.answerComplete === true">
                작성자: {{ answer.userId.nickname }}
              </div>
              <span v-else></span>
            </td>
            <td align="left" width="63.5%">
              <p style="font-size: 17px;">
                A : 
                <span v-if="question.answerComplete === true">{{ answer.content }}</span>
                <span v-else>아직 준비 중입니다.</span>
              </p>
            </td>
            <td align="right" width="20%">
              <div v-if="question.answerComplete === true">
                {{ answer.createdDate }} <v-icon>mdi-clock-time-four-outline</v-icon>
              </div>
              <span v-else></span>
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
    },
    question: {
      type: Object, // 수정: answer를 객체로 처리
      required: true,
    }
  },
};
</script>
  
<style scoped></style>
