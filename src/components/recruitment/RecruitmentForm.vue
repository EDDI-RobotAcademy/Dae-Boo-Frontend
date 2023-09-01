<template>
    <div>
        <h1 class="recruitment-head" align="center">MOCA</h1>
      <div id="map"></div>
      <h3 class="recruitment-title">Location</h3>
      <p class="recruitment-text">서울특별시 강남구 강남구 테헤란로14길 6 , 2층</p>
      <p class="recruitment-text">6, Teheran-ro 14-gil, Gangnam-gu, Seoul, Republic of Korea</p>
      <p class="recruitment-text2">
        대표 : 김모카<br>
        TEL : 00) 0644-0000 <br>
        E-Mail : moca@maca.co.kr<br>
      </p>
    </div>
  </template>
  
  <script>
import "@/assets/css/recruitment/recruitment.css";

export default {
  data() {
    return {};
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  methods: {
    loadScript() {
  const script = document.createElement("script");
  script.src =
    `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.VUE_APP_KAKAO_MAP_KEY}&autoload=false`;
  script.onload = () => window.kakao.maps.load(this.loadMap);

  document.head.appendChild(script);
},

    loadMap() {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(37.499000, 127.032850),
        level: 3,
      };
      this.map = new window.kakao.maps.Map(container, options);
      this.loadMaker();
    },
    loadMaker() {
      const markerPosition = new window.kakao.maps.LatLng(37.499000, 127.032850);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(this.map);
    },
  },
};
</script>

  
  <style lang="css" scoped>

  </style>
  