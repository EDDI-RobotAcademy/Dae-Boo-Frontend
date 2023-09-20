<template>
    <div>
        <form @submit.prevent="onSubmit">
            <v-table>
                <tr>
                    <th>상품 명</th>
                    <td>
                        <input type="text" v-model="productName"/>
                    </td>
                </tr>
                <tr>
                    <th>수량</th>
                    <td>
                        <input type="number" v-model="productPrice" />
                    </td>
                </tr>
                <tr>
                    <th>상품 소개</th>
                    <td>
                        <textarea cols="60" rows="20" v-model="description" />
                    </td>
                </tr>
                <tr>
                    <th>사진</th>
                    <!-- <s3-image-upload @fileSelected="onFileSelected"/> -->
                    <input type="text" v-model="image" />
                </tr>
            </v-table>
            <div>
                <button type="button" @click="submitForm">등록 완료</button>
                <router-link :to="{path: '/shopMainpage'}">
                    돌아가기
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            productName: '',
            productPrice: '',
            description: '',
            image: '',
            filePathList: ''
        }
    },
    methods: {
        onSubmit() {
            const { productName, productPrice, description, image } = this;
            this.$emit("submit", {productName, productPrice, description, image});
        },
        submitForm() {
            // 폼 제출 버튼 클릭 시 onSubmit 메서드 호출
            this.onSubmit();
        },
        // onFileSelected(fileKey) {
        //     this.filePathList = fileKey;
        // },
    }
}

</script>

<style></style>