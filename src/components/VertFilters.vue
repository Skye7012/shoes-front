<template>
  <div class="flex justify-between items-center">
    <div>
      <select
        class="bg-white border border-light rounded h-10 px-1"
        @change="changeFilter"
      >
        <option
          v-for="sortOption in sortOptions"
          :key="sortOption.value"
          :value="sortOption.value"
        >
          {{ sortOption.title }}
        </option>
      </select>
      <ButtonComponent class="element-spacing" @click="shoes.downloadXMLFile"
        >XML</ButtonComponent
      >
    </div>

    <div class="flex justify-end">
      <ButtonComponent class="element-spacing" @click="decrementPage"
        >Пред</ButtonComponent
      >

      <ButtonComponent
        :class="{ 'bg-info text-white': activePag === 1 }"
        class="element-spacing"
        @click="changePage(1)"
      >
        1
      </ButtonComponent>

      <InputComponent
        v-model="nowPage"
        class="element-spacing !w-16 text-center !cursor-auto"
        :class="{ 'bg-info text-white indent-0': activePag === 2 }"
        placeholder="num"
      />

      <ButtonComponent
        :class="{ 'bg-info text-white': activePag === 3 }"
        class="element-spacing"
        @click="changePage(shoes.totalPages)"
      >
        {{ shoes.totalPages }}
      </ButtonComponent>

      <ButtonComponent class="element-spacing" @click="incrementPage"
        >След</ButtonComponent
      >

      <ButtonComponent
        class="element-spacing !border-info !rounded-full !w-auto"
      >
        {{ shoes.totalCount ? shoes.totalCount : 0 }}
      </ButtonComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useShoesStore } from "@/stores/shoesStore";
import ButtonComponent from "./UI/ButtonComponent.vue";
import InputComponent from "./UI/InputComponent.vue";

export default defineComponent({
  components: { ButtonComponent, InputComponent },
  setup() {
    const shoes = useShoesStore();
    return {
      shoes
    };
  },
  data() {
    return {
      nowPage: 1,
      activePag: 2,
      sortOptions: [
        { title: "По названию", value: "Name" },
        { title: "Сначала дешевые", value: "Cheaper" },
        { title: "Сначала дорогие", value: "Expensive" }
      ]
    };
  },
  watch: {
    nowPage: {
      handler() {
        this.changePage(this.nowPage);
      }
    }
  },
  methods: {
    changePage(page: number) {
      if (page > 0 && page <= this.shoes.totalPages) {
        this.nowPage = page;
        this.shoes.page = page;
        this.shoes.fetchShoes();
      }
    },
    decrementPage() {
      if (this.nowPage <= 1) this.nowPage = 1;
      else this.nowPage += 1;
      this.activePag = 2;
    },
    incrementPage() {
      if (this.nowPage >= this.shoes.totalPages) {
        this.nowPage = this.shoes.totalPages;
      } else this.nowPage += 1;
      this.activePag = 2;
    },
    changeFilter(event: Event) {
      switch ((event.target as HTMLInputElement).value) {
        case "Name":
          this.shoes.sortOption = { OrderBy: "Name", IsAscending: true };
          break;
        case "Cheaper":
          this.shoes.sortOption = { OrderBy: "Price", IsAscending: true };
          break;
        case "Expensive":
          this.shoes.sortOption = { OrderBy: "Price", IsAscending: false };
          break;
        default:
          throw new Error("Не реализованная опция в switch");
      }
      this.shoes.fetchShoes();
    }
  }
});
</script>

<style scoped>
.element-spacing {
  @apply ml-2 min-w-[2.5rem];
}
</style>
