<template>
  <div class="m-auto flex justify-center items-center mt-12">
    <BoxComponent
      class="overflow-y-auto h-[60vh] grid auto-rows-[140px] gap-y-3 min-h-[480px]"
    >
      <BasketItem
        v-for="basketItem in basket.basketItems"
        :key="basketItem.id"
        v-bind:basketItem="basketItem"
      >
      </BasketItem>
    </BoxComponent>
    <BoxComponent
      class="flex flex-col items-center min-w-[250px] ml-12 h-[60vh] text-center"
    >
      <p>Товаров ({{ basket.basketTotalCount }})</p>
      <p>
        Общая стоимость
        <span class="text-danger">{{ basket.basketPrice }} ₽</span>
      </p>

      <div class="my-5 mx-0">
        <InputComponent
          v-model="address"
          class="text-center !w-[80%]"
          v-bind:class="{
            'border-danger': !address,
            'border-info': !!address,
          }"
          placeholder="Адрес"
          type="text"
        />

        <ButtonComponent
          @click="buy()"
          v-bind:class="{
            'bg-light': !address,
            'bg-info text-white': !!address,
          }"
          :disabled="!address"
          class="m-[2vh_0] w-[80%]"
        >
          Оформить
        </ButtonComponent>
      </div>

      <ButtonComponent @click="clearBasket" class="m-p[2vh_0] w-[80%] mt-auto">
        Очистить корзину
      </ButtonComponent>
    </BoxComponent>
  </div>
</template>

<script lang="ts">
import BasketItem from "@/components/BasketItem.vue";
import { removeBasket } from "@/envHelper";
import { useBasketStore } from "@/stores/basketStore";
import { useOrderStore } from "@/stores/orderStore";
import { useUserStore } from "@/stores/userStore";
import { defineComponent } from "vue";
import ButtonComponent from "./UI/ButtonComponent.vue";
import InputComponent from "./UI/InputComponent.vue";
import BoxComponent from "./UI/BoxComponent.vue";

export default defineComponent({
  components: {
    BasketItem,
    ButtonComponent,
    InputComponent,
    BoxComponent,
  },
  data() {
    return {
      address: null as string | null,
    };
  },
  setup() {
    const orders = useOrderStore();
    const user = useUserStore();
    const basket = useBasketStore();

    return {
      orders,
      user,
      basket,
    };
  },
  methods: {
    buy() {
      if (!this.user.isAuth) {
        this.$router.push("/login");
        return;
      }

      if (!this.address) throw new Error("Должен быть указан адрес!");

      if (this.basket.basketTotalCount < 1) {
        alert("Корзина пуста");
        return;
      }

      var orderItems = this.basket.basketItems.map((x) => ({
        shoeId: x.id,
        ruSize: this.basket.getSize(x.id),
      }));

      var order = {
        address: this.address,
        orderItems: orderItems,
      };

      this.orders.postOrder(order);

      this.clearBasket();
      this.$router.push("/");
    },
    clearBasket() {
      removeBasket();
      this.address = null;
      this.basket.basketItems = [];
      this.basket.basketPrice = 0;
      this.basket.basketTotalCount = 0;
    },
  },
  mounted() {
    this.basket.fetchBasketItems();
  },
});
</script>
