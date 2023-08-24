<template>
  <div>
    <div>
      <v-carousel cycle hide-delimiters show-arrows="hover">
        <v-carousel-item
        src="https://support.catchfashion.com/hc/article_attachments/360102149993/201229_hyundai_Mainbanner_web.jpg"
        cover
        ></v-carousel-item>
        
        <v-carousel-item
        src="https://support.catchfashion.com/hc/article_attachments/4402717938583/210601_hyundaimpoint_Mainbanner_web.jpg"
        cover
        ></v-carousel-item>
        
        <v-carousel-item
        src="https://support.catchfashion.com/hc/article_attachments/360098761074/201120_hyundaicard_Mainbanner_web.jpg"
        cover
        ></v-carousel-item>
      </v-carousel>
    </div>
    <div>
      
      <div class="card-check">
        <h2>Everyone's card</h2>
      </div>
    </div>
    <div >
      <h2>실시간 인기 My Card</h2>
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
            > 
            <td>{{ item.id }}</td>
            <td><img :src="item.img" alt="Item Image"  style="width: 40px; height: 6vh; margin-top: 5px;"></td>
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </div>
</div>
</template>

<script>
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
        card: [

        ],
      }
    },
  }
</script>

<style lang="css" scoped>
.table-size{
  width: 40%;
}
h2{
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: white;
}
.card-check{
  position: absolute;
  right: 12rem;
  color: white;
  z-index: 1;
}
</style>