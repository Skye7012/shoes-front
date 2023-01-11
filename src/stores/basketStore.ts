import { defineStore } from "pinia";
import { GetShoesResponseItem } from "@/api/Api";
import { apiClient } from "@/api/apiClient";
import { IBasketStoreItem, getBasket, setBasket } from "@/envHelper";

interface BasketType {
  basketItems: GetShoesResponseItem[];
  basketTotalCount: number;
  basketPrice: number;
}

export const useBasketStore = defineStore({
  id: "baskets",

  state: (): BasketType => ({
    basketItems: [],
    basketTotalCount: 0,
    basketPrice: 0
  }),

  actions: {
    addShoe(basketStoreItem: IBasketStoreItem) {
      const basket = getBasket() ?? [];

      if (!basket.includes(basketStoreItem)) {
        basket.push(basketStoreItem);
        setBasket(basket);
        this.basketTotalCount = basket.length;
      }
    },

    removeShoe(id: number) {
      let basket = getBasket();

      if (!basket) throw new Error("Basket не определен");

      basket = basket.filter((x) => x.id !== id);
      setBasket(basket);
      this.basketTotalCount = basket.length;
    },

    removeBasketItem(id: number) {
      const basketItem = this.basketItems.find((x) => x.id === id)?.price;

      if (!basketItem) throw new Error(`Обуви с id ${id} не существует`);

      this.basketPrice -= basketItem;
      this.basketItems = this.basketItems.filter((x) => x.id !== id);
      this.basketTotalCount = this.basketItems.length;
    },

    async fetchBasketItems() {
      try {
        const ids = getBasket()?.map((x) => x.id);

        if (!ids) return;

        const response = await apiClient.shoes.getByIdsList({ ids });

        this.basketItems = response.data.items ?? [];
        this.basketTotalCount = response.data.totalCount;
        this.basketPrice = this.basketItems
          .map((x) => x.price)
          .reduce((a, b) => a + b, 0);
      } catch (e) {
        alert(e);
      }
    },

    getBasketCount() {
      const basket = getBasket() ?? [];
      this.basketTotalCount = basket.length;
    }
  },

  getters: {
    isInBasket: () => (id: number) => {
      const basket = getBasket();

      if (!basket) return false;

      return basket.map((x) => x.id).includes(id);
    },
    getSize: () => (id: number) => {
      const basket = getBasket();
      const size = basket?.find((x) => x.id === id)?.size;

      if (!size) throw new Error("Не удалось получить размер обуви");

      return size;
    }
  }
});
