<template>
    <h1>Meu nome é {{ nome }} </h1>
</template>
<script>

export default ({
    name: 'LifeCycle',
    data(){
        return{
            //pq queremos que seja algo dinamico
            //qaundo abrimos define o nome como ainda nao sei
            nome: 'Ainda nao sei'
        }
    },
    created(){
        //Chamado depois que a instância concluiu o processamento de todas as opções relacionadas ao estado.
        //quando e criado faz isso, define o nome Matilde
        //settimeout aconece depois do mounted, no caso 1seg depois
        setTimeout(() => {
        //passado 1 seg muda o nome para Matilde
        this.nome = 'Matilde'
        }, 1000);
    },
    //Chamado depois que o componente foi montado
    mounted(){
        setTimeout(() => {
        //passado 3 seg muda o nome para Matilde
        this.nome = 'Pedro'
        }, 3000);
    }
})
</script>
