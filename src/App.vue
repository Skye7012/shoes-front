<template>
    <Header class="header"></Header>
    <Catalog></Catalog>
    <Footer style="margin-top: 50px"></Footer>
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
    },
    data() {
      return {
        posts: [
          {id: 1},
          {id: 2},
          {id: 3},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

.header {
  padding: 0 2vw;
}

</style>
