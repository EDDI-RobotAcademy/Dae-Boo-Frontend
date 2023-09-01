<template>
    <div>
        <v-carousel cycle hide-delimiters show-arrows="hover" class="mx-auto">
            <v-carousel-item
                src="https://support.catchfashion.com/hc/article_attachments/360102149993/201229_hyundai_Mainbanner_web.jpg"
                cover @click="eventLink('/event/1')" />

            <v-carousel-item
                src="https://support.catchfashion.com/hc/article_attachments/4402717938583/210601_hyundaimpoint_Mainbanner_web.jpg"
                cover @click="eventLink('/event/2')" />

            <v-carousel-item
                src="https://support.catchfashion.com/hc/article_attachments/360098761074/201120_hyundaicard_Mainbanner_web.jpg"
                cover @click="eventLink('/event/3')" />
        </v-carousel>
    </div>
    <div class="container">
        <div class="section">
            asdfasdf
        </div>
        <div class="divider"></div>
        <div class="section">
            aSDFASDF
        </div>
        <div class="divider"></div>
        <div class="section">
            ASDFASDF
        </div>
    </div>
</template>
<script>
export default {

    methods: {
        eventLink(link) {
            this.$router.push(link);
        },
    },

}
</script>
<style>
.container {
    color: #ffffff;
    display: flex;
}

.section {
    flex: 1;
    padding: 16px;
}

.divider {
    width: 2px;
    background-color: #ccc;
    margin: 0px 15%;
}
</style>