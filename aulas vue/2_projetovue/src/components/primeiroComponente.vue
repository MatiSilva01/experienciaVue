<template>
<div>
    <h1>Ola Vue</h1>
    <p>O meu nome é {{ nome }} e sou {{ profissao }} </p>
<MultiplosEventos />
<ReutilizacaoR />
<!-- se eu pusesse varios botoes ReutilizacaoR ele apenas punha ativado
a esse botao! NAO A todos, mesmo q estejam em paginas diferentes-->
</div>
</template>
<script>
import MultiplosEventos from './MultiplosEventos.vue'
import ReutilizacaoR from './Reutilizacao.vue';
export default ({
    name: 'primeiroComponente',
    components: {
        MultiplosEventos,
        ReutilizacaoR
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
