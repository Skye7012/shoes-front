<template>
  <div class="card">
    <div
      class="img"
      v-bind:style="{
        'background-image': `url('${require(`@/assets/img/shoes/${shoe.image}`)}')`,
      }"
    ></div>
    <div class="description">
      <div class="title">
        <span> {{ shoe.name }}<br /> </span>
      </div>
      <div class="categories">
        {{ shoe.brand.name }} / {{ shoe.destination.name }} /
        {{ shoe.season.name }}
      </div>
      <div class="price">{{ shoe.price }} ₽</div>
      <div class="radio">
        <input
          v-for="size in shoe.ruSizes"
          :key="size"
          v-model="chosenSize"
          :disabled="isRadioDisabled"
          :label="size"
          type="radio"
          :name="shoe.name"
          :value="size"
        />
      </div>
      <div class="buy">
        <button
          v-show="!inBasket"
          @click="onAddClick(shoe.id)"
          v-bind:class="{ disabled: isDisabled }"
          :disabled="isDisabled"
          class="button link"
        >
          Добавить в корзину
        </button>
        <button
          v-show="inBasket"
          @click="onRemoveClick(shoe.id)"
          class="button"
        >
          Убрать из корзины
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { GetShoesResponseItem } from "@/api/Api";
import { useBasketStore } from "@/stores/basketStore";
import { useShoesStore } from "@/stores/shoesStore";
import { PropType, defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      inBasket: false,
      isDisabled: true,
      isRadioDisabled: false,
      chosenSize: undefined as undefined | number,
    };
  },
  props: {
    shoe: {
      type: Object as PropType<GetShoesResponseItem>,
      required: true,
    },
  },
  setup() {
    const shoes = useShoesStore();
    const basket = useBasketStore();

    return {
      shoes,
      basket,
    };
  },
  methods: {
    onAddClick(id: number) {
      if (!this.chosenSize)
        throw new Error("Не выбран размер добавляемого ботинка");

      this.basket.addShoe({ id: id, size: this.chosenSize });
      this.inBasket = true;
      this.isRadioDisabled = true;
    },
    onRemoveClick(id: number) {
      this.basket.removeShoe(id);
      this.inBasket = false;
      this.chosenSize = undefined;
      this.isRadioDisabled = false;
    },
  },
  watch: {
    chosenSize() {
      if (this.chosenSize) this.isDisabled = false;
      else this.isDisabled = true;
    },
  },
  mounted() {
    this.inBasket = this.basket.isInBasket(this.shoe.id);
    if (this.inBasket) {
      this.chosenSize = this.basket.getSize(this.shoe.id);
    }
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/vars.scss";
@import "@/assets/my.scss";

.card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 1px 1px 4px $light;
  border-radius: 0.25rem;
  margin: 4px;
}

.img {
  background-position: center center;
  background-size: cover;
  height: 100%;
  aspect-ratio: 5 / 3;
}

.description {
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  flex: 1;
  margin: 0.2rem 0.5rem 0 0.5rem;
  overflow: hidden;
  text-align: center;
  span {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

.price {
  color: $danger;
}

.radio {
  background: #e8e7e76d;
  padding: 4px;
  border-radius: 3px;
  position: relative;
}

.radio input {
  width: auto;
  height: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  padding: 4px 8px;
  background: #e8e7e76d;
  color: #bdbdbdbd;
  font-size: 0.8rem;
  transition: all 100ms linear;
}

.radio input:checked {
  background-color: $info;
  color: #fff;
  box-shadow: 0 1px 1px #0000002e;
  text-shadow: 0 1px 0px #79485f7a;
}

.radio input:before {
  content: attr(label);
  display: inline-block;
  text-align: center;
  width: 100%;
}

.disabled {
  background-color: #bdbdbdbd;
}
</style>
