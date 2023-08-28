<template>
  <div class="back-ground-color">
    <v-app class="main-container">
      <navigation-bar/>
      <v-main>
        <router-view/>
      </v-main>
      <v-btn data-aos="fade-bottom" rounded="" class="back-to-top" @click="backToTop">
        <span class="mdi mdi-chevron-double-up icon-lg"></span>
      </v-btn>
      <navigation-foot-bar/>
    </v-app>
  </div>
</template>

<script>
import '@/assets/css/global.css'
import NavigationBar from '@/views/navigation/NavigationBar.vue'
import NavigationFootBar from '@/views/navigation/NavigationFootBar.vue'
export default {
  name: 'App',
  components: {
    NavigationBar,
    NavigationFootBar
  },
  methods: {
    backToTop() {
      const targetSection = document.querySelector('.main-container'); // Use the class selector here
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style>
.back-ground-color {
  background-color: #222224;
}
.main-container {
  max-width: 1500px;
  background-color: #222224;
  margin: auto;  
}
.back-to-top {
  position: fixed;
  bottom: 20px;
  left: auto;
  right: 20px;
  z-index: 1;
}
</style>
