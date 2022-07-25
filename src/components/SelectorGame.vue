<template>
  <p class="order">{{ level.doThis }}</p>
  <div class="game-container">
    <div class="game-wrapper">
      <Table :content="level.markup"></Table>
    </div>
  </div>
  <Editor placeholder="Type in a CSS selector" @input="fireRule">
    <template v-slot:code-after>
        <br/>{<br/>
        /* Styles would go here. */<br/>
        }
    </template>
  </Editor>

</template>

<script setup lang="ts">
import Editor from "./Editor.vue";
import {state} from "../game";
import Table from "./Table.vue"
import { computed } from "vue";
import { Chapter2Level } from "../chapters/chapter2";
import { fireRule } from "../css-editor";

const level = computed(() => state.level as Chapter2Level)
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
</style>