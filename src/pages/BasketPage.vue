<template>
    <div class="page">
      <div>
        <Header></Header>
      </div>
      <Basket class="basket"></Basket>
      <Footer class="footer"></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Basket from "@/components/Basket.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
    Header,
    Basket,
    Footer
    }
  }
</script>

<style lang="scss" scoped>

.page {
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.basket {
  height: 100%;
}

</style>
