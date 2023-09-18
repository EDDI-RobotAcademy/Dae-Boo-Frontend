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
 
}
