<template>
  <div class="level-menu">
    <h2>Choose a level</h2>
    <div class="chapters-list">
      <ul class="chapters">
        <li v-for="(chapter, ci) in chapters" :key="'chapter_'+chapter.name">
          <a :class="{
              current: (ci+1) === state.progress.currentChapter,
              opened: (ci+1) === openedChapter
             }"
             class="chapter-name"
             @click="toggleChapter(ci+1)">
            <span class="chapter-number">{{ci+1}}</span> {{chapter.name}}
            <div class="chapter-toggle"></div>
          </a>
          <ul class="levels" v-if="(ci+1) === openedChapter">
            <li v-for="(level, li) in chapter.levels" :key="'level_'+level.name">
              <a
                 :class="{
                   current: (li+1) === state.progress.currentLevel,
                   completed: state.progress.hasCompleted(ci+1, li+1)
                 }"
                 @click="changeLevel(ci+1, li+1)"
              >
                <span class='checkmark'>✔️</span>
                <span class='level-number'>{{li+1}}</span>
                {{level.name}}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <a class="reset-progress" href="#" @click.prevent="resetProgress">Reset Progress</a>
  </div>

  <div class="level-menu-toggle-wrapper" @click="toggleLevelMenu">
    <div class="level-menu-toggle"></div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {chapters} from "../chapters/chapters";
import {changeLevel, state, resetProgress} from "../game";

const openedChapter = ref(state.progress.currentChapter)

function toggleChapter(chapterNumber: number){
  if(chapterNumber === openedChapter.value){
    openedChapter.value = 0
  } else {
    openedChapter.value = chapterNumber
  }
}

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
  background: #1b1813;
  left: 500px;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.chapters-list {
  overflow-y: auto;
  padding-bottom: 60px;
  position: relative;
  flex: 1;
}

.level-menu::after {
  content: "";
  position: absolute;
  bottom: 38px;
  left: 0;
  right: 0;
  height: 48px;
  background: linear-gradient(to top, rgba(27,24,19,1), rgba(0,0,0,0));
}

ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}

.level-menu h2 {
  font-size: 22px;
  color: white;
  opacity: .4;
  font-weight: normal;
  margin: 0;
  padding: 23px 0 14px 16px;
}

.level-menu .checkmark {
  opacity: 0;
  margin-right: 6px;
  margin-left: -16px;
}

.level-menu .completed .checkmark {
  opacity: 0.7;
}

.level-menu .chapters a {
  display: block;
  cursor: pointer;
  padding: 5px 12px 5px 22px;
  color: #777;
}

.chapter-name {
  display: block;
  background-color: #2e2a23;
  font-size: 120%;
  border-top: 1px solid #3e392f;
  position: relative;
  user-select: none;
}

.chapter-name:hover {
  background-color: #3e392f;
}

.levels a.current {
  font-weight: bold;
  color: #AAA;
  background: rgba(255,255,255,.07);
}

.levels a:hover {
  background: rgba(255,255,255,.05);
}

.chapter-number,
.level-number{
  opacity: .6;
  min-width: 24px;
  display: inline-block;
}

.chapter-toggle {
  height: 8px;
  width: 8px;
  transition: transform .15s ease-out;
  cursor: pointer;
  position: absolute;
  top: 14px;
  left: 4px;
  border-width: 1px 1px 0 0;
  border-color: rgba(255,255,255,0.35);
  border-style: solid;
  transform: rotateZ(45deg);
  transform-origin: 6px 2px;
}

.opened .chapter-toggle {
  transform: rotateZ(135deg);
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