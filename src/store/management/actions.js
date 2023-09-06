import axiosInst from '@/utility/axiosInst'
import { REQUEST_CARD_LIST_TO_SPRING } from './mutation-types'

export default {
    async requestCardListToSpring({ commit }) {
       
       await axiosInst.post('/card/manage/list')
        .then((res)=>{
            // console.log(res.data)
            commit(REQUEST_CARD_LIST_TO_SPRING, res.data);
        })
        .catch(()=>{
            console.error
        })
      },
      async requestCardRegisterToSpring(context, payload) {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        return await axiosInst.post("card/manage/register", payload, config)
          .then((resRegister) => {
            return resRegister.data
          });
      },
  
}