import { defineStore } from "pinia";
import { GetOrdersResponseItem, PostOrderRequest } from "@/api/Api";
import { apiClient } from "@/api/apiClient";
import { throwError } from "@/ErrorHandling";

interface OrderType {
  orders: GetOrdersResponseItem[];
  ordersTotalCount: number;
  orderPrice: number;
}

export const useOrderStore = defineStore({
  id: "orders",

  state: (): OrderType => ({
    orders: [],
    ordersTotalCount: 0,
    orderPrice: 0
  }),

  actions: {
    async fetchOrders() {
      try {
        const response = await apiClient.orders.ordersList();

        this.orders = response.data.items ?? [];
        this.ordersTotalCount = response.data.totalCount;
      } catch (e) {
        throwError(e);
      }
    },

     /** Сделать заказ */
    async postOrder(order: PostOrderRequest) {
      try {
        await apiClient.orders.ordersCreate({
          ...order
        });
        alert("Заказ принят");
      } catch (e) {
        throwError(e);
      }
    }
  }
});
