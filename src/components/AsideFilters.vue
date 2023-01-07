<template>
  <aside>
    <ButtonComponent @click="dropFilters" class="mt-1"
      >Сбросить фильтры</ButtonComponent
    >

    <div class="mt-3">
      <span> Брэнды </span>
      <ul class="pl-2 pt-1">
        <li v-for="brand in brands.brands" :key="brand.id">
          <input
            v-model="filters.brandFilters"
            type="checkbox"
            :value="brand.id"
          />
          {{ brand.name }}
        </li>
      </ul>
    </div>

    <div class="mt-3">
      <span> Назначение </span>
      <ul class="pl-2 pt-1">
        <li
          v-for="destination in destinations.destinations"
          :key="destination.id"
        >
          <input
            v-model="filters.destinationFilters"
            type="checkbox"
            :value="destination.id"
          />
          {{ destination.name }}
        </li>
      </ul>
    </div>

    <div class="mt-3">
      <span> Сезон </span>
      <ul class="pl-2 pt-1">
        <li v-for="season in seasons.seasons" :key="season.id">
          <input
            v-model="filters.seasonFilters"
            type="checkbox"
            :value="season.id"
          />
          {{ season.name }}
        </li>
      </ul>
    </div>

    <div class="mt-3">
      <span> Размеры </span>
      <ul class="pl-2 pt-1">
        <li v-for="size in sizes.sizes" :key="size">
          <input v-model="filters.sizeFilters" type="checkbox" :value="size" />
          {{ size }}
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import { useBrandStore } from "@/stores/brandsStore";
import { useDestinationStore } from "@/stores/destinationStore";
import { useSeasonStore } from "@/stores/seasonsStore";
import { useShoesStore } from "@/stores/shoesStore";
import { useSizesStore } from "@/stores/sizesStore";
import { defineComponent } from "vue";
import ButtonComponent from "./UI/ButtonComponent.vue";

interface IFilter {
  brandFilters: number[];
  destinationFilters: number[];
  seasonFilters: number[];
  sizeFilters: number[];
}

export default defineComponent({
  data() {
    return {
      filters: {
        brandFilters: [],
        destinationFilters: [],
        seasonFilters: [],
        sizeFilters: [],
      } as IFilter,
    };
  },
  setup() {
    const shoes = useShoesStore();
    const sizes = useSizesStore();
    const brands = useBrandStore();
    const seasons = useSeasonStore();
    const destinations = useDestinationStore();
    return {
      shoes,
      sizes,
      brands,
      seasons,
      destinations,
    };
  },
  methods: {
    dropFilters() {
      this.shoes.searchQuery = undefined;
      this.filters.brandFilters = [];
      this.filters.destinationFilters = [];
      this.filters.seasonFilters = [];
      this.filters.sizeFilters = [];
      this.shoes.$patch({ ...this.filters });
      this.shoes.fetchShoes();
    },
  },
  mounted() {
    this.brands.fetchBrands();
    this.destinations.fetchDestinations();
    this.seasons.fetchSeasons();
    this.sizes.fetchSizes();
  },
  watch: {
    filters: {
      handler() {
        this.shoes.$patch({ ...this.filters });
        this.shoes.fetchShoes();
      },
      deep: true,
    },
  },
  components: { ButtonComponent },
});
</script>
