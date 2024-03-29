<template>
  <h2 class="level-header" :class="{ completed }"
      v-if="state.progress.currentLevel > 0" >
        <span class="level-text">
          Level {{ state.progress.currentLevel }} of {{ levels.length }}
        </span>
    <span class="checkmark" v-if="completed">✔️</span>
  </h2>

  <div class="level-nav">
    <a class="previous" href="#" @click.prevent="goToPreviousLevel"></a>
    <a class="next" href="#" @click.prevent="goToNextLevel"></a>
  </div>

  <div class="level-progress" v-if="state.progress.currentLevel > 0" >
    <div class="progress" :style="{ width: getPercentCompleted(state.progress.currentChapter)+'%' }"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { goToNextLevel, goToPreviousLevel} from "../game";
import { hasCompleted, getPercentCompleted } from "../progress";
import { currentChapter, state } from "../state";

const levels = computed(() => currentChapter.value.levels)
const completed = computed(() => hasCompleted(state.progress.currentChapter, state.progress.currentLevel))
</script>

<style scoped>
.level-header {
  font-size: 25px;
  margin: 0;
  padding: 0 0 10px 0;
  color: #999;
}

.level-progress {
  width: 100%;
  background: rgba(0,0,0,.4);
}

.level-progress .progress {
  background: rgba(255,255,255,.2);
  width: 10%;
  height: 2px;
  position: relative;
}

.level-progress .progress:after {
  content:"";
  position: absolute;
  right: -6px;
  top: -3px;
  height: 4px;
  width: 4px;
  border: solid 2px #2a231d;
  background: rgba(255,255,255,.5);
  border-radius: 5px;
}

.checkmark {
  font-size: 80%;
}

/* Previous and next level navigation */

.level-nav {
  position: absolute;
  right: 60px;
  top: 20px;
  line-height: 0;
}

.level-nav a {
  padding: 5px;
  position: relative;
  height: 30px;
  width: 30px;
  display: inline-block;
  opacity: .25;
  transition: opacity .2s ease-out;
}

.level-nav a:hover {
  opacity: .4;
}

.level-nav a:after {
  content: "";
  height: 18px;
  width: 18px;
  position: absolute;
  border: solid 2px white;
  border-bottom-width: 0;
  border-left-width: 0;
  transform-origin: center center;
  top: 6px;
  box-sizing: border-box;
}

.level-nav .previous:after {
  transform: rotate(-135deg);
  right: 2px;
}

.level-nav .next:after {
  transform: rotate(45deg);
  left: 2px;
}
</style>