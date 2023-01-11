<template>
  <div
    class="m-auto grid grid-cols-[1fr_1fr] content-center gap-8 items-center mt-12"
  >
    <Order v-for="order in orders.orders" :key="order.id" :order="order">
    </Order>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Order from "@/components/OrderComponent.vue";
import { useOrderStore } from "@/stores/orderStore";

export default defineComponent({
  components: {
    Order
  },
  setup() {
    const orders = useOrderStore();

    return {
      orders
    };
  },
  async mounted() {
    this.orders.fetchOrders();
  }
});
</script>
