<template>
    <hr>
    <div class="instructions">      
      <div v-html="currentChapter.intro"></div>
    </div>
     <div class="actions">
      <button @click="nextLevel" >Next</button>
    </div>
</template>

<script setup lang="ts">
import { currentChapter } from "../chapters/chapters";
import { changeLevel, state } from "../game";

function nextLevel(){
  changeLevel(state.progress.currentChapter, 1)
}
</script>

<style scoped>
.instructions {
  flex: 1;
  margin-top: 1em;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>