import router from '@/router';
import axiosInst from '@/utility/axiosInst'

export default {

    async requestPaymentToKakao(context, payload){
        await axiosInst.post("/payment/ready", payload)
        .then(res => {
            let payUrl = res.data.next_redirect_pc_url
            console.log(res)
            location.href = payUrl
        })
        .catch(error => {
            console.error(error);
    });
    },
    responsePaymentFailSignal() {
        axiosInst.get('/payment/fail')
            .then(function (response) {
                // 응답에서 Boolean 값을 받아옵니다.
                const paymentFailed = response.data;

                if (paymentFailed) {
                    // 결제가 실패한 경우
                    alert('결제가 실패했습니다.');
                } else {
                    // 결제가 성공한 경우
                    alert('결제가 성공했습니다.');
                }
            })
            .catch(() =>{
                // 오류 처리
                console.error;
            });
    },
    responsePaymentCancelSignal() {
        axiosInst.get('/payment/cancel')
            .then(function (response) {
                // 응답에서 Boolean 값을 받아옵니다.
                const paymentFailed = response.data;

                if (paymentFailed) {
                    // 결제가 실패한 경우
                    alert('결제를 취소하였습니다.');
                } else {
                    // 결제가 성공한 경우
                    alert('결제가 성공했습니다.');
                }
            })
            .catch(() =>{
                // 오류 처리
                console.error;
            });
    },
    async requestPaymentSuccess( _ , payload) {
     
        return axiosInst.post("/payment/success",payload) 
            .then((res) => {
                if(res.data==true){
                    router.push({ name: 'BillPage' });
            
                }
        })
    }
}
