<template>
    <div id="main-banner">
        <h1>Constrói o teu hamburguer</h1>

    </div>
    
</template>
<script>
export default {
    name: "Banner"
}
</script>
<style scoped>
#main-banner {
    background-image: url('C:\Users\Matilde Silva\Desktop\experiencia vue\experienciaVue\projeto\public\img\burger.jpg') ; 
    background-position: 0 -250px ;
    background-size: cover;
    height: 900px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
#main-banner h1 {
    color: white;
    text-align: center;
    font-size: 60px;
    background-color: #222;
    padding: 20px 40px;

}

</style>