<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <Header></Header>
    </div>
    <div class="hero-body">
      <Catalog></Catalog>
    </div>
    <div class="hero-foot">
      <footer class="footer">
        <nav class="level">
            <p class="level-item title is-2 has-text-info">Shoes</p>
            <p class="level-item has-text-centered">
              Тел<br>
              8 987 689 54 71</p>
            <p class="level-item has-text-centered">
              Адрес<br>
              г. Москва ул. Пушкина д. Колотушкина
            </p>
        </nav>
      </footer>
    </div>
  </section>
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
