<template>
  <div class="mrows">
    <VertFilters class="vert" />
    <div class="cards">
      <CardItem
        v-for="shoe in shoes.shoes"
        :key="shoe.id"
        v-bind:shoe="shoe"
      ></CardItem>
    </div>
  </div>
</template>

<script lang="ts">
import VertFilters from "@/components/VertFilters.vue";
import CardItem from "@/components/CardItem.vue";
import { defineComponent } from "vue";
import { useShoesStore } from "@/stores/shoesStore";

export default defineComponent({
  components: {
    VertFilters,
    CardItem,
  },
  setup() {
    const shoes = useShoesStore();

    return {
      shoes,
    };
  },
  mounted() {
    this.shoes.fetchShoes();
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/vars.scss";
@import "@/assets/my.scss";

.mrows {
  display: grid;
  grid-template-rows: 50px auto;
  column-gap: 10px;
}

.cards {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 300px);
  justify-content: center;
  row-gap: 10px;
}

.vert {
  margin: auto 4px;
}
</style>
