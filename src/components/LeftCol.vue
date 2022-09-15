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
import {computed} from "vue";
import { state } from "../state";

import About from "./About.vue";
import Header from "./Header.vue";
import ChapterIntro from "./ChapterIntro.vue";
import InteractiveDOM from "./InteractiveDOM.vue";
import SelectorGame from "./SelectorGame.vue";
import SpecificityGame from "./SpecificityGame.vue";
import LayoutGame from "./LayoutGame.vue";
import ReproduceGame from "./ReproduceGame.vue";

const leftPanelComponent = computed(() => {
  if(state.progress.currentLevel === 0) return ChapterIntro
  switch(state.progress.currentChapter){
    case 1: return InteractiveDOM
    case 2: return SelectorGame
    case 3: return SpecificityGame
    case 4: case 5: case 6: return LayoutGame
    case 7: case 8: return ReproduceGame    
  }
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