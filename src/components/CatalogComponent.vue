<template>
  <div class="w-full my-5 h-full p-[0_2vw] grid grid-cols-[200px_auto] gap-x-3">
    <BoxComponent class="h-full pt-1">
      <AsideFilters />
    </BoxComponent>
    <BoxComponent class="h-full pt-1">
      <Cards />
    </BoxComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cards from "@/components/CardCollection.vue";
import AsideFilters from "@/components/AsideFilters.vue";
import BoxComponent from "./UI/BoxComponent.vue";

export default defineComponent({
  components: {
    Cards,
    AsideFilters,
    BoxComponent
  }
});
</script>
