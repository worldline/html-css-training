<template>
  <p class="order">{{ level.doThis }}</p>
  <div class="game-container">
    <div class="game-wrapper">
      <CorrectAnim />
      <Table :content="level.markup"></Table>
    </div>
  </div>
  <Editor placeholder="Type in a CSS selector" @input="trySelector($event[0])">
    <template v-slot:code-after>
        <br/>{<br/>
        /* Styles would go here. */<br/>
        }
    </template>
  </Editor>

</template>

<script setup lang="ts">
import Editor from "./Editor.vue";
import {completeLevel} from "../game";
import Table from "./Table.vue";
import CorrectAnim from "./CorrectAnim.vue";
import { computed } from "vue";
import { Chapter2Level } from "../chapters/chapter2";
import { cleanupEffects, shake } from "../utils";
import { resetEditor } from "../chapters/level";
import { state } from "../state";

const level = computed(() => state.level as Chapter2Level)

function trySelector(rule: string) {
  const level = state.level as Chapter2Level;

  cleanupEffects();

  const baseTable = document.querySelector(".table-content")!;
  const gameWrapper = document.querySelector(".game-wrapper")!;

  // Check if selector will throw an error trying the mystery rule
  // If it errors out, change the rule to null so the wrong-guess animation will work
  try {
    baseTable.querySelectorAll(rule);
  } catch (err) {
    rule = "";
  }

  const matches = rule
    ? (Array.from(baseTable.querySelectorAll(rule)) as HTMLElement[])
    : []; // What the person finds
  const solutionMatches = Array.from(
    baseTable.querySelectorAll(level.selector)
  ); // What the correct rule finds

  let win = false;

  // If nothing is selected
  if (matches.length == 0) {
    shake(document.querySelector(".editor")!);
  }

  if (matches.length === solutionMatches.length && matches.length > 0) {
    win = checkMatches(matches, solutionMatches);
  }

  if (win) {
    gameWrapper.classList.add("win");
    matches.forEach((el) => {
      el.classList.remove("strobe");
      el.classList.add("clean");
    });
    resetEditor()

    //$(".input-wrapper").css("opacity",.2);
    setTimeout(function () {
      gameWrapper.classList.remove("win");
      completeLevelAndGoNext();
    }, 1000);
  } else {
    matches.forEach((el) => {
      el.classList.remove("strobe");
      shake(el);
    });

    setTimeout(function () {
      cleanupEffects();
      solutionMatches.forEach((el) => {
        el.classList.add("strobe");
      });
    }, 500);
  }
}

function checkMatches(matches: Element[], solutionMatches: Element[]) {
  return (
    matches.length === solutionMatches.length &&
    matches.every((el) => solutionMatches.includes(el))
  );
}
</script>

<style scoped>
.game-wrapper {
  transform: translate3d(0,0,0);
  perspective: 500px;
  text-align: center;
  position: relative;
  padding-top: 15px;
  margin-bottom: 50px;
  display: inline-block;
}

::v-deep(#editor-input){
  margin-left: 0;
}
</style>