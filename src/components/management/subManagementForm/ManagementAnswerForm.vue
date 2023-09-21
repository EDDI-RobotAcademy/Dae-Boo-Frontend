<template>
    <div>
    <h2 class="managerAnswerTitle">A. 관리자 답변</h2>
    <div class="managerAnswerBox">
        <div class="answerText">
            {{ answer.content }}
        </div>
    </div>
    </div>
</template>

<script>
import '@/assets/css/management/managementAnswerForm.css';

export default {
    props: {
        answer: {
            type: Object,
            required: true
        }
    },
}
</script>

<style></style>