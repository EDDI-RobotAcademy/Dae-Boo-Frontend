<template>
    <div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
const LogInModule = 'LogInModule'

export default {
    data() {
        return {
            codes: "",
        }
    },
    created() {
        this.create();
    },
    methods: {
        create() {
            this.codes = this.$route.query.code;
            console.log("codes : " + this.codes)

            this.getToken();
            this.$router.push("/")
        },
        async getToken() {
            await this.getKakaoTokenToSpring(this.codes)
        },
        ...mapActions(LogInModule, ['getKakaoTokenToSpring'])
    },
}
</script>

<style lang="">
    
</style>