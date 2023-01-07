<template>
  <div>
    <label>
      {{ title }}
    </label>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>
