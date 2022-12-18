<template>
  <div class="order box">
    <div class="textBlock">
      <span>Дата:</span>
      <span>{{ getDate() }}</span>
    </div>
    <div class="textBlock">
      <span>Сумма: {{ order.sum }} ₽</span>
      <span>Количество: {{ order.count }}</span>
    </div>
    <div class="textBlock">
      <span>Адрес: </span>
      <span>{{ order.address }}</span>
    </div>

    <OrderItem
      v-for="orderItem in order.orderItems"
      :key="orderItem.id"
      v-bind:orderItem="orderItem"
    >
    </OrderItem>
  </div>
</template>

<script lang="ts">
import { GetOrdersResponseItem } from "@/api/Api";
import OrderItem from "@/components/OrderItem.vue";
import { useOrderStore } from "@/stores/orderStore";
import { PropType, defineComponent } from "vue";

export default defineComponent({
  components: {
    OrderItem,
  },
  data() {
    return {
      orderItems: [],
    };
  },
  setup() {
    const orders = useOrderStore();

    return {
      orders,
    };
  },
  methods: {
    getDate() {
      const orderDate = new Date(Date.parse(this.order.orderDate));
      return (
        orderDate.getFullYear() +
        " / " +
        (orderDate.getMonth() + 1) +
        " / " +
        orderDate.getDate()
      );
    },
  },
  props: {
    order: {
      type: Object as PropType<GetOrdersResponseItem>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/vars.scss";
@import "@/assets/my.scss";

.order {
  overflow-y: auto;
  height: 60vh;
  display: grid;
  grid-auto-rows: min-content;
  max-width: 350px;
}

.price {
  color: $danger;
}

.textBlock {
  display: flex;
  justify-content: space-between;
  margin: 0.1rem 0.5rem;
}
</style>
