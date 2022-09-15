<script setup lang="ts">
import { state } from "./state";
import { loadProgress } from "./progress";
import { onKeyStroke } from '@vueuse/core';
import {changeLevel, closeMenu, loadLevel } from "./game";

import LeftCol from "./components/LeftCol.vue";
import RightCol from "./components/RightCol.vue";


onKeyStroke('Escape', (e) => { e.preventDefault(); closeMenu() })
onKeyStroke('PageUp', (e) => { e.preventDefault(); changeLevel(state.progress.currentChapter, state.progress.currentLevel - 1) })
onKeyStroke('PageDown', (e) => { e.preventDefault(); changeLevel(state.progress.currentChapter, state.progress.currentLevel + 1) })

loadProgress();
loadLevel();
</script>

<template>
  <LeftCol />
  <RightCol />
</template>

<style>
@import "styles/global.pcss";
</style>
