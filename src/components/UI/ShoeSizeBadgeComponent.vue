<template>
  <span
    class="text-[initial] bg-[whitesmoke] bg-[length:25px] rounded p-[1rem/8]"
    >{{ ruSize }}RU</span
  >
</template>

<script setup lang="ts">
interface Props {
  ruSize: number;
}

defineProps<Props>();
</script>
