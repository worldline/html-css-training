<template>
  <p class="order">{{ state.level.doThis }}</p>
  <div class="game-container">
    <div class="game-wrapper">
      <Table :content="state.level.boardMarkup"></Table>
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

.table-wrapper {
  display: inline-block;
  transform: rotateX(20deg);
  min-height: 120px;
  transform-origin: bottom;
  z-index: 9999;
  position: relative;
  margin: 10px auto 0 auto;
  width: auto;
}

.table {
  transform-style: preserve-3d;
  outline: solid 1px transparent;
  margin: 0 auto;
  padding: 15px;
  display: inline-block;
  z-index: 999;
  position:relative;
  white-space: nowrap;
}

.table-surface {
  box-shadow: 0 40px 10px rgba(0,0,0,.2);
  background: #dd992d;
  background: -webkit-linear-gradient(#dd992d,#cd8c26);
  background: linear-gradient(#dd992d,#cd8c26);
  position: absolute;
  height: 100%;
  bottom: 0;
  width: 100%;
}

.table plate {
  z-index: 99999;
}

.table-edge  {
  width: 100%;
  margin: 0 auto 10px auto;
  background: #ac741c;
  height: 15px;
  transform: rotateX(-40deg);
  transform-origin: top;
  z-index: 2;
}

.table-leg {
  width: 24px;
  height: 10px;
  background: #84570f;
  position: absolute;
  top: 15px;
}

.table-leg:first-child {
  left: 20px;
}

.table-leg:last-child {
  right: 20px;
}
</style>