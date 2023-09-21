<template>
    <div>
        <h1 class="mapShop-head" align="center">MOCA</h1>
        <div id="mapShop" class="mapShop"></div>
        <h3 class="mapShop-title">Category</h3>
        <p class="mapShop-text">category1</p>
        <p class="mapShop-text">category2</p>
        <p class="mapShop-text2">
            .<br>
            .<br>
            .<br>
        </p>
    </div>
</template>
  
<script>
import "@/assets/css/shopSearch/shopSearch.css";

export default {
    data() {
        return {
            placesData: [],
            markers: [],
            // infowindow: new window.kakao.maps.InfoWindow
        };
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
                `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.VUE_APP_KAKAO_MAP_KEY}&autoload=false&libraries=services`;
            script.onload = () => window.kakao.maps.load(this.loadMap);

            document.head.appendChild(script);
        },

        loadMap() {
            const container = document.getElementById("mapShop");
            const options = {
                center: new window.kakao.maps.LatLng(37.499000, 127.032850),
                level: 5,
            };
            this.mapShop = new window.kakao.maps.Map(container, options);
            this.loadMaker();
        },
        loadMaker() {
            const markerPosition = new window.kakao.maps.LatLng(37.499000, 127.032850);
            const marker = new window.kakao.maps.Marker({
                position: markerPosition,
            });
            marker.setMap(this.mapShop);
            this.searchPlaces();
        },
        searchPlaces() {//카테고리 검색을 요청하는 함수
            const ps = new window.kakao.maps.services.Places();
            // console.log(ps)
            const currentMapCoordinate = this.mapShop.getCenter();
            const radius = 1000;
            ps.categorySearch('PO3', this.placesSearchCB, {
                location: currentMapCoordinate,
                radius: radius
            });
        },
        placesSearchCB(data, status, pagination) {
            this.placesData = data;
            console.log("placesData: " + this.placesData)
            console.log("status: " + status)
            console.log("pagination: " + pagination)
            this.displayPlaces();
        },
        displayPlaces() {
            console.log("displayPlaces()")
            this.placesData.forEach((place, index) => {
                // 마커를 생성하고 지도에 표시합니다
                const placePosition = new window.kakao.maps.LatLng(place.y, place.x);
                // const marker =
                this.addMarker(placePosition, index);
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                // bounds.extend(placePosition);
                // this.attachMarkerEvents(marker, place.place_name);
            });
        },
        addMarker(position, index) {
            const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";
            const imageSize = new window.kakao.maps.Size(36, 37);// 마커 이미지의 크기
            const imgOptions = {
                spriteSize: new window.kakao.maps.Size(36, 691),// 스프라이트 이미지의 크기
                spriteOrigin: new window.kakao.maps.Point(0, index * 46 + 10),// 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
                offset: new window.kakao.maps.Point(13, 37),// 마커 좌표에 일치시킬 이미지 내에서의 좌표
            };
            const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);
            const marker = new window.kakao.maps.Marker({
                position,// 마커의 위치
                image: markerImage,
            });
            marker.setMap(this.mapShop);// 지도 위에 마커를 표출
            this.markers.push(marker);// 배열에 생성된 마커를 추가
            return marker;
        },

    },
};
</script>

  
<style lang="css" scoped></style>
  