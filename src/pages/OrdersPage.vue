<template>
    <div class="page">
     <div class="header">
        <Header></Header>
      </div>
      <OrderList class="main"></OrderList>
      <Footer class="footer"></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import OrderList from "@/components/OrderList.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
    Header,
    OrderList,
    Footer
    }
  }
</script>

<style lang="scss" scoped>

.page {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.main {
  height: 100%;
}

</style>
