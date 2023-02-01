<template>
    <div>
        <p>Comp mensagem</p>
    </div>
    <div>
        <form action="" id="burger-form">
            <div class="input-container">
                <label for="nome">Nome do cliente:</label>
                <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome">
            </div>
            <div class="input-container">
                <label for="pao">Escolha o pão:</label>
                <select name="pao" id="pao" v-model="pao">
                    <option value="">Selecione o seu pão</option>
                    <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
                         {{ pao.tipo }}
                    </option>
                </select>
             </div>
             <div class="input-container">
                <label for="carne">Escolha a sua carne:</label>
                <select name="carne" id="carne" v-model="carne">
                    <option value="">Selecione a sua carne</option>
                    <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
                         {{ carne.tipo }}
                    </option>
                </select>
             </div>
             <div id="checkbox-container" class="input-container">
                <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
                <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
                    <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
                    <span> {{ opcional.tipo }}</span>
                </div>
             </div>
             <div class="input-container">
                <input type="submit" class="submit-btn" value="Finalizar pedido">
             </div>
        </form>
    </div>
</template>
<script>
export default {
    name: "BurgerForm", 
    data() {
        return {
            /*os q vem do servidor */
            paes: null,
            carnes: null,
            opcionaisdata: null,
            /*os q sao enviados*/
            nome: null,
            pao: null,
            carne: null,
            opcionais: [],
            status: "Solicitado",
            msg: null

        }
    },
    methods: {
       async getIngredientes() {
        //da acesso a api

        const req = await fetch('http://localhost:3000/ingredientes');
        const data = await req.json();
        /*preenche os dados q a cima estao a null com os valores
        que vieram do servidor */
        this.paes = data.paes;
        this.carnes = data.carnes;
        this.opcionaisdata = data.opcionaisdata;
        console.log(data)
       } 
    },
    mounted() {
        this.getIngredientes()
    }

}
</script>
<style scoped>
    /* e um id */
    #burger-form {
        max-width: 400px;
        margin: 0 auto;
    }

    /* e uma classe */
    .input-container {
        display: flex;
        /*para a label ficar numa linha e o unput noutra meto isso */
        flex-direction: column;
        /*para separar as categorias de input*/
        margin-bottom: 20px;

    }

    label {
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        /*faz a risquinha amarela antes*/
        border-left: 4px solid #FCBA03;
    }

    input, select {
        padding: 5px 10px;
        widows: 300px;
    }

    #opcionais-container{
        /* quero q a label dos selecionar esteja ao lado da palavra*/
        flex-direction: row;
        flex-wrap: wrap;
    }

    #opcionais-title {
        width: 100%;
    }

    .checkbox-container {
        display: flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px;

    }

    .checkbox-container span,
    .checkbox-container input {
        width: auto;
    }

    .checkbox-container span{
        margin-left: 6px;
        font-weight: bold;
    }

    .submit-btn {
        background-color: #222 ;
        color: #FCBA03;
        font-weight: bold;
        border: 2px solid #222;
        /*para aparecer a mao do rato ao passar em cima*/
        cursor: pointer;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        transition: 0.5s;
    }

    .submit-btn:hover{
        background-color: transparent;
        color: #222;
    }

</style>