<template>
  <div>
    <div
      class="p-[0_2vw] min-w-[700px] max-w-[1200px] my-0 mx-auto mt-5 grid grid-cols-[auto_1fr_auto]"
    >
      <router-link
        :to="{name: $router.routeNames.home}"
        class="mt-auto mx-0 pt-0 px-2 pl-0 cursor-pointer"
      >
        <span class="text-5xl font-bold text-info">Shoes</span>
      </router-link>
      <div v-if="isWithSearch" class="mt-auto mx-0 pt-0 px-2 relative">
        <input
          v-model="shoes.searchQuery"
          class="w-full border border-light rounded h-10 indent-4"
          type="text"
          placeholder="Найти"
        />
        <ButtonComponent
          class="absolute !bg-info text-white right-0 !rounded-tl-none !rounded-bl-none !border-l-0"
          @click="shoes.fetchShoes"
          >Найти</ButtonComponent
        >
      </div>
      <div class="mt-auto mx-0 pl-2 ml-auto">
        <ButtonComponent
          @click="$router.push({ name: $router.routeNames.profile })"
        >
          <div class="text-base">
            <span>
              <FontAwesomeIcon class="pr-1" icon="fa-solid fa-user" />
            </span>
            <span>
              {{ user.isAuth ? "Профиль" : "Войти" }}
            </span>
          </div>
        </ButtonComponent>
        <ButtonComponent
          class="ml-2"
          @click="$router.push({ name: $router.routeNames.basket })"
        >
          <div class="text-base">
            <span>
              <FontAwesomeIcon class="pr-1" icon="fa-solid fa-cart-shopping" />
            </span>
            <span>
              Корзина
              <span class="text-info">{{
                basket.basketTotalCount ? `(${basket.basketTotalCount})` : ""
              }}</span>
            </span>
          </div>
        </ButtonComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { defineComponent } from "vue";
import { useBasketStore } from "@/stores/basketStore";
import { useOrderStore } from "@/stores/orderStore";
import { useShoesStore } from "@/stores/shoesStore";
import { useUserStore } from "@/stores/userStore";
import ButtonComponent from "./UI/ButtonComponent.vue";

export default defineComponent({
  components: { FontAwesomeIcon, ButtonComponent },
  props: {
    isWithSearch: {
      type: Boolean,
      default: () => false
    }
  },
  setup() {
    const user = useUserStore();
    const shoes = useShoesStore();
    const orders = useOrderStore();
    const basket = useBasketStore();
    return {
      user,
      shoes,
      orders,
      basket
    };
  },
  mounted() {
    this.basket.getBasketCount();
  }
});
</script>
