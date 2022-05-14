<template>
    <Header></Header>
    <Catalog></Catalog>
    <Footer></Footer>
</template>

<script>
import Catalog from "@/components/Catalog.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
    Catalog,
    Header,
    Footer
    }
  }
</script>

<style lang="scss" scoped>

</style>
