<template>
  <div
    class="m-auto grid grid-cols-[1fr_1fr] content-center gap-8 items-center mt-12"
  >
    <Order v-for="order in orders.orders" :key="order.id" v-bind:order="order">
    </Order>
  </div>
</template>

<script lang="ts">
import Order from "@/components/OrderComponent.vue";
import { useOrderStore } from "@/stores/orderStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Order,
  },
  setup() {
    const orders = useOrderStore();

    return {
      orders,
    };
  },
  async mounted() {
    this.orders.fetchOrders();
  },
});
</script>
