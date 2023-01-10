<template>
  <input
    :value="modelValue"
    v-bind="$attrs"
    class="w-full border border-light rounded h-10 indent-4"
    :placeholder="placeholder"
    @change="
      $emit('update:modelValue', ($event.target as HTMLInputElement)!.value)
    "
  />
</template>

<script setup lang="ts">
interface Props {
  placeholder: string | undefined;
  modelValue: string | number | null;
}

defineEmits(["update:modelValue"]);
defineProps<Props>();
</script>
