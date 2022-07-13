<template>
  <p class="order">{{ state.level.doThis }}</p>
  <div class="game-container">
    <div class="game-wrapper">
      <Table :content="state.level.tableMarkup"></Table>
    </div>
  </div>
  <Editor />
</template>

<script setup lang="ts">
import Editor from "./Editor.vue";
import {state} from "../game";
import Table from "./Table.vue"

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
</style>