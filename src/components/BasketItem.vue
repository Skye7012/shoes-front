<template>
  <div class="flex border border-light rounded m-1 h-[140px]">
    <ShoeImgComponent :image-path="basketItem.image" />
    <div class="flex flex-1 flex-col items-center justify-around">
      <div class="truncate w-full px-2 text-center">
        <span> {{ basketItem.name }}<br /> </span>
      </div>
      <div>
        {{ basketItem.brand.name }} / {{ basketItem.destination.name }} /
        {{ basketItem.season.name }}
      </div>
      <div class="text-danger">
        {{ basketItem.price }} ₽
        <ShoeSizeBadgeComponent
          :ru-size="basket.getSize(basketItem.id)"
          class="text-[initial] bg-[whitesmoke] bg-[length:25px] rounded p-[1rem/8]"
        />
      </div>
      <div>
        <ButtonComponent @click="onRemoveClick(basketItem.id)">
          Убрать из корзины
        </ButtonComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { GetShoesResponseItem } from "@/api/Api";
import { useBasketStore } from "@/stores/basketStore";
import ButtonComponent from "./UI/ButtonComponent.vue";
import ShoeImgComponent from "./UI/ShoeImgComponent.vue";
import ShoeSizeBadgeComponent from "./UI/ShoeSizeBadgeComponent.vue";

export default defineComponent({
  components: { ButtonComponent, ShoeImgComponent, ShoeSizeBadgeComponent },
  props: {
    basketItem: {
      type: Object as PropType<GetShoesResponseItem>,
      required: true
    }
  },
  setup() {
    const basket = useBasketStore();
    return {
      basket
    };
  },
  data() {
    return {
      inBasket: false
    };
  },
  methods: {
    onRemoveClick(id: number) {
      this.basket.removeBasketItem(id);
      this.basket.removeShoe(id);
    }
  }
});
</script>
