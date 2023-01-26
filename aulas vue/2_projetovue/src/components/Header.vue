<template>
<ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Projeto</a></li>
    <li><a href="#">Contacto</a></li>
</ul>
</template>
<script>
export default({
    name: 'HeaderH'
})
</script>
<!--para detereminar q o estilo e so p este componente meto scoped -->
<style scoped>
ul {
    list-style: none;
    display: flex;
    background-color: cadetblue;
}
li {
    margin-right: 10px;
}
a {
    color: #DDD;
    text-decoration: none;
    transition: .5s;
}
a:hover {
    color: aqua;
}
 
</style>
