<template>
  <div class="radio">
    <input
      v-for="size in shoe.ruSizes"
      :key="size"
      :value="size"
      :label="size.toString()"
      :name="shoe.name"
      @change="
        $emit('update:modelValue', +($event.target as HTMLInputElement)!.value)
      "
      type="radio"
      v-bind="$attrs"
      :checked="!!modelValue && modelValue == size"
    />
  </div>
</template>

<script setup lang="ts">
import { GetShoesResponseItem } from "@/api/Api";

interface Props {
  shoe: GetShoesResponseItem;
  modelValue: number | null;
}

const props = defineProps<Props>();
</script>

<style scoped>
.radio {
  background: #e8e7e76d;
  padding: 4px;
  border-radius: 3px;
  position: relative;
}

.radio input {
  width: auto;
  height: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  padding: 4px 8px;
  background: #e8e7e76d;
  color: #bdbdbdbd;
  font-size: 0.8rem;
  transition: all 100ms linear;
}

.radio input:checked {
  background-color: var(--info);
  color: #fff;
  box-shadow: 0 1px 1px #0000002e;
  text-shadow: 0 1px 0px #79485f7a;
}

.radio input:before {
  content: attr(label);
  display: inline-block;
  text-align: center;
  width: 100%;
}

.disabled {
  background-color: #bdbdbdbd;
}
</style>
