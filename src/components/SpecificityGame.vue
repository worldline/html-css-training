<template>
  <div class="game-container">
    <div class="game-wrapper">
      <CorrectAnim />
      <Table :content="level.markup" @click="onTableClick" ref="table"></Table>
      <div class="actions">
        <button @click="submitSolution" id="submit-button">Validate</button>
      </div>
      <div class="customers">
        <Customer v-for="customer in level.customers" v-bind="customer"/>
      </div>
      <div class="editor" >
        <EditorPane title="HTML Viewer" fileName="table.html" lang="html">
          <HTMLMarkup :markup="level.markup" />
        </EditorPane>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Table from "./Table.vue";
import CorrectAnim from "./CorrectAnim.vue";
import HTMLMarkup from "./HTMLMarkup.vue";
import EditorPane from "./EditorPane.vue";
import Customer from "./Customer.vue";

import {state} from "../game";
import { Chapter3Level, trySolution } from "../chapters/chapter3";
import { computed, ref } from "vue";

const level = computed(() => state.level as Chapter3Level) 

function onTableClick(event: Event){
  const plate = (event.target as HTMLElement).closest("plate")
  if(plate) toggleMeal(plate as HTMLElement)
}

const meals = ["sushi", "toast", "apple", "pickle"]
function toggleMeal(plate: HTMLElement){
  const child = plate.firstChild as (HTMLElement | null)
  const nextMeal = meals[meals.indexOf(child?.tagName?.toLowerCase() ?? "soup") + 1] || "sushi"
  if(child == null) plate.appendChild(document.createElement(nextMeal))
  else plate.replaceChild(document.createElement(nextMeal), child)
}

const table = ref<InstanceType<typeof Table> | null>(null)
function submitSolution(){
  const plates = table.value.$el.querySelectorAll("plate") 
  const items = [...plates].map((el: HTMLElement) => el.firstElementChild ? el.firstElementChild.tagName.toLowerCase() : "")
  trySolution(items)
}

</script>

<style scoped>
.editor {
  position: relative;
  text-align: left;
  width: 90%;
  margin: 0 auto;
  border: solid 10px rgba(0,0,0,.35);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  font-family: menlo,monospace;
  font-size: 14px;
  line-height: 150%;
}
.helper {
  position: absolute;
  background: white;
  padding: 10px 15px 12px 15px;
  z-index: 30;
  font-size: 18px;
  color: #666;
  border-bottom: solid 2px #BBB;
  box-shadow: 0 5px 0 rgba(0,0,0,.2);
  display: none;
  transform: rotateX(20deg);
  outline: solid 1px transparent;
  white-space: nowrap;
}

.game-wrapper {
  transform: translate3d(0,0,0);
  perspective: 500px;
  text-align: center;
  position: relative;
  padding-top: 15px;
  margin-bottom: 50px;
  display: inline-block;
  perspective: 1500px;
}

.game-wrapper ::v-deep(plate){
  cursor: pointer;
}

.game-wrapper ::v-deep(.table-wrapper){
  user-select: none;
}

.actions {
  margin-top: 1rem;
}
</style>
