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
      <v-card
    class="mx-auto search-mr"
    color="grey-lighten-3"

  >
      <v-text-field
      :loading="loading"
      append-inner-icon="mdi-magnify"
      density="compact"
        variant="solo"
        label="통합 검색창입니다."
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
  </v-card>
    </div>
    
    <v-row>
<v-col cols="6">
  <div class="card-mb">
      <h2 class="h2">실시간 인기 My Card</h2>
      <v-col cols="12">
      <v-card class="table-size" rounded="">
        <v-table >
          <thead>
            <tr>
              <th class="text-left">
                No.
              </th>
              <th/>
              <th class="text-center">
                top 10
              </th>
              <th/>
            </tr>
          </thead>
          <tbody>
            <tr
            v-for="item in desserts"
            :key="item.name"
            @click="redirectToDetails(item.id)"
            > 
            <td>{{ item.id }}</td>
            <td><img :src="item.img" alt="Item Image" class="top10-img"></td>
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-col>
  </div>
</v-col>

<v-col cols="6">
    <div>
      <div class="card-mt">
        <h2 class="h2">Everyone's card</h2>
        <div class="card-mr">
          <v-carousel cycle :interval="2500" hide-delimiter-background :show-arrows="false">
            <v-carousel-item>
          <v-row>
            <v-col cols="4">
      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_BA_f.png" class="card-check2" @click="redirectToLink('/123')">
    </v-col>
    <v-col cols="4">
      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_GM_f.png" class="card-check2" @click="redirectToLink('/456')">
    </v-col>
    <v-col cols="4">
      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_GN_f.png" class="card-check2" @click="redirectToLink('/789')">
    </v-col>    
    <v-col cols="4">
      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_BA_f.png" class="card-check3" @click="redirectToLink('/123')">
    </v-col>
    <v-col cols="4">
      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_GM_f.png" class="card-check3" @click="redirectToLink('/456')">
    </v-col>
    <v-col cols="4">
      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_GN_f.png" class="card-check3" @click="redirectToLink('/789')">
    </v-col>
        </v-row>
        </v-carousel-item>

        <v-carousel-item>
          <v-row>
            <v-col cols="4">
      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_BA_f.png" class="card-check2" @click="redirectToLink('/123')">
    </v-col>
    <v-col cols="4">
      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_GM_f.png" class="card-check2" @click="redirectToLink('/456')">
    </v-col>
    <v-col cols="4">
      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_GN_f.png" class="card-check2" @click="redirectToLink('/789')">
    </v-col>    
    <v-col cols="4">
      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_BA_f.png" class="card-check3" @click="redirectToLink('/123')">
    </v-col>
    <v-col cols="4">
      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_GM_f.png" class="card-check3" @click="redirectToLink('/456')">
    </v-col>
    <v-col cols="4">
      <img src="https://www.hyundaicard.com/img/com/card/card_ZW_GN_f.png" class="card-check3" @click="redirectToLink('/789')">
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
import '@/assets/css/main/main.css'
  export default {
    data () {
      return {
        desserts: [
          {
            id: 1,
            img:'https://www.hyundaicard.com/img/com/card/card_ZW_BA_f.png',
            name: '그린티',
            calories: 'MOCA카드',            
          },
          {
            id: 2,
            img:'https://www.hyundaicard.com/img/com/card/card_ZW_GM_f.png',            
            name: ' 칠리페퍼',
            calories: '현대카드' ,
          },
          {
            id: 3,
            img:'https://www.hyundaicard.com/img/com/card/card_ZW_GN_f.png',
            name: '이클립스',
            calories: '현대카드' ,
          },
          {
            id: 4,
            img:'https://www.hyundaicard.com/img/com/card/card_ZW_GP_f.png',
            name: '이클립스',
            calories: '현대카드',
          },
          {
            id: 5,
            img:'https://www.hyundaicard.com/img/com/card/card_ZW_BA_f.png',
            name: '이클립스',
            calories: '현대카드' ,
          },
          {
            id: 6,
            img:'https://www.hyundaicard.com/docfiles/resources/pc/images/detail/bg_top_card_tbe3.png',
            name: '이클립스',
            calories: '현대카드' ,
          },
          {
            id: 7,
            img:'https://www.hyundaicard.com/images/cardscommon/card_TRE5ST_GT_f.png',
            name: '이클립스',
            calories: '현대카드' ,
          },
          {
            id: 8,
            img:'https://www.hyundaicard.com/img/com/card/028922GV_h.png',
            name: '이클립스',
            calories: '현대카드' ,
          },
          {
            id: 9,
            img:'https://www.hyundaicard.com/docfiles/resources/pc/images/detail/img_design_tpe3.png',
            name: '이클립스',
            calories: '현대카드' ,
          },
          {
            id: 10,
            img:'https://www.hyundaicard.com/img/com/card/img_card_TRE5_marker.png',
            name: '이클립스',
            calories: '현대카드' ,
          },
        ],
      }      
    },
    methods: {
      redirectToLink(link) {
        this.$router.push(link);
       },
       eventLink(link) {
        this.$router.push(link);
       }, 
       redirectToDetails(itemId) {
      console.log("Redirecting to details page for item ID:", itemId);
      this.$router.push({ path: `/details/${itemId}` });
    },
    },
  }
</script>

<style lang="css" scoped>

</style>