<template>
    <div>
        <button @click="ativar">Clique aqui</button>
        <span v-show="ativou">Ativado</span>
    </div>
</template>
<script>

export default({
    name: 'ReutilizacaoR',
    data() {
        return {
            ativou: false
        }
    },
    methods: {
        ativar() {
            //mete o contrario do q ta
            this.ativou = !this.ativou
        }
    }
})
</script>
