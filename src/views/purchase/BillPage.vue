<template>
    <v-container>
        <div class="billPageContainer">
            <h2 class="orderSheetTitle">주문서</h2>
            <div class="orderSheetProductInfo">
                <p class="orderProductTitle">주문 상품</p>
                <hr style="color: black; border: 1px solid black;" />
                <div class="orderSheetProductDetailInfo">
                    <div class="orderSheetProcutImg">
                        <img :src="dynamicLink(product.image)" alt="상품 사진">
                        <p v-html="product.name" style="font-weight: 500; margin: 10px; font-size: small;"></p>
                    </div>
                    <span v-html="product.description"></span>
                    <p> <input type="number" v-model="amount" placeholder="수량을 지정해주세요."></p>
                    <p v-html="product.price"></p>
                </div>
            </div>

            <div class="orderSheetOrdererInfo">
                <p class="orderUserInfoTitle">주문자 정보</p>
                <hr style="color: black; border: 1px solid black;" />
                <div class="orderSheetOrdererDetailInfo">
                    <div class="orderSheetSenderInfo">
                        <p class="orderSheetFirstText1">보내는 분</p>
                        <p>{{memberInfo.nickname}}</p>
                    </div>
                    <div class="orderSheetSenderPhone">
                        <p class="orderSheetFirstText2">휴대폰</p>
                        <p>{{memberInfo.mobile}}</p>
                    </div>
                    <div class="orderSheetSenderEmail">
                        <p class="orderSheetFirstText3">이메일</p>
                        <p v-if="memberInfo.email && memberInfo.email.includes('@')">{{ memberInfo.email }}</p>
                        <p v-else>이메일 없음</p>
                    </div>
                    <div>
                        <p class="orderSheetFirstText4">
                            이메일을 통해 주문 처리과정을 보내드립니다.<br>
                            정보 변경은 내 정보 > 개인정보 수정 메뉴에서 가능합니다.
                        </p>
                    </div>
                </div>
            </div>

            <div class="orderSheetDeliveryInfo">
                <p class="orderDeliveryInfoTitle">배송 정보</p>
                <hr style="color: black; border: 1px solid black;" />
                <div class="orderSheetDeliveryDetailInfo1">
                    <p class="orderSheetDeliveryFirstText1">배송지</p>
                    <AddressComponent :totalAddress="totalAddress" @update:totalAddress="handleTotalAddressUpdate" />
                </div>
                <div class="orderSheetDeliveryDetailInfo2">
                    <p class="orderSheetDeliveryFirstText2">배송 요청사항</p>
                    <p style="font-size: small; font-weight: 600;">안전하게 배달해주세요 !</p>
                </div>
            </div>

            <div class="orderSheetCouponInfo">
                <p class="orderCouponInfoTitle">쿠폰</p>
                <hr style="color: black; border: 1px solid black;" />
                <div class="orderCouponDetailInfo">
                    <p class="orderCouponFirstText">쿠폰 적용</p>
                    <p style="font-size: small; font-weight: 600;">준비중</p>
                </div>
            </div>

            <div class="orderSheetPayMentInfo">
                <p class="orderPayMentInfoTitle">결제 수단</p>
                <hr style="color: black; border: 1px solid black;" />
                <div class="orderPayMentDetailInfo">
                    <p class="orderPayMentFirstText">카카오페이</p>
                    <div class="orderKakaoPayBox">pay</div>
                </div>
            </div>

            <div class="orderSheetPrivacyAgreementInfo">
                <p class="orderPrivacyInfoTitle">개인정보 수집/제공</p>
                <hr style="color: black; border: 1px solid black;" />
                <div class="orderPrivacyFirstText">
                    <p>
                        모카 회원 계정으로 카카오페이 이용하여 카카오페이 가맹점에서 제공하는 상품 및 서비스를 구매하고자 할 경우, <br>모카파이낸셜㈜는 거래 당사자간 원활한 의사소통 및 배송, 상담 등 거래이행을 위하여 필요한 최소한의 개인정보를 아래와 같이 제공하고 있습니다.<br>
                        1. 개인정보를 제공받는 자<br>
                        상품 및 서비스 판매자<br>
                        2. 제공하는 개인정보 항목<br>
                        이름, 모카 아이디, (휴대)전화번호,<br>상품 수령인 정보(배송상품 : 수령인명, 주소, (휴대)전화번호 / E쿠폰 : 이름, 모카 아이디, 휴대전화번호),<br>결제정보(결제수단, 결제금액, 결제일시, 승인유무, 승인번호)<br>
                        3. 개인정보를 제공받는 자의 이용목적<br>
                        판매자와 구매자의 원활한 거래 진행, 본인의사의 확인, 고객상담 및 불만처리/부정이용 방지 등의 고객관리, <br>물품배송, 새로운 상품/서비스 정보와 고지사항의 안내, 상품/서비스 구매에 따른 혜택 제공<br>
                        4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간<br>
                        개인정보 이용목적 달성 시까지 보존합니다.<br>단, 관계 법령의 규정에 의하여 일정 기간 보존이 필요한 경우에는 해당 기간만큼 보관 후 삭제합니다.<br>
                        위 개인정보 제공 동의를 거부할 권리가 있으나, 거부 시 카카오페이를 이용한 상품 및 디지털 콘텐츠 구매가 불가능합니다.<br>그 밖의 내용은 카카오페이 가맹점의 자체 이용약관 및 개인정보처리방침에 따릅니다.<br>
                    </p>
                </div>
            </div>
        </div>

        <v-dialog class="PayButton" v-model="dialog" persistent style="align-content: center;">
            <template v-slot:activator>
                <v-btn class="btnSet" @click="pay">결제</v-btn>
            </template>
        </v-dialog>
    </v-container>
</template>

<script>
import AddressComponent from "@/components/address/AddressComponent.vue"
import { mapActions, mapState } from 'vuex';
import '@/assets/css/purchase/billPage.css'

const PaymentModule = 'PaymentModule'
const LogInModule = 'LogInModule'
const ShopModule = 'ShopModule'
const MyPageModule = 'MyPageModule'
const LINK = process.env.VUE_APP_S3_LINK;

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
            amount:0,
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
                userId: this.memberInfo.userId,
                productId: this.productId,
                userAccount: this.totalAddress,
                amount: this.amount,
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
        this.userId = this.memberInfo.userId;
    },
    created() {
        this.requestProductToSpring(this.productId)
    },
    computed: {
        ...mapState(MyPageModule, ['myInfo']),
        ...mapState(ShopModule, ["product"]),
        ...mapState(LogInModule, ["memberInfo"]),
        
    }
}
</script>

<style>
.btnSet{
    background-color: white;
    width: 60px;
    height: 120px;
    border: 1px;
}
</style>
  