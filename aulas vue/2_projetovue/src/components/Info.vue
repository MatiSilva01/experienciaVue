<template>
<div>
    <!--um if, so mostra esse paragrafo e a variavel esta trabalhando for = true-->
    <p v-if="esta_trabalhando">Estou trabalhando no momento </p>
    <p v-else>Esta desempregado</p>
        <!--o else tem de estar em baixo do if -->
<p> Utilizo as seguintes tecnologias </p>
<ul>
<li>JavaScript</li>
<li>Python</li>
<li>Java</li>
<li>SQL</li>
</ul>
<!--se true mostra email, so mostra se true, e mais simples-->
<p v-show="mostrar_email">Mande uma mensagem para {{email}}</p>
<!--o que esta la dentro das aspas é interpretado como javascript -->
<p v-if="4 > 2">Teste</p>
</div>

</template>
<script>
export default {
    name: 'InfoI',
    data() {
        return {
            esta_trabalhando: false,
            mostrar_email: true,
            email: 'mati@g.c'
        }
    }
}
</script>