<script setup lang="ts">
import LeftCol from "./components/LeftCol.vue";
import RightCol from "./components/RightCol.vue";

import { onKeyStroke } from '@vueuse/core';
import {changeLevel, closeMenu, loadLevel, state} from "./game";

onKeyStroke('Escape', (e) => { e.preventDefault(); closeMenu() })
onKeyStroke('PageUp', (e) => { e.preventDefault(); changeLevel(state.progress.currentChapter, state.progress.currentLevel - 1) })
onKeyStroke('PageDown', (e) => { e.preventDefault(); changeLevel(state.progress.currentChapter, state.progress.currentLevel + 1) })

loadLevel();
</script>

<template>
  <LeftCol />
  <RightCol />
</template>

<style>
@import "../node_modules/floating-vue/dist/style.css";
@import "styles/global.pcss";
@import "styles/items.pcss";
@import "styles/animations.pcss";
@import "styles/scrollbars.pcss";
@import "styles/tag.pcss";
</style>
