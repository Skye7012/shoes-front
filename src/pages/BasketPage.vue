<template>
  <div class="page">
    <div>
      <HeaderComponent></HeaderComponent>
    </div>
    <BasketCollection class="basket"></BasketCollection>
    <FooterComponent class="footer"></FooterComponent>
  </div>
</template>

<script lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import BasketCollection from "@/components/BasketCollection.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HeaderComponent,
    BasketCollection,
    FooterComponent,
  },
});
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
