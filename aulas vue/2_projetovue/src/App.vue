<template>
<div>
  <p> Estamos a fazer um {{ testando }} </p>
<primeiro-componente />
<!-- os componentes criados -->
<LifeCycle />
<Pessoa />
</div>
</template>
<!--para ele saber, como no main.js -->
<script>
//vai importar os componentes p estar diponivel
import primeiroComponente from './components/primeiroComponente.vue'
import LifeCycle from './components/LifeCycle.vue'
import Pessoa from './components/Pessoa.vue'
export default {
  name: 'App',
  components: { //os componentes vue que vou utilizar
    primeiroComponente,
    LifeCycle, 
    Pessoa
  },
  data() {
    return {
      testando: "teste"
    }
  }
}
</script>
