<template>
  <p class="order">{{ level.doThis }}</p>
  <div class="game-container">
    <div class="game-wrapper">
      <Table :content="level.markup" :hintContent="level.hintMarkup" :key="level.name"></Table>
    </div>
  </div>
  <Editor placeholder="Type styles here" @input="applyStyle(level.selector, $event)">
    <template v-slot:code-before>
        {{level.selector}} {
        <pre v-if="level.existingStyles">{{ level.existingStyles}}</pre>
    </template>
    <template v-slot:code-after>
        <br/>}
    </template>
  </Editor>
</template>

<script setup lang="ts">
import Editor from "./Editor.vue";
import {state} from "../game";
import Table from "./Table.vue"
import { computed } from "vue";
import { Chapter4Level, applyStyle } from "../chapters/chapter4";

const level = computed(() => state.level as Chapter4Level)

</script>

<style scoped>
.game-wrapper {
  transform: translate3d(0,-50px,0);
  perspective: 500px;
  text-align: center;
  position: relative;
  padding-top: 15px;
  margin-bottom: 50px;
  display: inline-block;
}

pre {
  margin: 0;
}

.game-wrapper ::v-deep(.table-board sushi) {
  margin: 32px;
}
</style>