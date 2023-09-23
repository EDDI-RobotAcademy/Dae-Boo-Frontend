<template>
     <div>
        <v-row dense class="shopMainRow">
            <v-col v-for="product in products" :key="product.productId" cols="3">
                <v-card class="mx-2 shopMainCol" flat>
                    <router-link
                            :to="{
                                name: 'ShopReadProductPage',
                                params: { productId: product.productId.toString() },
                            }">
                        <v-img
                            :src="dynamicLink(product.image)"
                            v-if="product.image"
                            class="product"
                        />
                    </router-link>
                    <div class="shopMainProductName">{{ product.name }}</div>
                    <div class="shopMainProductPrice">{{ product.price }}원</div>
                    <div class="shopMainProcutNewBox">NEW</div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import '@/assets/css/shop/shopMain.css'

import AOS from "aos";
const LINK = process.env.VUE_APP_S3_LINK;

export default {
    data() {
        return {
            link: LINK,
        };
    },
    props: {
        products: {
            type: Array,
        },
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
    }
}
</script>

<style lang="scss" scoped></style>