<template>
  <div class="basket">
    <div class="basketItems box">
      <BasketItem
        v-for="basketItem in basket.basketItems"
        :key="basketItem.id"
        v-bind:basketItem="basketItem"
      >
      </BasketItem>
    </div>
    <div class="summary box">
      <p>Товаров ({{ basket.basketTotalCount }})</p>
      <p>
        Общая стоимость <span class="price">{{ basket.basketPrice }} ₽</span>
      </p>

      <div class="buy">
        <input
          v-model="address"
          class="input"
          v-bind:class="{ req: !address, changed: address != '' }"
          placeholder="Адрес"
          type="text"
        />

        <button
          @click="buy()"
          v-bind:class="{ dis: !address, link: address != '' }"
          :disabled="!address"
          class="button"
        >
          Оформить
        </button>
      </div>

      <button @click="clearBasket" class="button clear">
        Очистить корзину
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import BasketItem from "@/components/BasketItem.vue";
import { removeBasket } from "@/envHelper";
import { useBasketStore } from "@/stores/basketStore";
import { useOrderStore } from "@/stores/orderStore";
import { useUserStore } from "@/stores/userStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    BasketItem,
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

<style lang="scss" scoped>
@import "@/assets/vars.scss";
@import "@/assets/my.scss";

.basket {
  margin: auto auto;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.summary {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  margin-left: 50px;
  height: 60vh;
  text-align: center;
}

.basketItems {
  overflow-y: auto;
  height: 60vh;
  display: grid;
  grid-auto-rows: 120px;
  row-gap: 10px;
  min-width: 450px;
}

.input {
  width: 80%;
  box-sizing: border-box;
  border: 1.5px solid $light;
  border-radius: 0.25rem;
  height: 2.5rem;
  text-align: center;
}

.price {
  color: $danger;
}

.button {
  margin: 2vh 0;
  width: 80%;
}

.clear {
  margin-top: auto;
}

.buy {
  margin: 20px 0;
}

.changed {
  border-color: $info;
}

.req {
  border-color: $danger;
}

.dis {
  background-color: $light;
}
</style>
