const MyNameApp = {
    //aqui o que vai estar disponivel no html
    data() {
        return {
            name: "Matilde",
            age: 21
        }
    }
}
//cria essa app e monta a onde temos o id app, no caso no index.html
Vue.createApp(MyNameApp).mount("#app")