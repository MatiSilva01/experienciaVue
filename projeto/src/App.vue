<!--inicializacao do aplicativo, presente em todas as views
entao meto aqui os elementos q se repetem-->
<template>
  <!--significa que a app vai utilizar o navbar-->
  <Navbar />
  <Footer />
  
  <!--vai buscar a view especifica-->
  <router-view/>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  //os componentes que a app vai ter
  components: {
    Navbar,
    Footer
  }
  
}
</script>


<style>

</style>
