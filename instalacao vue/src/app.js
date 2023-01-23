const MyNameApp = {
    //aqui o que vai estar disponivel no html
    data() {
        return {
            name: "",
            //ir buscar o valor
            input_name: ""
        }
    },
    //as funcoes da aplicacao
    methods: {
        submitForm(e) {
            //quando fazem enviar sem por la nenhuma informacao ele nao mete la o nome vazio
            e.preventDefault();
            //definir o nome com o nome definido no input name
            this.name = this.input_name;
        }
    }
}
//cria essa app e monta a onde temos o id app, no caso no index.html
Vue.createApp(MyNameApp).mount("#app")