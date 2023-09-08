<template lang="">
  <div  class="centered-div" style="width:1000px;">
    <v-card  justify-center width="1000px">
      <h2 style="text-align:center">신용카드 등록</h2>
      <div>
        <v-card-text >
          <form @submit.prevent="onSubmit">
            <table >
              <tr style="text-align: center;">
                <td style="font-weight: bold"> 카드 상품</td>
                <td>
                  <v-text-field type="text" class="inputValue" 
                  v-model="cardName" placeholder=""/>
                </td>
              </tr> 
              <tr style="text-align: center;">
                <td style="font-weight: bold"> 카드사</td>

                <td>
                  <v-text-field type="text" class="inputValue" 
                  v-model="cardCompany" placeholder=""/>
                </td>
              </tr> 
              <tr style="text-align: center;">
                <td style="font-weight: bold"> 연회비 </td>

                <td>
                  <v-text-field type="text" class="inputValue" 
                  v-model="cardFee" placeholder=""/>
                </td>
              </tr> 
              <tr style="text-align: center;">
                <td style="font-weight: bold"> 전월 실적 </td>

                <td>
                  <v-text-field type="text" class="inputValue" 
                  v-model="cardCondition" placeholder=""/>
                </td>
              </tr> 
              <tr style="text-align: center;">
                <td style="font-weight: bold"> 혜택 </td>

                <td>
                  <v-text-field type="text" class="inputValue" 
                  v-model="cardBenefit" placeholder=""/>
                </td>
              </tr> 
              <tr><td>이미지</td><td>  
                <input id="file-selector" ref="file" type="file" @change="handleFileUpload()">
                <v-btn @click="uploadAwsS3" color="primary" text>업로드</v-btn><br>
                <div v-if="localImg!=null">{{localImg}}
                  <v-btn v-if="localImg!=null" @click="deleteAwsS3File(localImg)" color="red" text icon>x</v-btn>
                </div>
              </td>
            </tr>
            <p>{{path}}</p>
          </table>
          <v-btn raised type="submit">등록</v-btn>
          <v-btn @click="golist">취소</v-btn>
        </form>
      </v-card-text>
    </div>
  </v-card>
</div>
</template>
<script>
import AWS from 'aws-sdk'
import env from "../../../env";
import { mapActions } from 'vuex';
const awsBucketName = env.api.S3_Bucket;
const awsBucketRegion = env.api.S3_Region;
const awsPoolId = env.api.S3_PoolId
const ManagementModule = 'ManagementModule';
export default {
data() {
return {
cardRegister: true,
cardBenefit: '',
cardCompany: '',
cardName: '',
cardCondition: '',
cardFee: '',
bucketName: awsBucketName,
bucketRegion: awsBucketRegion,
PoolId: awsPoolId,
s3: null,
awsFileList: [],
startAfterAwsS3Bucket: null,
awsS3NextToken: null,
localImg: '',
path: '',
imgPath: null,
file: null,
};
},
methods: {
...mapActions(ManagementModule,['requestCardRegisterToSpring','requestCardListToSpring']),
async onSubmit() {
let formData = new FormData()
let aboutCard = {
name: this.cardName,
company: this.cardCompany,
fee: this.cardFee,
cardCondition: this.cardCondition,
benefit: this.cardBenefit,
cardImage: this.localImg,
}
formData.append(
"aboutCard",
new Blob([JSON.stringify(aboutCard)], { type: "application/json" })
)

try {
const card = await this.requestCardRegisterToSpring(aboutCard);
if (card !== null) {
alert("등록 성공!");
this.golist();
this.requestCardListToSpring();
}
} catch (error) {
console.error("등록 중 오류 발생:", error);
// 오류 처리 추가
}
},
golist() {
this.$emit('cancel');
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

},
mounted() {
}
};
</script>
<style lang="">

</style>