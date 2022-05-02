<template>
  <div class="left-col">
    <Header />
    <h2 class="order">{{ state.level.doThis }}</h2>
    <GameWrapper />
    <Editor />
    <About />
  </div>
</template>

<script setup>
import GameWrapper from "./GameWrapper.vue";
import Editor from "./Editor.vue";
import About from "./About.vue";
import Header from "./Header.vue";
import { state } from "../game";
</script>

<style scoped>
.left-col {
  width: calc(100% - 375px);
  text-align: center;
  overflow-x: visible;
}


.order {
  color: rgba(255,255,255,.5);
  font-size: 45px;
  margin: 0;
  font-weight: 400;
  text-align: center;
  padding: 20px 30px;
}

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

</style>