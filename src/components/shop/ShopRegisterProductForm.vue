<template>
    <div class="registerContainer">
        <form @submit.prevent="onSubmit" class="product-form">
            <v-table class="productRegisterFormBox">
                <tr class="productRegisterBox">
                    <th>상품 명</th>
                    <td>
                        <input type="text" v-model="productName"/>
                    </td>
                </tr>
                <tr class="productRegisterBox">
                    <th>가격</th>
                    <td>
                        <input type="number" v-model="price"/>
                    </td>
                </tr>
                <tr class="productRegisterBox">
                    <th>상품 소개</th>
                    <td>
                        <textarea cols="35" rows="15" v-model="description"/>
                    </td>
                </tr>
                    <tr class="productRegisterBox">
                        <th>사진</th>
                        <td>
                            <input id="file-selector" ref="file" type="file" @change="handleFileUpload()" >
                            <v-btn @click="uploadAwsS3" color="primary" text>업로드</v-btn><br>
                            <div v-if="image != null">{{ image }}
                                <v-btn v-if="image != null" @click="deleteAwsS3File(image)" style="width: 30px; height: 30px; font-size: small;" color="red" text icon>x</v-btn>
                            </div>
                        </td>
                    </tr>
            </v-table>

            <!-- 오른쪽 컨테이너 -->
            <div style="flex: 1;" class="right-container">
                <img v-if="imgSrc!==''" class="product" :src="dynamicLink(imgSrc)">
            </div>

            <div>
            <v-btn raised type="submit" class="productRegisterBtn" style="color:white">등록</v-btn>
            <v-btn class="productRegisterBackBtn">
                <router-link :to="{path: '/shopMainpage'}" style="text-decoration: none; color:black">
                    돌아가기
                </router-link>
            </v-btn>
        </div>
        </form>
    </div>
</template>

<script>
import '@/assets/css/shop/shopRegisterProduct.css'

import { mapActions } from "vuex";
const ShopModule = 'ShopModule'

import AWS from 'aws-sdk'
import env from "../../../env";
const LINK = process.env.VUE_APP_S3_LINK
const awsBucketName = env.api.S3_Bucket;
const awsBucketRegion = env.api.S3_Region;
const awsPoolId = env.api.S3_PoolId

export default {
    data() {
        return {
            productName: '',
            price: '',
            description: '',
            image: '',
            filePathList: '',
            bucketName: awsBucketName,
            bucketRegion: awsBucketRegion,
            PoolId: awsPoolId,
            s3: null,
            awsFileList: [],
            startAfterAwsS3Bucket: null,
            awsS3NextToken: null,
            path: '',
            imgPath: null,
            file: null,
            imgSrc:'',
            localImg: ''
        }
    },
    methods: {
        ...mapActions(ShopModule, ['requestRegisterProductToSpring']),
        async onSubmit() {
            let formData = new FormData();
            let aboutProduct = {
                productName: this.productName,
                price: this.price,
                description: this.description,
                image: this.localImg
            }
            formData.append(
                "aboutProduct",
                new Blob([JSON.stringify(aboutProduct)], { type: "application/json" })
            )
            try {
            const productId = await this.requestRegisterProductToSpring(aboutProduct);

            await this.$router.push({
                path: `/shopReadproductPage/${productId}`
            })

            if (productId !== null) {
                alert("등록 성공!");
                }
            } catch (error) {
                console.error("등록 중 오류 발생:", error);
            }
        },
        handleFileUpload() {
            this.file = this.$refs.file.files[0]
            console.log('file: ' + this.file.name)
        },
        awsS3Config() {
            AWS.config.update({
                region: this.bucketRegion,
                credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: this.PoolId
                })
            })

            this.s3 = new AWS.S3({
                apiVersion: '2006-03-01',
                params: {
                Bucket: this.bucketName
                }
            })
        },
        uploadAwsS3() {
        this.awsS3Config();
        this.s3.upload({
            Key: this.file.name,
            Body: this.file,
            ACL: 'public-read',
        },
        (err, data) => {
            if (err) {
                console.log(err);
                return alert('업로드 중 문제 발생 (사진 파일에 문제가 있음)', err.message);
            }
            this.localImg = this.file.name;
            console.log("aws: " + this.localImg);
            this.$emit('imageUploaded', data.Location);
            alert('업로드 성공!');
            this.imgSrc=this.file.name

            });
        },
        deleteAwsS3File(key) {
        this.awsS3Config()
        this.s3.deleteObject({
            Key: key
            }, (err) => {
                if (err) {
                return alert('AWS 버킷 데이터 삭제에 문제가 발생했습니다.: ' + err.message)
                }
                alert('AWS 버킷 데이터 삭제가 성공적으로 완료되었습니다.')
                this.localImg = null
            })
        },
        dynamicLink(extraPath) {
            return `${LINK}/${extraPath}`;
        },
        submitForm() {
            this.onSubmit();
        },
    }
}

</script>

<style></style>