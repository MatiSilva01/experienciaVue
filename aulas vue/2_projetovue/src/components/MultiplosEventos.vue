<template>
    <div>
        <!--chama mais do que um metodo-->
        <button @click="primeiro($event), segundo($event)">Ativar multiplos eventos</button>
        <p> {{ multiplosEventos }}</p>
    </div>
</template>
<script>
export default {
    name: 'MultiplosEventos',
    data(){
        return {
            multiplosEventos: ""
        }
    }, methods: {
        primeiro(e){
            e
            this.multiplosEventos = "primeiro evento ativado"
        }, 
        segundo(e){
            e
            setTimeout(() => this.multiplosEventos="segundo evento ativado", 500)
        }
    }
}
</script>
<style scoped>
    div {
        margin: 100px;
    }
</style>
