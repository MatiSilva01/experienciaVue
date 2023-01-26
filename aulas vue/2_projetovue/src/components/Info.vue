<template>
<div>
    <!--um if, so mostra esse paragrafo e a variavel esta trabalhando for = true-->
    <p v-if="esta_trabalhando">Estou trabalhando no momento </p>
    <p v-else>Esta desempregado</p>
        <!--o else tem de estar em baixo do if -->
<p> Utilizo as seguintes tecnologias p beackend: </p>
<!--um for para por as tecnologias -->
<!-- metemos o index p servir de ID e ser unico -->
<ul>
    <!-- metemos o for no elemento que vai ser repetido -->
    <!--fizemos assim pq e um array de strings -->
    <li v-for="(tec, index) in backend" v-bind:key="index">{{tec}}</li>
</ul>
<p>Utilizo as seguintes tecnologias para frontend</p>
<ul>
    <!-- metemos o for no elemento que vai ser repetido -->
    <!-- fazemos assim pq e um array de objetos linguagem é o nome do valor definido em  baixo -->
    <!--mesma coisa para o id, definido em vaixo-->
    <li v-for="lang in frontend" :key="lang.id">{{lang.linguagem}}</li>
</ul>
<div>
    <!-- equivalente ao onclick, quando clico no botao ele mostra o email ao chamar o metodo showEmail-->
<button @click="showEmail"> {{textoBotao}} </button>
</div>
<!--se true mostra email, so mostra se true, e mais simples-->
<p v-show="mostrar_email">Mande uma mensagem para {{email}}</p>
<!--o que esta la dentro das aspas é interpretado como javascript -->
<p v-if="4 > 2">Teste</p>
<!--para por o link em vue preciso do v-bind: antes pq e um dado dinamico -->
<!-- existe uma sintaxe resumida p o v-bind que e por so : como se pode ver no Picture.vue -->
<p class="teste">Para ir ao meu portfolio clique <a v-bind:href="meuLink"> aqui </a></p>
<PictureI />
</div>

</template>
<script>
import PictureI from './Picture.vue'
export default {
    name: 'InfoI',
    components: {
        PictureI
    },
    //o que ele exporta de dados
    data() {
        return {
            esta_trabalhando: false,
            mostrar_email: false,
            email: 'mati@g.c',
            meuLink: 'https://google.com',
            textoBotao:'Mostrar e-mail',
            //aqui fazemos tudo como string
            backend: ['Java', 'Python', 'SQL', 'JavaScript'],
            //aqui fazemos como objetos em vez de string
            frontend: [
                {id: 1, linguagem: 'HTML'},
                {id: 2, linguagem: 'CSS'},
                {id: 3, linguagem: 'Vue'}
            ]
        }
    },
    methods: {
        //o metodo chamado no click do botao
        showEmail(){
            //ou seja, ele faz o contrario do estado em que esta
            this.mostrar_email = !this.mostrar_email
            if(!this.mostrar_email){
                this.textoBotao = 'Mostar email'
            }else{
                this.textoBotao = 'Esconder email'
            }
        }
    }
}
</script>