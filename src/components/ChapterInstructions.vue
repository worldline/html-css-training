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
import { goToNextLevel } from "../game";
import { currentChapter } from "../state";

function nextLevel(){
  goToNextLevel()
}
</script>

<style scoped>
.instructions {
  flex: 1;
  margin-top: 1em;
  overflow: auto;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>