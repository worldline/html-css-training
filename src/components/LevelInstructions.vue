<template>
    <div v-html="state.level.instructions" class="instructions"></div>
    <div class="actions">
      <button @click="goToNextLevel">Next</button>
    </div>
</template>

<script setup>
import {changeLevel, state} from "../game"

function goToNextLevel(){
  changeLevel(state.progress.currentChapter, state.progress.currentLevel + 1)
}
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

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>