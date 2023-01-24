<template>
<div>
    <h1>Ola Vue</h1>
    <p>O meu nome é {{ nome }} e sou {{ profissao }} </p>
</div>
</template>
<script>
export default ({
    name: 'primeiroComponente',
    data() {
         return {
            //o retorno dos dados e podem ser usados dentro do componente
            nome: "Matilde",
            profissao: "programadora"
         }
    }
})
</script>
