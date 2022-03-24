<template>
  <h1 class="title">figma plugin demo</h1>
  <hello-world class="content" />
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    HelloWorld
  },
  setup() {
    return {};
  }
};
</script>

<style lang="postcss" scoped>
#app {
  .title {
    margin: 0;
    padding: 16px;
    font-size: 12px;
    font-weight: 500;
    border-bottom: 1px solid var(--silver);
  }

  .content {
    padding: 8px 8px;
  }
}
</style>
