<template>
  <router-link class="underline text-blue-600 visited:text-purple-600" :to="to">
    <slot></slot>
  </router-link>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from "vue-router";

interface Props {
  to: RouteLocationRaw;
}

defineProps<Props>();
</script>
