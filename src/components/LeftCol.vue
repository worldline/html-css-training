<template>
  <div class="left-col">
    <Header />
    <div class="left-panel">
      <component :is="leftPanelComponent" />
    </div>
    <About />
  </div>
</template>

<script setup>
import About from "./About.vue";
import Header from "./Header.vue";
import {computed} from "vue";
import {currentChapter} from "../chapters/chapters";

const leftPanelComponent = computed(() => currentChapter.value.leftPanelComponent)
</script>

<style scoped>
.left-col {
  width: calc(100% - 375px);
  text-align: center;
  overflow-x: visible;
}

.left-panel {
  min-height: calc(100vh - 150px);
  position: relative;
}

</style>