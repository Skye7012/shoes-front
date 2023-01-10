<template>
  <div class="page">
    <div class="header">
      <HeaderComponent></HeaderComponent>
    </div>
    <OrderList class="main"></OrderList>
    <FooterComponent class="footer"></FooterComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import OrderList from "@/components/OrderList.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  components: {
    HeaderComponent,
    OrderList,
    FooterComponent
  }
});
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
