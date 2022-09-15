<template>
  <h1 class="chapter-header">Chapter {{state.progress.currentChapter}}: {{chapter.name}}</h1>
</template>

<script setup lang="ts">
import {state} from "../state";
import {computed} from "vue";
import {chapters} from "../chapters/chapters";

const chapter = computed(() => chapters[state.progress.currentChapter-1])
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