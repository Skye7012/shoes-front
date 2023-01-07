<template>
  <button
    v-bind="$attrs"
    class="bg-white border border-light rounded h-10 cursor-pointer px-2"
  >
    <slot></slot>
  </button>
</template>
