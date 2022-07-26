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
@import "styles/global.pcss";
</style>
