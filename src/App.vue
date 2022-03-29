<template>
  <h1 class="app__header">{{ title }}</h1>
  <hello-world />
</template>

<script setup lang="ts">

import { ref } from 'vue';

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';

const title = ref('hello world !');

</script>

<style lang="pcss">
.app__header {
  padding: 16px;
  font-size: 12px;
  font-weight: 500;
  border-bottom: 1px solid var(--silver);
}
</style>
