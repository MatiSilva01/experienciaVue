<!--inicializacao do aplicativo, presente em todas as views
entao meto aqui os elementos q se repetem-->
<template>
  <!--significa que a app vai utilizar o navbar-->
  <!-- na pagina de navbar nos dizemos q ela recebe o logo e o alt entao mandamos aqui-->
  <Navbar :logo="logo_src" :alt="app_name" />
  <!--vai buscar a view especifica-->
  <router-view/>
  <Footer />
</template>
<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  //os componentes que a app vai ter
  components: {
    Navbar,
    Footer
  },
  data(){
    return {
      logo_src: "/img/logo.png",
      app_name: "Make your burguer"

    }

  }
  
}
</script>


<style>
/* para todos os q nao scoped */
*{
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
/*para classes*/
.main-container {
  margin: 50px;
  min-height: 250px;
}
h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}

</style>
