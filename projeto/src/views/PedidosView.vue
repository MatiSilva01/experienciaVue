<template>
  <div class="main-container">
    <h1>Gerenciar pedidos:</h1>
    <Dashboard />
  </div>
</template>
<script>
//vai uma pasta p tras no ../
import Dashboard from '../components/Dashboard.vue';
export default {
  name: "Pedidos",
  components: {
    Dashboard
  }
}
</script>