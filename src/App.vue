<script setup lang="ts">
import { loadProgress } from "./progress";
import { onKeyStroke } from '@vueuse/core';
import { closeMenu, loadLevel, goToPreviousLevel, goToNextLevel } from "./game";

import LeftCol from "./components/LeftCol.vue";
import RightCol from "./components/RightCol.vue";


onKeyStroke('Escape', (e) => { e.preventDefault(); closeMenu() })
onKeyStroke('PageUp', (e) => { e.preventDefault(); goToPreviousLevel() })
onKeyStroke('PageDown', (e) => { e.preventDefault(); goToNextLevel() })

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
