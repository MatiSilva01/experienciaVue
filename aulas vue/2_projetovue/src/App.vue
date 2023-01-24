<template>
<primeiro-componente />
</template>
<!--para ele saber, como no main.js -->
<script>
//vai importar os componentes p estar diponivel
import primeiroComponente from './components/primeiroComponente.vue'
export default {
  name: 'App',
  components: { //os componentes vue que vou utilizar
    primeiroComponente
  }
}
</script>
