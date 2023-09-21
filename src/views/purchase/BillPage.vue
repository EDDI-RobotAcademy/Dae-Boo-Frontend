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
                <tr v-if="products">
                    <td align="center"><span v-html="products.name"></span></td>
                    <td align="center"><span v-html="products.delivery"></span></td>
                    <td align="center"><span> <input type="number" v-bind:value="products.amount"></span></td>
                    <td align="center"><span v-html="products.price"></span></td>
                    <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator>
                            <img :src="this.localImagePath" @click="pay()" alt="로컬 이미지" />
                        </template>
                    </v-dialog>
                </tr>

                <AddressComponent :totalAddress="totalAddress" @update:totalAddress="handleTotalAddressUpdate" />
            </v-table>
        </v-container>
    </div>
</template>
<script>
import AddressComponent from "@/components/address/AddressComponent.vue"
const PaymentModule = 'PaymentModule'
const ShopModule = 'ShopModule'
import { mapActions } from 'vuex';
export default {
    components: {
        AddressComponent
    },
    data() {
        return {
            totalAddress: '',
            dialog: false,
            value: '',
            localImagePath: require('@/assets/kakaoPayImg.png'),
            products: {
                userId: 1,
                productId: 1,
                name: 'aaa',
                delivery: 3000,
                amount: 5,
                price: 5000,
                userAccount: 'absbas'

            }

        }
    },
    methods: {
        ...mapActions(PaymentModule, ['requestPaymentToKakao']),
        ...mapActions(ShopModule, ['requestPurchaseRegisterToSpring']),
        handleTotalAddressUpdate(newTotalAddress) {
            this.totalAddress = newTotalAddress;
            // 필요한 작업을 수행
        },
        async pay() {
            const purchaseForm = {
                userId: this.products.userId,
                productId: this.products.productId,
                userAccount: this.totalAddress,
                amount: this.products.amount,
            };

            try {
                console.log(purchaseForm)
                let response = await this.requestPurchaseRegisterToSpring(purchaseForm, {
                    headers: {
                        'Content-Type': 'application/json' // JSON 데이터를 전송하도록 설정
                    }
                });
                console.log(response.purchaseId);
                this.requestPaymentToKakao(response)
            } catch (error) {
                console.error(error);
            }
        }
    }

}
</script>
  