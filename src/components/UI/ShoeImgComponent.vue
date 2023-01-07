<template>
  <div
    class="bg-center bg-cover h-full aspect-[5/3] [border-right:1.5px_solid_var(--light)] rounded-[0.25rem_0_0_0.25rem]"
    v-bind:style="{
      'background-image': `url('${require(`@/assets/img/shoes/${imagePath}`)}')`,
    }"
  />
</template>

<script setup lang="ts">
interface Props {
  imagePath: string;
}

const props = defineProps<Props>();
</script>
