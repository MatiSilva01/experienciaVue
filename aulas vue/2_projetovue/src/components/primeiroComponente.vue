<template>
<div>
    <h1>Ola Vue</h1>
    <p>O meu nome é {{ nome }} e sou {{ profissao }} </p>
<MultiplosEventos />
</div>
</template>
<script>
import MultiplosEventos from './MultiplosEventos.vue'
export default ({
    name: 'primeiroComponente',
    components: {
        MultiplosEventos
    },
    data() {
         return {
            //o retorno dos dados e podem ser usados dentro do componente
            nome: "Matilde",
            profissao: "programadora"
         }
    }
})
</script>
