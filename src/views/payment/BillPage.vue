<template>
    <div>
        <v-container>
            <v-table style="width:1200px; height: 200px;">
                <tr>
                    <th align="center" width="40%">상품정보</th>
                    <th align="center" width="20%">배송비</th>
                    <th align="center" width="20%">수량</th>
                    <th align="center" width="20%">가격</th>
                </tr>
                <tr>
                    <td colspan="6">
                    <hr style="margin: 10px 0;"> <!-- 가로 선 밑에 10px 여백 추가 -->
                     </td>
                </tr>
                <tr v-for="item in products" :key="item.id">
                    <td align="center"><span  v-html="item.name"></span></td>
                    <td align="center"><span  v-html="item.delivery"></span></td>
                    <td align="center"><span > <input type="number" v-bind:value="item.amount"></span></td>
                    <td align="center"><span  v-html="item.price"></span></td>
                    <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator>
                        <img :src="this.localImagePath" @click="pay(item.id,item.amount)" alt="로컬 이미지" />
                    </template>
                </v-dialog>
                </tr>

                <div> 주소 부분</div>
            </v-table>
        </v-container>
    </div>
</template>
  
  
<script>
const PaymentModule = 'PaymentModule'
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            dialog: false,
            value: '',
            localImagePath: require('@/assets/kakaoPayImg.png'),
            products:[
                {
                    id:1,
                    name:'사과',
                    delivery:3000,
                    amount:2,
                    price:5000

                }
            ]
        }
    },
    methods:{
        ...mapActions(PaymentModule,['requestPaymentToKakao']),
        pay(id,amount) {
            let formData = new FormData()
            let aboutOrder = {
                id:id,
                amount:amount
            }
        formData.append(
            "aboutOrder",
            new Blob([JSON.stringify(aboutOrder)], { type: "application/json" })
        )
                this.requestPaymentToKakao(aboutOrder)
            }
    },

};
</script>
  