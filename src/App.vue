<template>
  <div class="back-ground-color">
  <v-app class="main-container">
    <v-main>
      <navigation-bar/>
      <router-view/>
    </v-main>
    <navigation-foot-bar/>
  </v-app>
</div>
</template>

<script>
import NavigationBar from '@/views/navigation/NavigationBar.vue'
import NavigationFootBar from '@/views/navigation/NavigationFootBar.vue'
export default {
  name: 'App',
  components: {
    NavigationBar,
    NavigationFootBar
  },

  data: () => ({
    //
  }),
}
</script>

<style>
.back-ground-color{
  background-color: #222224;
}
.main-container{
  max-width: 1500px;
  background-color: #222224;
  margin: auto;  
}
</style>