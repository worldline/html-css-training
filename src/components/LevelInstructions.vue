<template>
    <div class="instructions">
      <h3>{{ state.level.name }}</h3>
      <div v-html="state.level.instructions"></div>
    </div>
    <div class="actions">
      <button @click="completeLevel" v-if="!state.level.selector">Next</button>
    </div>
</template>

<script setup lang="ts">
import {completeLevel, state} from "../game"
</script>

<style scoped>
.instructions-wrapper {
  display: flex;
  flex-direction: column;
}

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

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>