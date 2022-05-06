<template>
  <h2 class="level-header" :class="{ completed: state.progress.hasCompleted(state.progress.currentChapter, state.progress.currentLevel) }">
        <span class="level-text">
          Level {{ state.progress.currentLevel }} of {{ levels.length }}
        </span>
    <span class="checkmark"></span>
  </h2>

  <div class="level-nav">
    <a class="previous" href="#" @click.prevent="navigateLevel('previous', $event)"></a>
    <a class="next" href="#" @click.prevent="navigateLevel('next', $event)"></a>
  </div>

  <div class="level-progress">
    <div class="progress" :style="{ width: state.progress.getPercentCompleted(state.progress.currentChapter)+'%' }"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { currentChapter } from "../chapters/chapters";
import {changeLevel, state} from "../game";

const levels = computed(() => currentChapter.value.levels)

function navigateLevel(direction="next", event){
  const el = event.target;
  el.classList.add("link-jiggle");
  setTimeout(() => { el.classList.remove("link-jiggle"); }, 1000)

  if(direction === "next") {
    changeLevel(state.progress.currentChapter, state.progress.currentLevel + 1)
  } else {
    changeLevel(state.progress.currentChapter, state.progress.currentLevel - 1)
  }
}
</script>

<style scoped>
.level-header {
  font-size: 25px;
  margin: 0;
  padding: 0 0 10px 0;
  color: #777;
}

.level-header .checkmark {
  position: relative;
  display: inline-block;
  margin-left: 8px;
  width: 12px;
  height: 20px;
  border: solid 4px white;
  border-top-width: 0;
  border-left-width: 0;
  opacity: 0;
  top: -3px;
  transform: rotate(40deg);
}

.level-header.completed .checkmark {
  opacity: .7;
  border: solid 4px #4cbb4a;
  border-top-width: 0;
  border-left-width: 0;
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

.level-nav a.link-jiggle {
  animation: linkJiggle .2s ease-out;
}

@keyframes linkJiggle {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scaleX(.87) scaleY(.8);

  }
  40% {
    transform: scale(1.13);
  }

}
</style>