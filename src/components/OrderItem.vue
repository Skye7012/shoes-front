<template>
  <div class="flex border border-light rounded m-1 h-20 w-full">
    <ShoeImgComponent
      with-border
      is-rounded
      :image-file-id="orderItem.shoe.imageFileId"
    />
    <div
      class="flex flex-1 flex-col justify-center items-center gap-y-1 overflow-x-hidden"
    >
      <div
        class="truncate w-full px-2 text-center"
        :title="orderItem.shoe.name"
      >
        {{ orderItem.shoe.name }}
      </div>
      <div class="text-danger">
        {{ orderItem.shoe.price }} ₽ &nbsp;
        <ShoeSizeBadgeComponent :ru-size="orderItem.ruSize" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { GetOrdersResponseItemOrderItem } from "@/api/Api";
import ShoeImgComponent from "./UI/ShoeImgComponent.vue";
import ShoeSizeBadgeComponent from "./UI/ShoeSizeBadgeComponent.vue";

export default defineComponent({
  components: { ShoeImgComponent, ShoeSizeBadgeComponent },
  props: {
    orderItem: {
      type: Object as PropType<GetOrdersResponseItemOrderItem>,
      required: true
    }
  }
});
</script>
