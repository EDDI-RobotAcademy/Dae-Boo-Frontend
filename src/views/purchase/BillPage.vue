<template>
    <v-container class="table-container">

        <div class="left-table">
            <h1>주문 정보</h1>
            <v-table>
                <div class="AddressBox">
                    <AddressComponent :totalAddress="totalAddress" @update:totalAddress="handleTotalAddressUpdate" />
                </div>

            </v-table>
        </div>
        <div class="right-table">
            <v-table>
                <tr>
                    <th align="center" width="20%">이미지</th>
                    <th align="center" width="20%">상품명</th>
                    <th align="center" width="20%">상품정보</th>
                    <th align="center" width="20%">수량</th>
                    <th align="center" width="20%">가격</th>
                </tr>
                <tr>
                    <td colspan="5">
                        <hr style="margin: 10px 0;"> <!-- 가로 선 밑에 10px 여백 추가 -->
                    </td>
                </tr>
                <tr>
                    <td align="center"><img :src="dynamicLink(product.image)" alt="상품 사진"
                            style="width: 50px; height: 80px;">
                    </td>
                    <td align="center"><span v-html="product.name"></span></td>
                    <td align="center"><span v-html="product.description"></span></td>
                    <td align="center"><span> <input type="number" v-bind:value="amount"></span></td>
                    <td align="center"><span v-html="product.price"></span></td>

                </tr>
                <v-dialog class="PayButton" v-model="dialog" persistent>
                    <template v-slot:activator>
                        <img :src="this.localImagePath" alt="로컬 이미지" />
                    </template>
                </v-dialog>
            </v-table>
        </div>

    </v-container>
</template>
<script>
import AddressComponent from "@/components/address/AddressComponent.vue"
const PaymentModule = 'PaymentModule'
const ShopModule = 'ShopModule'
const MyPageModule = 'MyPageModule'
const LINK = process.env.VUE_APP_S3_LINK;
import { mapActions, mapState } from 'vuex';
export default {
    props: {
        productId: {
            type: Number,
            required: true
        }
    },
    components: {
        AddressComponent
    },
    data() {
        return {
            totalAddress: '',
            dialog: false,
            value: '',
            localImagePath: require('@/assets/kakaoPayImg.png'),
            amount: 1

        }
    },
    methods: {
        ...mapActions(PaymentModule, ['requestPaymentToKakao']),
        ...mapActions(ShopModule, ['requestPurchaseRegisterToSpring', 'requestProductToSpring']),
        handleTotalAddressUpdate(newTotalAddress) {
            this.totalAddress = newTotalAddress;
            // 필요한 작업을 수행
        },
        dynamicLink(extraPath) {
            return `${LINK}/${extraPath}`;
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
    },
    mounted() {
        this.userId = this.myInfo.userId;



    },
    created() {
        this.requestProductToSpring(this.productId)
    },
    computed: {
        ...mapState(MyPageModule, ['myInfo']),
        ...mapState(ShopModule, ["product"]),

    }

}
</script>
<style>
.table-container {
    display: flex;
    /* 또는 display: grid; 로 설정 가능 */
    justify-content: space-between;
    /* 두 테이블 사이에 여백을 주기 위해 사용 */
    background-color: white;
    height: 600px;
}

.left-table,
.right-table {
    width: 45%;
    /* 각 테이블의 너비를 조정하여 오른쪽 여백을 만듭니다. */
}

.AddressBox {
    border: 2px solid black;
    /* 굵은 선, 검은색 테두리 */
    padding: 20px;
    /* 내용과 테두리 사이에 여백을 추가할 수 있습니다. */
    /* 다른 스타일링 속성 추가 가능 */
}

.PayButton {
    position: absolute;
    top: 0;
    /* 원하는 세로 위치 */
    right: 0;
    /* 오른쪽 끝에 배치 */
    margin-top: 10px;
    /* 필요한 경우 상단 여백 추가 */
}
</style>
  