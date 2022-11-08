<template>
  <h1 class="chapter-header">
    <span v-if="state.progress.currentChapter > 0">Chapter {{state.progress.currentChapter}}: </span>
    {{currentChapter.name}}
  </h1>
</template>

<script setup lang="ts">
import {currentChapter, state} from "../state";
</script>

<style scoped>
.chapter-header {
  font-size: 16px;
  max-width: calc(100% - 100px);
  margin: 0;
  padding: 0 0 10px 0;
  color: #777;
}
</style>