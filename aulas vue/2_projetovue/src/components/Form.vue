<template>
<h2>Meu Formulario </h2>
<!--como no java quando fazemos submit, chama o metodo enviarFormulario
leva o event para nao dar bosta e meter la o preventdefault-->
    <form action="" @submit="enviarFormulario($event)">
        <div>
        <input type="text" :v-model="name">
        </div>
        <div>
        <input type="text" :v-model="email">
        </div>
        <div>
        <Submit />
        </div>
    </form>
    <p> Content </p>
</template>
<script>
import Submit from './form/Submit.vue'

export default {
    name: 'FormF',
    components:{
        Submit
    }, 
    data() {
        return {
            //dados do input, inicialmente a vazio
            name: "",
            email: ""
        }
    },
    methods: {
        enviarFormulario(e) {
            //ignora o evento padrao 
            e.preventDefault();
            //atualiza os valores consoante os que o utilizador pos 
            const name = this.name;
            const email = this.email;

            console.log("Nome " + name + " mail " + email)
        }
    }
}
</script>
<style scoped>
p {
    margin: 150px;
}
</style>