<template>
  <Header></Header>
</template>

<script>
import Header from "@/components/Header.vue"
  export default {
    components: {
      Header
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
