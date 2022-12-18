<template>
  <div class="mcolumns">
    <div class="mcolumn">
      <div class="box">
        <AsideFilters></AsideFilters>
      </div>
    </div>
    <div class="mcolumn">
      <div class="box mbox">
        <Cards></Cards>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Cards from "@/components/CardCollection.vue";
import AsideFilters from "@/components/AsideFilters.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Cards,
    AsideFilters,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/vars.scss";
@import "@/assets/my.scss";

.mcolumns {
  width: 100%;
  margin-top: 20px;
  height: 100%;
  padding: 0 2vw;
  display: grid;
  grid-template-columns: 200px auto;
  column-gap: 10px;
}

.box {
  height: 100%;
  padding-top: 0.25rem;
}

.mbox {
  padding-top: 0.25rem;
}
</style>
