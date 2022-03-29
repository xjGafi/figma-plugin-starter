<template>
  <div class="hello-world__option-box">
    <div class="section-title">Count:</div>
    <div class="input">
      <input v-model="create.count" type="input" class="input__field" placeholder="Placeholder" />
    </div>
  </div>

  <div class="hello-world__option-box">
    <div class="section-title">Shape:</div>
    <select v-model="create.shape" class="select-menu">
      <option value="square">Square</option>
      <option value="triangle">Triangle</option>
      <option value="circle">Circle</option>
    </select>
  </div>

  <div class="hello-world__option-box">
    <div class="section-title">Direction:</div>
    <select v-model="create.direction" class="select-menu">
      <option value="horizontal">Horizontal</option>
      <option value="vertical">Vertical</option>
    </select>
  </div>

  <button class="hello-world__button button button--primary" @click="createShape">Create</button>
</template>

<script setup lang="ts">
import { reactive, onMounted, onBeforeUnmount } from 'vue';
import { selectMenu } from 'figma-plugin-ds';
import { createShapes } from '../../figma/message-controller';

const create = reactive({
  count: 5,
  shape: 'circle',
  direction: 'horizontal'
});
const createShape = () => {
  createShapes(create.count, create.shape, create.direction);
};
onMounted(() => {
  selectMenu.init();
});
onBeforeUnmount(() => {
  selectMenu.destroy();
});
</script>

<style lang="pcss">
@import './style.pcss'
</style>
