<template>
  <div class="nav">
    <a @click="goHome" class="nav-item logo">
      <span class="title">Shoes</span>
    </a>
    <div class="nav-item search">
      <input
        v-model="shoes.searchQuery"
        class="input"
        type="text"
        placeholder="Найти"
      />
      <button @click="shoes.fetchShoes" class="find">Найти</button>
    </div>
    <div class="nav-item-end">
      <button @click="$router.push('/profile')" class="button">
        <span class="icon">
          <i class="icons fa-solid fa-user"></i>
        </span>
        <span>
          {{ user.isAuth ? "Профиль" : "Войти" }}
        </span>
      </button>
      <button @click="$router.push('/basket')" class="button end">
        <span class="icon">
          <i class="fa-solid fa-cart-shopping"></i>
        </span>
        <span>
          Корзина
          <span class="count">{{
            basket.basketTotalCount ? `(${basket.basketTotalCount})` : ""
          }}</span>
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { useBasketStore } from "@/stores/basketStore";
import { useOrderStore } from "@/stores/orderStore";
import { useShoesStore } from "@/stores/shoesStore";
import { useUserStore } from "@/stores/userStore";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const user = useUserStore();
    const shoes = useShoesStore();
    const orders = useOrderStore();
    const basket = useBasketStore();

    const goHome = () => router.push("/");

    return {
      user,
      shoes,
      orders,
      basket,
      goHome,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/My/button.scss";

$text-size: 3em;
$size: 3em;

.nav {
  box-sizing: border-box;
  padding: 0 2vw;

  min-width: 700px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  &-item {
    margin: auto 0;
    padding: 0 10px;
    &-end {
      margin: auto 0;
      padding-left: 10px;
      margin-left: auto;
    }
  }
}

.search {
  position: relative;
}

.input {
  width: 100%;
  box-sizing: border-box;
  border: 1.5px solid $light;
  border-radius: 0.25rem;
  height: 2.5rem;
  text-indent: 1rem;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  color: $info;
}

.find {
  position: absolute;
  @extend .button;
  background-color: $info;
  color: white;
  right: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left-width: 0;
}

.end {
  margin-left: 10px;
}

.button {
  span {
    font-size: 1rem;
    i {
      padding-right: 5px;
    }
  }
}

.logo {
  padding-left: 0;
  cursor: pointer;
}

.count {
  color: $info;
}
</style>
