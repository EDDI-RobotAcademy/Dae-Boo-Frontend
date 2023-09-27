<template lang="">
    <div>
        <card-detail-form :card="card"/>
    </div>
</template>
<script>

import CardDetailForm from '@/components/card/CardDetailForm.vue';
import { mapActions, mapState } from "vuex"
const CardModule = "CardModule"

export default {
    components: {
        CardDetailForm
    },
    props: {
        cardId: {
            type: String,
            required: true
        }
    },
    mounted() {
        this.cardInfoLoading()
    },
    methods: {
        ...mapActions(CardModule, ['requestCardDetail']),
        cardInfoLoading() {
            this.requestCardDetail(this.cardId);
        },
    },
    computed: {
        ...mapState(CardModule, ['card']),
    }

}
</script>
<style lang="">
    
</style>