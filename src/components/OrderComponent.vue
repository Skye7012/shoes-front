<template>
  <BoxComponent
    class="overflow-y-auto overflow-x-hidden h-[60vh] flex flex-col w-[400px]"
  >
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
  </BoxComponent>
</template>

<script lang="ts">
import { GetOrdersResponseItem } from "@/api/Api";
import OrderItem from "@/components/OrderItem.vue";
import { useOrderStore } from "@/stores/orderStore";
import { PropType, defineComponent } from "vue";
import BoxComponent from "./UI/BoxComponent.vue";

export default defineComponent({
  components: {
    OrderItem,
    BoxComponent,
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

<style scoped>
.textBlock {
  @apply flex justify-between my-[0.1rem] mx-2;
}
</style>
