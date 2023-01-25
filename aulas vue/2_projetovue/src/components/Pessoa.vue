<template>
<h2>Esta e a descricao da pessoa: {{ nome }}</h2>
<!-- quantas vezes eu meter esse info é qtd de vezes que essa info vai ser repetida --->
<Info />
<Form />
</template>>
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
                nome: 'Matilde'
            }
            
        }
    }
    </script>
    
