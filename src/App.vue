<script>
import { RouterView } from 'vue-router';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';



export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <div class="bg-[#f4f6f8] h-screen w-screen">
    <Header  />
    <RouterView />
    <Footer />
  </div>
</template>
