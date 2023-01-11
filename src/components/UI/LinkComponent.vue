<template>
  <router-link class="underline text-blue-600 visited:text-purple-600" :to="to">
    <slot></slot>
  </router-link>
</template>

<script setup lang="ts">
interface Props {
  to: string;
}

defineProps<Props>();
</script>
