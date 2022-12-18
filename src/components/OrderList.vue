<template>
  <div class="orderList">
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

<style lang="scss" scoped>
@import "@/assets/vars.scss";
@import "@/assets/my.scss";

.orderList {
  margin: auto auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  margin-top: 50px;
}
</style>
