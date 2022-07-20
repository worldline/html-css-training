<template>
    <div class="instructions">
      <template v-if="currentChapter.instructions">
        <div v-html="currentChapter.instructions"></div><hr/>
      </template>
      <h3 class="title">{{ level.name }}</h3>
      <div v-html="state.level.instructions"></div>
    </div>
    <div class="actions">
      <button @click="completeLevel" v-if="level.skippable">Next</button>
    </div>
</template>

<script setup lang="ts">
import {completeLevel, state} from "../game"
import { currentChapter } from "../chapters/chapters";
import { computed } from "vue";
import { Level } from "../chapters/level";

const level = computed(() => state.level as Level)
</script>

<style scoped>
.instructions {
  flex: 1;
}

.instructions ::v-deep(img){
  display: block;
  margin: 0.5em auto;
}

.instructions ::v-deep(.syntax) {
  font-size: 24px;
  margin: 0;
  font-weight: 200;
  opacity: .8;
  background: rgba(255,255,255,.05);
  display: inline-block;
  padding: 5px 8px;
  border-bottom: solid 2px rgba(255,255,255,.1);
}

.instructions ::v-deep(ul){
  padding-left: 20px;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>