<template>
    <div class="page">
      <Header></Header>
      <Order class="order"></Order>
      <Footer class="footer"></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Order from "@/components/Order.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
    Header,
    Order,
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

.order {
  height: 100%;
}

</style>
