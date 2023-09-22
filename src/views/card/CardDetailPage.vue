<template lang="">
    <div>
        <card-detail-form :card="card"/>
    </div>
</template>
<script>

import CardDetailForm from '@/components/card/CardDetailForm.vue';

export default {
    components: {
        CardDetailForm
    },
    data() {
        return {
            card: {}
        }
    },

}
</script>
<style lang="">
    
</style>