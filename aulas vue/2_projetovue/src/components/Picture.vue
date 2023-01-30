<template>
<!--v-bind é a mesma coisa que por so : -->
    <img :src="avatar" :alt="descricao">
    <!--dentro das "" é o nome de um metodo-->
    <MudarImagem @mudar-imagem="mudarImagemM"/>
</template>
<!--export default pq eu vou querer utilizar em outros lugares -->

<script>
import MudarImagem from './MudarImagem.vue'
export default {
    name: 'PictureI',
    components: {
        MudarImagem
    },
    data() {
        return {
            avatar: "/img/IMG_8898.JPG",
            decricao: "Maatilde"
        }
    },
    methods: {
        mudarImagemM(){
            console.log('oioi')
            this.avatar = "/img/User_icon_2.svg.png"

        }
    }

}
</script>
