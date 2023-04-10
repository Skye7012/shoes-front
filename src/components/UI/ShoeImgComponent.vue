<template>
  <div
    v-if="imageFileUrl"
    :class="[
      'bg-center bg-cover h-full aspect-[5/3]',
      withBorder ? '[border-right:1.5px_solid_var(--light)]' : '',
      isRounded ? 'rounded-[0.25rem_0_0_0.25rem]' : ''
    ]"
    :style="{
      'background-image': `url(${imageFileUrl})`
    }"
    @load="loaded"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useBasketStore } from "@/stores/basketStore";
import { apiClient } from "@/api/apiClient";

export default defineComponent({
  props: {
    imageFileId: {
      type: Number,
      required: true
    },
    withBorder: Boolean,
    isRounded: Boolean
  },
  setup() {
    const basket = useBasketStore();
    return {
      basket
    };
  },
  data() {
    return {
      imageFileUrl: null as string | null
    };
  },
  watch: {
    imageFileId: {
      handler() {
        apiClient.files.downloadDetail(this.imageFileId)
          .then(response => {
            this.imageFileUrl = URL.createObjectURL(response.data)
          })
      },
      immediate: true
    }
  },
  methods: {
    loaded() {
        if (this.imageFileUrl) URL.revokeObjectURL(this.imageFileUrl)
      },
  },
});
</script>
