<template>
  <div>
    <div>
      <v-carousel cycle hide-delimiters show-arrows="hover">
        <v-carousel-item
          src="https://support.catchfashion.com/hc/article_attachments/360102149993/201229_hyundai_Mainbanner_web.jpg"
          cover
          @click="eventLink('/event/1')"
        ></v-carousel-item>

        <v-carousel-item
          src="https://support.catchfashion.com/hc/article_attachments/4402717938583/210601_hyundaimpoint_Mainbanner_web.jpg"
          cover
          @click="eventLink('/event/2')"
        ></v-carousel-item>

        <v-carousel-item
          src="https://support.catchfashion.com/hc/article_attachments/360098761074/201120_hyundaicard_Mainbanner_web.jpg"
          cover
          @click="eventLink('/event/3')"
        ></v-carousel-item>
      </v-carousel>
    </div>

    <div>
      <v-card class="mx-auto search-mr" color="grey-lighten-3">
        <v-text-field
          density="compact"
          variant="underlined"
          label="통합검색"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
        ></v-text-field>
      </v-card>
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
                  <!-- <tr
                    class="cardTr"
                    v-for="item in desserts"
                    :key="item.name"
                    @click="redirectToDetails(item.id)"
                  >
                    <td class="text-center">{{ item.id }}</td>
                    <td>
                      <img :src="item.img" alt="Item Image" class="top10-img" />
                    </td>
                    <td class="text-center">{{ item.name }}</td>
                    <td class="text-center">{{ item.calories }}</td>
                  </tr> -->
                  <tr
                    class="cardTr"
                    v-for="(card,index) in cards"
                    :key="card.name"
                    @click="redirectToDetails(card.cardId)"
                  >                    
                  <td v-if="index < 10" class="text-center">{{ card.cardId }}</td>
                    <td class="top10-img"><img :src="dynamicLink(card.cardImage)" alt="카드 이미지"></td>
                    <td class="text-center">{{ card.name }}</td>
                    <td class="text-center">{{ card.company }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </v-col>
        </div>
      </v-col>
      
      <v-col cols="2">
        <span/>
      </v-col>

      <v-col cols="5">
        <div>
          <div class="card-mt">
            <h2 class="h2">Everyone's card</h2>
            <div class="card-mr">
              <v-carousel
                cycle
                :interval="2500"
                hide-delimiter-background
                :show-arrows="false"
              >
                <v-carousel-item>
                  <v-row>
                    <v-col cols="4">
                      <img
                        src="https://www.hyundaicard.com/img/com/card/card_ZW_BA_f.png"
                        class="card-check2"
                        @click="redirectToLink('/123')"
                      />
                    </v-col>
                    <v-col cols="4">
                      <img
                        src="https://www.hyundaicard.com/img/com/card/card_ZW_GM_f.png"
                        class="card-check2"
                        @click="redirectToLink('/456')"
                      />
                    </v-col>
                    <v-col cols="4">
                      <img
                        src="https://www.hyundaicard.com/img/com/card/card_ZW_GN_f.png"
                        class="card-check2"
                        @click="redirectToLink('/789')"
                      />
                    </v-col>
                    <v-col cols="4">
                      <img
                        src="https://www.hyundaicard.com/img/com/card/card_ZW_BA_f.png"
                        class="card-check3"
                        @click="redirectToLink('/123')"
                      />
                    </v-col>
                    <v-col cols="4">
                      <img
                        src="https://www.hyundaicard.com/img/com/card/card_ZW_GM_f.png"
                        class="card-check3"
                        @click="redirectToLink('/456')"
                      />
                    </v-col>
                    <v-col cols="4">
                      <img
                        src="https://www.hyundaicard.com/img/com/card/card_ZW_GN_f.png"
                        class="card-check3"
                        @click="redirectToLink('/789')"
                      />
                    </v-col>
                  </v-row>
                </v-carousel-item>

                <v-carousel-item>
                  <v-row>
                    <v-col cols="4">
                      <img
                        src="https://www.hyundaicard.com/img/com/card/card_ZW_BA_f.png"
                        class="card-check2"
                        @click="redirectToLink('/123')"
                      />
                    </v-col>
                    <v-col cols="4">
                      <img
                        src="https://www.hyundaicard.com/img/com/card/card_ZW_GM_f.png"
                        class="card-check2"
                        @click="redirectToLink('/456')"
                      />
                    </v-col>
                    <v-col cols="4">
                      <img
                        src="https://www.hyundaicard.com/img/com/card/card_ZW_GN_f.png"
                        class="card-check2"
                        @click="redirectToLink('/789')"
                      />
                    </v-col>
                    <v-col cols="4">
                      <img
                        src="https://www.hyundaicard.com/img/com/card/card_ZW_BA_f.png"
                        class="card-check3"
                        @click="redirectToLink('/123')"
                      />
                    </v-col>
                    <v-col cols="4">
                      <img
                        src="https://www.hyundaicard.com/img/com/card/card_ZW_GM_f.png"
                        class="card-check3"
                        @click="redirectToLink('/456')"
                      />
                    </v-col>
                    <v-col cols="4">
                      <img
                        src="https://www.hyundaicard.com/img/com/card/card_ZW_GN_f.png"
                        class="card-check3"
                        @click="redirectToLink('/789')"
                      />
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
export default {
  props: {
    cards: {
        type: Array,
        required: true,
      }
  },
  data() {
    return {
      link: LINK
    };
  },
  methods: {
    redirectToLink(link) {
      this.$router.push(link);
    },
    eventLink(link) {
      this.$router.push(link);
    },
    redirectToDetails(cardId) {
      console.log("Redirecting to details page for item ID:", cardId);
      this.$router.push({ path: `/card/${cardId}` });
    },
    dynamicLink(extraPath) {
            return `${LINK}/${extraPath}`;
        },
  },
};
</script>

<style lang="css" scoped>
</style>