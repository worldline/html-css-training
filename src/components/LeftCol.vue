<template>
  <div class="left-col">
    <Header />
    <div class="left-panel">
      <component :is="leftPanelComponent" />
    </div>
    <About />
  </div>
</template>

<script setup lang="ts">
import About from "./About.vue";
import Header from "./Header.vue";
import ChapterIntro from "./ChapterIntro.vue";
import {computed} from "vue";
import {currentChapter} from "../chapters/chapters";
import { state } from "../game";

const leftPanelComponent = computed(() => {
  if(state.progress.currentLevel === 0) return ChapterIntro
  else return currentChapter.value.leftPanelComponent
})
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