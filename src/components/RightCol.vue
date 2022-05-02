<template>
  <div class="right-col" :class="{ 'menu-open': state.menuOpened }">
    <div class="help-wrapper">
      <LevelHeader />
      <DisplayHelp />
    </div>
    <LevelMenu />
  </div>
</template>

<script setup>
import DisplayHelp from "./DisplayHelp.vue"

import {state} from "../game";
import LevelHeader from "./LevelHeader.vue";
import LevelMenu from "./LevelMenu.vue";
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

.right-col .help-wrapper {
  padding: 20px;
  height: 100%;
  background: rgba(0,0,0,.2);
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