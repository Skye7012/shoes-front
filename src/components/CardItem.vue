<template>
  <BoxComponent class="flex flex-col rounded m-1 p-0">
    <div
      class="bg-center bg-cover h-full aspect-[5/3]"
      :style="{
        'background-image': `url('${require(`@/assets/img/shoes/${shoe.image}`)}')`
      }"
    ></div>
    <div class="flex flex-1 flex-col items-center">
      <div class="truncate w-full px-2 text-center" :title="shoe.name">
        {{ shoe.name }}
      </div>
      <div>
        {{ shoe.brand.name }} / {{ shoe.destination.name }} /
        {{ shoe.season.name }}
      </div>
      <div class="text-danger">{{ shoe.price }} ₽</div>
      <CartItemRadioInputComponent
        v-model="chosenSize"
        :disabled="isRadioDisabled"
        :shoe="shoe"
      />
      <div>
        <ButtonComponent
          v-show="!inBasket"
          :class="{ 'bg-[#bdbdbdbd]': isDisabled }"
          :disabled="isDisabled"
          class="my-1 !bg-info text-white"
          @click="onAddClick(shoe.id)"
        >
          Добавить в корзину
        </ButtonComponent>
        <ButtonComponent
          v-show="inBasket"
          class="my-1"
          @click="onRemoveClick(shoe.id)"
        >
          Убрать из корзины
        </ButtonComponent>
      </div>
    </div>
  </BoxComponent>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { GetShoesResponseItem } from "@/api/Api";
import { useBasketStore } from "@/stores/basketStore";
import { useShoesStore } from "@/stores/shoesStore";
import BoxComponent from "./UI/BoxComponent.vue";
import ButtonComponent from "./UI/ButtonComponent.vue";
import CartItemRadioInputComponent from "./CartItemRadioInputComponent.vue";

export default defineComponent({
  components: { BoxComponent, ButtonComponent, CartItemRadioInputComponent },
  props: {
    shoe: {
      type: Object as PropType<GetShoesResponseItem>,
      required: true
    }
  },
  setup() {
    const shoes = useShoesStore();
    const basket = useBasketStore();
    return {
      shoes,
      basket
    };
  },
  data() {
    return {
      inBasket: false,
      isDisabled: true,
      isRadioDisabled: false,
      chosenSize: null as null | number
    };
  },
  watch: {
    chosenSize() {
      if (this.chosenSize) this.isDisabled = false;
      else this.isDisabled = true;
    }
  },
  mounted() {
    this.inBasket = this.basket.isInBasket(this.shoe.id);
    if (this.inBasket) {
      this.chosenSize = this.basket.getSize(this.shoe.id);
    }
  },
  methods: {
    onAddClick(id: number) {
      if (!this.chosenSize) {
        throw new Error("Не выбран размер добавляемого ботинка");
      }
      this.basket.addShoe({ id, size: this.chosenSize });
      this.inBasket = true;
      this.isRadioDisabled = true;
    },
    onRemoveClick(id: number) {
      this.basket.removeShoe(id);
      this.inBasket = false;
      this.chosenSize = null;
      this.isRadioDisabled = false;
    }
  }
});
</script>
