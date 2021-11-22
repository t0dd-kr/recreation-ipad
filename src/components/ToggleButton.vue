<script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    value: {
      
    },
    _value: {
      default: true
    },
  })
</script>

<template>
  <div :class="['button', 'flex', 'center', { active: value == _value }]">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .button {
    width: 100%;
    font-size: 22px;
    font-weight: 500;
    border: 2px solid var(--primary);
    border-radius: 8px;
    padding: 8px 0;
    color: var(--primary);
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    &.active {
      background-color: var(--primary);
      color: #fff;
    }
  }
</style>