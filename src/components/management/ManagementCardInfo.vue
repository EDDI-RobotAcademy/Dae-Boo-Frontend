<template>
    <v-container>
        <b>카드 정보</b>
        <div style="display: flex; justify-content: center; align-items: center;">
            <img class="card" :src="dynamicLink(card.cardImage)">
    </div>
        <v-table >
            
            <tbody>
                <tr>
                    <th scope="row">카드 이름</th>
                    <td>{{ card.name }}</td>
                </tr>
                <tr>
                    <th scope="row">카드사</th>
                    <td>{{ card.company }}</td>
                </tr>
                <tr>
                    <th scope="row">연 회비</th>
                    <td>{{ card.fee }}</td>
                </tr>
                <tr>
                    <th scope="row">전월 실적</th>
                    <td>{{ card.cardCondition }}</td>
                </tr>
                <tr>
                    <th scope="row">혜택</th>
                    <td>{{ card.benefit }}</td>
                </tr>
                <tr>
                    <th scope="row">상태</th>
                    <td>{{ card.activate }}</td>
                </tr>
            </tbody>
        </v-table>
        <v-btn class="withdraw" append-icon="mdi-chevron-double-right" variant="text" @click="golist">
            뒤로가기
        </v-btn>
        <v-btn class="withdraw" variant="text" @click="cardStop(card.cardId)">
            카드 활성/비활성
        </v-btn>
    </v-container>
</template>
<script>
// import '@/assets/css/myPage/MyPageInfo.css'
import { mapActions, mapState } from 'vuex';
const ManagementModule = 'ManagementModule'
const LINK = process.env.VUE_APP_S3_LINK;
export default {
    props: {
        id: {
            type: Number
        }
    },
    methods: {
        ...mapActions(ManagementModule,['requestAccountStatusSetToSpring','requestAccountListToSpring']),
        golist() {
            this.$emit('cancel');
        },
        cardStop(id){
            this.requestAccountStatusSetToSpring(id)
        },
        dynamicLink(extraPath) {
            return `${LINK}/${extraPath}`;
        },
        
    },
    mounted() {
    },
    computed: {
        ...mapState(ManagementModule, ['card'])
    }

}
</script>
<style>

.card {
  width: 200px; /* 카드의 너비 */
  height: 316px; /* 카드의 높이 */
  background-color: #f0f0f0; /* 카드의 배경색 */
  justify-content: center;
  display: flex;
  text-align: center;
 
}
</style>