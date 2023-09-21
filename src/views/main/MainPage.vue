<template>
  <div>
    <main-form :cards="cards"/>
  </div>
</template>

<script>
import MainForm from '@/components/main/MainForm.vue'
import { mapState,mapActions } from 'vuex'
const CardModule = 'CardModule'

export default {
  components: {
    MainForm
  },
  computed: { 
    ...mapState(CardModule, ['cards'])
  },
  mounted() {
    this.bestCardListToSpring()
  },
  methods: {
    ...mapActions(CardModule, ['bestCardListToSpring']),    
  },

}
</script>

<style lang="scss" scoped></style>