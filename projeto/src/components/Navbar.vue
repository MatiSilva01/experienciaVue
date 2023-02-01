<template>
    <nav>
        <router-link to="/">
            <!--logotipo e um elemento global entao vai ser mandado
            atraves do app-->
            <img src="" id="logo">
        </router-link>
        <!-- to para onde ele redireciona-->
        <router-link to="/">Home</router-link> |
        <router-link to="/pedidos">Pedidos</router-link>
    </nav>
</template>
<script>

export default {
    name: "Navbar"

}

</script>
<style scoped>

</style>
