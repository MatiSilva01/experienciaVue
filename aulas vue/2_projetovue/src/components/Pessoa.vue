<template>
<h2>Esta e a descricao da pessoa: {{ nome }}</h2>
<!-- quantas vezes eu meter esse info é qtd de vezes que essa info vai ser repetida --->
<!--queremos passar informacao, vai para o props no info, mas nap temos o email, pq e variavel-->
<Info :email="email"/>
<Form />
</template>
    <script>   
    import Info from './Info' 
    import Form from './Form.vue'
    export default{
        name: 'PessoaP',
        components: {
            Info, 
            Form
        },
        data() {
            return {
                nome: 'Matilde',
                email: 'mati@g.cc'
            }
            
        }
    }
    </script>
    
