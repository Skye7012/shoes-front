<template>
  <div class="grid grid-rows-[50px_auto] gap-y-2">
    <VertFilters class="mt-auto mx-1" />
    <div class="mt-2 grid grid-cols-[repeat(2,300px)] justify-center gap-y-2">
      <CardItem
        v-for="shoe in shoes.shoes"
        :key="shoe.id"
        :shoe="shoe"
      ></CardItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VertFilters from "@/components/VertFilters.vue";
import CardItem from "@/components/CardItem.vue";
import { useShoesStore } from "@/stores/shoesStore";

export default defineComponent({
  components: {
    VertFilters,
    CardItem
  },
  setup() {
    const shoes = useShoesStore();

    return {
      shoes
    };
  },
  mounted() {
    this.shoes.fetchShoes();
  }
});
</script>
