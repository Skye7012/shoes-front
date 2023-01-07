<template>
  <input
    :value="modelValue"
    @change="
      $emit('update:modelValue', ($event.target as HTMLInputElement)!.value)
    "
    v-bind="$attrs"
    class="w-full border border-light rounded h-10 indent-4"
    :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
interface Props {
  placeholder: string | undefined;
  modelValue: string | number | null;
}

const props = defineProps<Props>();
</script>
