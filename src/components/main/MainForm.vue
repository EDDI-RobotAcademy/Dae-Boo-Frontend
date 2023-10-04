<template>
  <div>
    <div>
      <v-carousel cycle hide-delimiters show-arrows="hover">
        <v-carousel-item
        :src="require('@/assets/mainimage.png')"
          cover @click="redirectToExternalLink('https://www.hyundaicard.com/index.jsp')"></v-carousel-item>

        <v-carousel-item
        :src="require('@/assets/main2image.png')"
          cover @click="redirectToExternalLink('https://www.hyundaicard.com/index.jsp')"></v-carousel-item>

        <v-carousel-item :src="dynamicLink(imageName)" cover @click="eventLink('/event/3')"></v-carousel-item>
      </v-carousel>
    </div>

    <v-row>
      <v-col cols="5">
        <div class="card-mb">
          <h2 class="h2">실시간 인기 My Card</h2>
          <v-col cols="12">
            <v-card class="table-size" rounded>
              <v-table>
                <thead>
                  <tr>
                    <th class="text-center">No.</th>
                    <th />
                    <th class="text-center">top 10</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr class="cardTr" v-for="(card, index) in cards" :key="card.name"
                    @click="redirectToDetails(card.cardId)">
                    <td v-if="index < 10" class="text-center">{{ card.cardId }}</td>
                    <td><img :src="dynamicLink(card.cardImage)" alt="카드 이미지" class="top10-img"></td>
                    <td class="text-center">{{ card.name }}</td>
                    <td class="text-center">{{ card.company }}카드</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </v-col>
        </div>
      </v-col>

      <v-col cols="2">
        <span />
      </v-col>

      <v-col cols="5">
        <div>
          <div class="card-mt">
            <h2 class="h2">Everyone's card</h2>
            <div class="card-mr">
              <v-carousel cycle :interval="2500" hide-delimiter-background :show-arrows="false">
                <v-carousel-item>
                  <v-row>
                    <v-col cols="4">
                      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_BA_f.png" class="card-check2"
                        @click="redirectToLink('/123')" />
                    </v-col>
                    <v-col cols="4">
                      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_GM_f.png" class="card-check2"
                        @click="redirectToLink('/456')" />
                    </v-col>
                    <v-col cols="4">
                      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_GN_f.png" class="card-check2"
                        @click="redirectToLink('/789')" />
                    </v-col>
                    <v-col cols="4">
                      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_BA_f.png" class="card-check3"
                        @click="redirectToLink('/123')" />
                    </v-col>
                    <v-col cols="4">
                      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_GM_f.png" class="card-check3"
                        @click="redirectToLink('/456')" />
                    </v-col>
                    <v-col cols="4">
                      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_GN_f.png" class="card-check3"
                        @click="redirectToLink('/789')" />
                    </v-col>
                  </v-row>
                </v-carousel-item>

                <v-carousel-item>
                  <v-row>
                    <v-col cols="4">
                      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_BA_f.png" class="card-check2"
                        @click="redirectToLink('/123')" />
                    </v-col>
                    <v-col cols="4">
                      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_GM_f.png" class="card-check2"
                        @click="redirectToLink('/456')" />
                    </v-col>
                    <v-col cols="4">
                      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_GN_f.png" class="card-check2"
                        @click="redirectToLink('/789')" />
                    </v-col>
                    <v-col cols="4">
                      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_BA_f.png" class="card-check3"
                        @click="redirectToLink('/123')" />
                    </v-col>
                    <v-col cols="4">
                      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_GM_f.png" class="card-check3"
                        @click="redirectToLink('/456')" />
                    </v-col>
                    <v-col cols="4">
                      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_GN_f.png" class="card-check3"
                        @click="redirectToLink('/789')" />
                    </v-col>
                  </v-row>
                </v-carousel-item>
              </v-carousel>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const LINK = process.env.VUE_APP_S3_LINK;
import "@/assets/css/main/main.css";
const CardModule = 'CardModule';
const LogInModule = 'LogInModule';
import { mapActions, mapState } from "vuex";

export default {
  props: {
    cards: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      link: LINK,
      imageName: 'mocaXjejuair.png'
    };
  },
  methods: {
    ...mapActions(CardModule, ['responseAgeCardList']),
    ...mapActions(CardModule, ['responseKeywordCardList', 'requestAgeCardListToSpring', 'requestAgeCardList']),

    redirectToLink(link) {
      this.$router.push(link);
    },
    redirectToDetails(cardId) {
      console.log("Redirecting to details page for item ID:", cardId);
      this.$router.push({ path: `/card-detail/${cardId}` });
    },
    dynamicLink(extraPath) {
      return `${LINK}/${extraPath}`;
    },
    async ageCardLoading() {
      console.log("AiRequestAgeCardList")
      await this.requestAgeCardList(this.memberInfo.age)
      await new Promise((resolve) => setTimeout(resolve, 60000));
      console.log("responseAgeCardList")
      const cardList = await this.responseAgeCardList();
      await this.requestAgeCardListToSpring(cardList)
    },
    redirectToExternalLink(externalLink) {
      window.open(externalLink, '_blank'); // 새 창으로 열기
    },
  },
  async mounted() {
    await this.ageCardLoading();

  },
  computed: {
    ...mapState(LogInModule, ['memberInfo']),
  },
};
</script>

<style lang="css" scoped></style>