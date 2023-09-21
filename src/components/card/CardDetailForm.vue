<template lang="">
    <div>
        <v-container>
        <h1 data-aos="fade-center" align="center" class="font-color">선택한 카드 이름</h1>
          <div class="card-detail-container">
            <img
              class="card-detail"
              data-aos="fade-center"
              src="https://www.hyundaicard.com/img/com/card/card_ZW_BA_f.png"
            />
            <div align="center" data-aos="fade-center" class="card-detail-text">
              <h2>카드 회사</h2><br>
              카드 혜택<br>
              카드 조건<br>
              비용<br>
            </div>
          </div>


        </v-container>
    </div>
</template>
<script>

import AOS from "aos";
import "aos/dist/aos.css";
const LINK = process.env.VUE_APP_S3_LINK;

export default {
    name:
        "CardDetailForm",
    props: {
        card: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            link: LINK,
        }
    },
    mounted() {
        AOS.init({
            duration: 1600,
        });
    },
    methods: {
        dynamicLink(extraPath) {
            return `${this.link}/${extraPath}`;
        },
    },
}

</script>
<style>
.card-detail-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    text-align: center;
}

.card-detail {
    margin: 3rem;
    width: 20%;
}

.card-detail-text {
    margin: 2rem;
    margin-top: 8rem;
    margin-bottom: 8rem;
    font-size: 19px;
    color: white;
}
</style>