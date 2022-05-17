<template>
    <Header></Header>
    <Catalog class="main"></Catalog>
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

.main {
  max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
}

</style>
