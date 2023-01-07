<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useBasketStore } from "./stores/basketStore";

export default defineComponent({
  setup() {
    const basket = useBasketStore();

    return {
      basket,
    };
  },
  mounted() {
    this.basket.fetchBasketItems();
  },
});
</script>

<style lang="scss" scoped></style>
