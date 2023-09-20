<template>
    <div class="mapBox">
        <h1>카테고리로 장소 검색하기
            <v-btn color="green" @click="searchPlaces">검색</v-btn>
        </h1>
        <div id="map" class="map"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            map: null,
            places: [],
            pagination: {},
            markers: [],
            infowindow: new window.kakao.maps.InfoWindow({ zIndex: 1 })
        };
    },
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.loadMap();
        } else {
            this.loadScript();
        }
        // this.loadScript();
        // this.loadMap();
    },
    methods: {
        loadScript() {
            console.lod("loadScript()");
            const script = document.createElement("script");
            script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=7d8a7c6bd0d9cdb29c1a7b876d32b1c2&libraries=services$autoload=false`;
            // script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=7d8a7c6bd0d9cdb29c1a7b876d32b1c2`;
            script.onload = () => window.kakao.maps.load(this.loadMap);
            document.head.appendChild(script);
        },
        loadMap() {
            console.log("loadMap")
            const container = document.getElementById("map");
            const options = {
                center: new window.kakao.maps.LatLng(37.499000, 127.032850),
                level: 3,
            };
            this.map = new window.kakao.maps.Map(container, options);
            this.searchPlaces();

        },
        searchPlaces() {//카테고리 검색을 요청하는 함수
            const ps = new window.kakao.maps.services.Places();
            const currentMapCoordinate = this.map.getCenter();
            const radius = 10000;
            ps.categorySearch('PO3', this.placesSearchCB, {
                location: currentMapCoordinate,
                radius: radius
            });
        },
        placesSearchCB(data, status, pagination) { // 장소검색이 완료됐을 때 호출되는 콜백함수
            if (status === window.kakao.maps.services.Status.OK) {// 정상적으로 검색이 완료됐으면
                this.places = data;
                this.displayPlaces();// 검색 목록과 마커를 표출합니다
                this.pagination = pagination;
            } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
                alert("검색 결과가 존재하지 않습니다.");
            } else if (status === window.kakao.maps.services.Status.ERROR) {
                alert("검색 결과 중 오류가 발생했습니다.");
            }

            console.log(data);
            console.log(status);
            console.log(pagination);
        },
        displayPlaces() {// 검색 결과 목록과 마커를 표출하는 함수
            const bounds = new window.kakao.maps.LatLngBounds();
            this.removeMarker();// 지도에 표시되고 있는 마커를 제거

            this.places.forEach((place, index) => {
                // 마커를 생성하고 지도에 표시합니다
                const placePosition = new window.kakao.maps.LatLng(place.y, place.x);
                const marker = this.addMarker(placePosition, index);
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                bounds.extend(placePosition);
                this.attachMarkerEvents(marker, place.place_name);
            });
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정
            this.map.setBounds(bounds);
        },
        removeMarker() {
            this.markers.forEach((marker) => marker.setMap(null));
            this.markers = [];
        },
        displayInfowindow(marker, title) {
            const content = `<div style="padding:5px;">${title}</div>`;
            this.infowindow.setContent(content);
            this.infowindow.open(this.map, marker);
        },
        addMarker(position, index) {// 마커를 생성하고 지도 위에 마커를 표시하는 함수
            // 마커 이미지 url, 스프라이트 이미지를 사용
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

            marker.setMap(this.map);// 지도 위에 마커를 표출
            this.markers.push(marker);// 배열에 생성된 마커를 추가
            return marker;
        },

        attachMarkerEvents(marker, title) {
            // 마커와 검색결과 항목에 mouseover 했을때
            // 해당 장소에 인포윈도우에 장소명을 표시
            window.kakao.maps.event.addListener(marker, "mouseover", () => {
                this.displayInfowindow(marker, title);
                console.log("title" + title)
            });
            // mouseout 했을 때는 인포윈도우를 닫음
            window.kakao.maps.event.addListener(marker, "mouseout", () => {
                this.infowindow.close();
            });
            // // click 했을 때는 미니윈도우를 토글
            // window.kakao.maps.event.addListener(marker, "click", () => {
            //     this.changePopState();
            //     this.placeData = { title, place_url };
            // });
        },


    }
};
</script>
<style>
#map {
    width: 100%;
    height: 50%;
    padding-left: 50px;
}

.mapBox {
    margin-bottom: 800px;
    color: white;
}
</style>
  