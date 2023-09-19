<template>
    <div>
        <div>
            <!-- <v-img :src="getImageUrl(book.filePathList)" class="imageCss" style="width: 300px"/> -->
            <v-img src="@/assets/cardImg.jpg" style="max-width: 65%; height: auto;"/>
        </div>
        <div>
        <table>
            <tr>
                <td>상품 번호</td>
                <td>
                    <input type="text" :value="product.productId" readonly/>
                </td>
            </tr>
            <tr>
                <td>상품 이름</td>
                <td>
                    <input type="text" :value="product.productName" readonly/>
                </td>
            </tr>
            <tr>
                <td>가격</td>
                <td>
                    <input type="text" :value="product.productPrice" readonly/>
                </td>
            </tr>
            <tr>
                <td>상품 설명</td>
                <td>
                    <textarea cols="60" rows="20" :value="product.description" readonly/>
                </td>
            </tr>
        </table>
        </div>
    </div>
</template>

<script>
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
            // awsBucketName: process.env.VUE_APP_S3_BUCKET_NAME,
            // awsBucketRegion: process.env.VUE_APP_S3_REGION,
            // awsIdentityPoolId: process.env.VUE_APP_S3_IDENTITY_POOL_ID,
        }
    },
    methods:{
        // S3에서 업로드한 사진 가져오기
        // getImageUrl(filePath){
        //     return `https://${this.awsBucketName}.s3.${this.awsBucketRegion}.amazonaws.com/${filePath}`
        // }
    }
}
</script>

<style></style>