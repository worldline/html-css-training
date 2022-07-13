<template>
  <div class="game-container">
    <div class="game-wrapper">
      <Table :content="state.level.tableMarkup" @click="onTableClick"></Table>
      <div class="customers">
        <Customer v-for="customer in state.level.customers" v-bind="customer"/>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import Table from "./Table.vue";
import Customer from "./Customer.vue"

import {state} from "../game";

function onTableClick(event: Event){
  const plate = (event.target as HTMLElement).closest("plate")
  if(plate) toggleMeal(plate as HTMLElement)
}

const meals = ["sushi","apple","orange","pickle", "toast"]
function toggleMeal(plate: HTMLElement){
  const child = plate.firstChild as (HTMLElement | null)
  const nextMeal = meals[meals.indexOf(child?.tagName?.toLowerCase() ?? "soup") + 1] || "sushi"
  if(child == null) plate.appendChild(document.createElement(nextMeal))
  else plate.replaceChild(document.createElement(nextMeal), child)
}
</script>

<style scoped>
.helper {
  position: absolute;
  background: white;
  padding: 10px 15px 12px 15px;
  z-index: 1000;
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
  -webkit-perspective: 400px;
  transform: translate3d(0,0,0);
  perspective: 400px;
  text-align: center;
  position: relative;
  padding-top: 15px;
  margin-bottom: 50px;
  display: inline-block;
}

.game-wrapper ::v-deep(plate){
  cursor: pointer;
}
</style>
