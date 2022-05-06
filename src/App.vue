<template>
  <Header></Header>
  <Catalog></Catalog>
</template>

<script>
import Header from "@/components/Header.vue"
import Catalog from "@/components/Catalog.vue"
  export default {
    components: {
      Header,
      Catalog
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


</style>
