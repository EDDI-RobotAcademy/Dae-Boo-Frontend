<template>
    <div>
        <div style="display: flex; justify-content: center; align-items: center;">
            <img class="product" :src="dynamicLink(product.image)" v-if="product.image" />
        </div>

        <div>
        <V-table>
            <tr>
                <td>상품 번호</td>
                <td>
                    <input type="text" :value="product.productId" readonly/>
                </td>
            </tr>
            <tr>
                <td>상품 이름</td>
                <td>
                    <input type="text" :value="product.name" readonly/>
                </td>
            </tr>
            <tr>
                <td>가격</td>
                <td>
                    <input type="text" :value="product.price" readonly/>
                </td>
            </tr>
            <tr>
                <td>상품 설명</td>
                <td>
                    <textarea cols="60" rows="20" :value="product.description" readonly/>
                </td>
            </tr>
        </V-table>
        <router-link :to="{path: '/shopMainpage'}">
            돌아가기
        </router-link>
        </div>
    </div>
</template>

<script>
import AOS from "aos";
const LINK = process.env.VUE_APP_S3_LINK;

export default {
    name: "ShopReadProductForm",
    props: {
        product: {
            type: Object,
            required: true,
        }
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

<style></style>