<template>
  <div class="right-col" :class="{ 'menu-open': state.menuOpened }">
    <div class="doc-wrapper">
      <ChapterHeader />
      <LevelHeader />
      <component :is="rightPanelComponent" />
    </div>
    <LevelMenu />
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {state} from "../game";
import ChapterHeader from "./ChapterHeader.vue";
import LevelHeader from "./LevelHeader.vue";
import LevelMenu from "./LevelMenu.vue";
import ChapterInstructions from "./ChapterInstructions.vue";
import {currentChapter} from "../chapters/chapters";

const rightPanelComponent = computed(() => {
  if(state.progress.currentLevel === 0) return ChapterInstructions
  else return currentChapter.value.rightPanelComponent
})
</script>

<style scoped>
.right-col {
  position: fixed;
  width: 375px;
  right: 0;
  top: 0;
  bottom: 0;
  background: #221e18;
  z-index: 1;
}

.right-col {
  overflow: hidden;
}

.right-col .doc-wrapper {
  padding: 20px;
  height: 100%;
  background: rgba(0,0,0,.2);
  display: flex;
  flex-direction: column;
}

.right-col ::v-deep(.title) {
  font-size: 18px;  
  font-weight: 300;
}

.menu-open ::v-deep(.level-menu) {
  left: 0;
}

.menu-open ::v-deep(.level-menu-toggle) {
  background: rgba(255,255,255,0);
}

.menu-open ::v-deep(.level-menu-toggle:before) {
  top: -9px;
  transform: rotate(45deg);
}

.menu-open ::v-deep(.level-menu-toggle:after) {
  top: 10px;
  transform: rotate(-45deg);
}
</style>