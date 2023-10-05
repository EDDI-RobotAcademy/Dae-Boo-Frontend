<template>
    <div>
        <add-info-register-form v-if="myInfo" :myInfo='myInfo' @submit="onSubmit"/>
    </div>
</template>

<script>
import AddInfoRegisterForm from '@/components/login/AddInfoRegisterForm.vue'
const MyPageModule = 'MyPageModule'
import { mapActions, mapState } from "vuex";

export default {
    data() {
        return {
        }
    },
    props: {
        userId: Number,
    },
    components: {
        AddInfoRegisterForm
    },
    computed: {
        ...mapState(MyPageModule, ['myInfo'])
    },
    created(){
        this.getMyInfoToSpring(this.userId);
    },
    methods: {
        ...mapActions(MyPageModule, ['requestMyInfoModifyToSpring', 'getMyInfoToSpring']),
        async onSubmit(payload) {
            const { nickname, mobile, email, interest1, interest2 } = payload
            const userId = this.userId

            console.log("nickname, mobile, email, interest1, interest2: ", nickname, mobile, email, interest1, interest2);
            console.log("userId: "+ this.userId);

            await this.requestMyInfoModifyToSpring({ nickname, mobile, email, interest1, interest2, userId })
            await this.$router.push({ path: `/` });
            window.location.reload();
        },
    }
}
</script>

<style></style>