<template>
  <div class="level-menu">
    <h2>Choose a level</h2>
    <div class="levels">
      <a v-for="(level, i) in levels" :key="i+level.doThis"
         :class="{ current: (i+1) === state.progress.currentLevel, completed: state.progress.hasCompleted(i+1) }"
         @click="changeLevel(i+1)"
      >
        <span class='checkmark'></span>
        <span class='level-number'>{{i+1}}</span>
        {{level.syntax || level.selectorName}}
      </a>
    </div>
    <a class="reset-progress" href="#" @click.prevent="resetProgress">Reset Progress</a>
  </div>

  <div class="level-menu-toggle-wrapper" @click="toggleLevelMenu">
    <div class="level-menu-toggle"></div>
  </div>
</template>

<script setup>
import {levels} from "../levels";
import {changeLevel, state, resetProgress} from "../game";

function toggleLevelMenu(){
  state.menuOpened = !state.menuOpened
}
</script>

<style scoped>

.level-menu {
  position: absolute;
  top: 0;
  bottom: 0;
  overflow-y: hidden;
  transition: all .15s ease-in-out;
  background: rgba(0,0,0,1);
  background: #1b1813;
  left: 500px;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.levels {
  overflow-y: auto;
  padding-bottom: 100px;
}

.level-menu h2 {
  font-size: 22px;
  color: white;
  opacity: .4;
  font-weight: normal;
  margin: 0;
  padding: 23px 0 14px 16px;
}


.level-menu .levels a {
  display: block;
  cursor: pointer;
  padding: 5px 12px 5px 22px;
  color: #777;
}

.level-menu .level-syntax {
  position: relative;
  display: inline-block;
}

.level-menu .levels a .checkmark {
  position: relative;
  display: inline-block;
  margin-right: 14px;
  width: 8px;
  height: 13px;
  border: solid 3px white;
  border-top-width: 0;
  border-left-width: 0;
  opacity: .05;
  top: -1px;
  transform: rotate(40deg);
}

.level-menu .levels a.completed .checkmark {
  opacity: 0.5;
  border: solid 3px #4cbb4a;
  border-top-width: 0;
  border-left-width: 0;
}

.level-menu .levels a.current {
  font-weight: bold;
  color: #AAA;
  background: rgba(255,255,255,.07);
}

.level-menu .levels a:hover {
  background: rgba(255,255,255,.05);
}

.level-menu .level-number {
  opacity: .6;
  min-width: 24px;
  display: inline-block;
}

.level-menu-toggle-wrapper {
  position: absolute;
  top: 20px;
  right: 20px;
  height: 30px;
  padding: 4px 2px;
  opacity: .25;
  transition: linear all .05s;
  cursor: pointer;
}

.level-menu-toggle-wrapper:hover {
  opacity: .4;
}

.level-menu-toggle {
  height: 2px;
  width: 27px;
  background: rgba(255,255,255,1);
  transition: all .15s ease-out;
  cursor: pointer;
  position: relative;
  top: 10px;
}

.level-menu-toggle:before, .level-menu-toggle:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 2px;
  background: rgba(255,255,255,1);
  transition: all .1s ease-out;
}

.level-menu-toggle:before {
  top: -10px;
  transform-origin: left;
}

.level-menu-toggle:after {
  top: 10px;
  transform-origin: left;
}

.reset-progress {
  display: block;
  text-align: center;
  text-decoration: none;
  border: solid 2px rgba(255,255,255,.2);
  box-sizing: border-box;
  width: calc(100% - 40px);
  color: rgba(255,255,255,.4);
  margin:  0 auto;
  padding: 0.5em;
}

.reset-progress:hover {
  background: rgba(255,255,255,.05);
}
</style>