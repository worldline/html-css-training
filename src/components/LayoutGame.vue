<template>
  <p class="order">{{ level.doThis }}</p>
  <div class="game-container">
    <div class="game-wrapper" :class="level.wrapperClass">
      <CorrectAnim />
      <Table :content="level.markup" :hintContent="level.hintMarkup" :key="level.name"></Table>
    </div>
  </div>
  <Editor placeholder="Type styles here" @input="applyUserRules($event)">
    <template v-slot:code-before>
      <template v-for="(rules, selector) in otherRules" :key="'selector_'+selector">
        {{selector}} {<br />
          <template v-for="rule in rules" :key="selector+'_'+rule">&nbsp;&nbsp;{{rule}};<br /></template>
        }<br /><br />
      </template>
      {{level.selector}} {<br />
        <template v-for="rule in getRulesOf(level.selector)" :key="level.selector+'_'+rule">&nbsp;&nbsp;{{rule}};<br/></template>
    </template>
    <template v-slot:code-after>
        <br/>}
    </template>
  </Editor>
</template>

<script setup lang="ts">
import Editor from "./Editor.vue";
import {state} from "../game";
import Table from "./Table.vue"
import CorrectAnim from "./CorrectAnim.vue";
import { computed, Ref } from "vue";
import { Chapter4Level } from "../chapters/chapter4";
import { applyUserRules} from "../css-editor";

const level: Ref<Chapter4Level> = computed(() => state.level as Chapter4Level)
const otherRules = computed(() => Object.fromEntries(Object.entries(level.value.cssRules ?? {}).filter(([key]) => key !== level.value.selector)))
const getRulesOf = (selector: string) => level.value.cssRules ? level.value.cssRules[selector] || [] : []

</script>

<style scoped>
.game-wrapper {
  transform: translate3d(0,-50px,0);
  perspective: 500px;
  text-align: center;
  position: relative;
  padding-top: 15px;
  display: inline-block;
}

pre {
  margin: 0;
}

.game-wrapper.va-initial ::v-deep(.table > *) {
  vertical-align: initial;
}

/*.game-wrapper.flex-game ::v-deep(plate){
  margin: 10px;
}*/
.game-wrapper.flex-game ::v-deep(sushi) {
  margin: 20px;
}
</style>