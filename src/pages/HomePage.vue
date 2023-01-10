<template>
  <HeaderComponent></HeaderComponent>
  <CatalogComponent class="main"></CatalogComponent>
  <FooterComponent></FooterComponent>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CatalogComponent from "@/components/CatalogComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  components: {
    CatalogComponent,
    HeaderComponent,
    FooterComponent
  }
});
</script>

<style lang="scss" scoped>
.main {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
