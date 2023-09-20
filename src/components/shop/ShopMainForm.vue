<template>
    <div>
        <tr v-if="!products || (Array.isArray(products) && products.length === 0)">
            <td colspan="4">현재 등록된 상품 목록이 없습니다!</td>
        </tr>
        <v-row v-if="products && products.length > 0">
            <v-col v-for="product in products" :key="product.productId" cols="2">
                <div align="center" >
                    <router-link
                            :to="{
                                name: 'ShopReadProductPage',
                                params: { productId:product.productId.toString() },
                            }">
                    <v-img src="@/assets/cardImg.jpg" style="max-width: 65%; height: auto;"/>
                    </router-link>
                    <!-- <img :src="getImageUrl(product.filePathList)" style="max-width: 100%; margin-top: 10px;"/> -->
                    <div>
                        {{ product.name }}
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            awsBucketName: process.env.VUE_APP_S3_BUCKET_NAME,
            awsBucketRegion: process.env.VUE_APP_S3_REGION,
            awsIdentityPoolId: process.env.VUE_APP_S3_IDENTITY_POOL_ID,
        };
    },
    props: {
        products: {
            type: Array,
        },
    },
    methods: {
        // s3에서 이미지 가져오기
        // getImageUrl(filePath) {
        //     if(filePath != null) {
        //         return `https://${this.awsBucketName}.s3.${this.awsBucketRegion}.amazonaws.com/${filePath}`;
        //     }
        //     else {
        //         return `https://${this.awsBucketName}.s3.${this.awsBucketRegion}.amazonaws.com/${basicFile}`;
        //     }
        // },
    }
}
</script>

<style></style>