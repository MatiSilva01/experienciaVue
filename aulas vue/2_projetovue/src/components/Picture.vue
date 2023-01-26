<template>
<!--v-bind é a mesma coisa que por so : -->
    <img :src="avatar" :alt="descricao">
</template>
<!--export default pq eu vou querer utilizar em outros lugares -->

<script>
export default {
    name: 'PictureI',
    data() {
        return {
            avatar: "/img/IMG_8898.JPG",
            decricao: "Maatilde"
        }
    }

}
</script>
