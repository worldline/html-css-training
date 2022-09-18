<template>
  <p class="order">{{ level.doThis }}</p>
  <div class="game-container">
    <div class="game-wrapper">
      <CorrectAnim />
      <div class="game-content" v-html="level.markup" :class="level.wrapperClass || currentChapter.wrapperClass">

      </div>
      <div class="expected-result">
        <p>Expected result:</p>
        <img :src="level.expectedScreenshot" />
      </div>
    </div>
  </div>
  <Editor placeholder="Type styles here" @input="applyUserRules($event)">
    <template v-slot:code-before>
      <link v-for="url in hiddenImports" rel="stylesheet" :href="url" />
      <link v-for="url in imports" rel="stylesheet" :href="url" />
      <template v-for="importRule in imports">@import "{{importRule}}";<br/></template>
      <br v-if="imports">
      <template v-for="(rules, selector) in otherRules" :key="'selector_'+selector">
        {{selector}} {<br />
          <template v-for="rule in rules" :key="selector+'_'+rule">&nbsp;&nbsp;{{rule}};<br /></template>
        }<br /><br />
      </template>
      {{level.selector}} {<br />
        <template v-for="rule in ((level.cssRules ?? {})[level.selector] ?? [])" :key="level.selector+'_'+rule">&nbsp;&nbsp;{{rule}};<br/></template>
    </template>
    <template v-slot:code-after>
        <br/>}
    </template>
  </Editor>
</template>

<script setup lang="ts">
import Editor from "./Editor.vue";
import {state, currentChapter} from "../state";
import CorrectAnim from "./CorrectAnim.vue";
import { computed, nextTick, ref, watch } from "vue";
import { applyUserRules } from "../css-editor";
import { Chapter7Level } from "../chapters/chapter7";

const level = computed(() => state.level as Chapter7Level)
const otherRules = computed(() => Object.fromEntries(Object.entries(level.value.cssRules ?? {}).filter(([key]) => key !== level.value.selector)))
const imports = computed(() => level.value.cssImports)
const hiddenImports = computed(() => level.value.cssImportsHidden)

const markup = ref("")
watch(() => level, () => {
  // force rerendering HTML when changing level to cleanup styles
  markup.value = ""
  nextTick(() => { markup.value = level.value.markup ?? "" })
})
</script>

<style scoped>
.game-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  color: #202020;
}

pre {
  margin: 0;
}

.expected-result {
  perspective: 1000px;
}
.expected-result p {
  color: white;
  font-style: italic;
  height: 1em;
  margin: 0 0 1em 0;
}

.expected-result img {  
  transform: rotateY(-10deg) rotateX(15deg) scale(0.9) translateY(-20px);
  box-shadow: 0 0 25px rgba(255,255,255,0.5);
  transition: transform 0.3s ease-in-out;
}

.expected-result img:hover {
  transform: translateY(-2em);  
}

.menu-wrapper {
  width: 520px;
  min-height: 200px;
  margin: 2rem;
  background: antiquewhite;
  color: #202020;
  padding: 0.5rem 1rem;
  text-align: left;
  box-shadow: 0 0 10px black;
}

.menu-wrapper ::v-deep(h1){
  margin: 0
}
.menu-wrapper ::v-deep(h2) {
  margin: 0.25em;
}

.menu-wrapper-part2 {
  width: 520px;
  min-height: 200px;
  margin: 0;
  background: antiquewhite;
  color: #202020;
  padding: 0;
  text-align: left;
  box-shadow: 0 0 10px black;
}

.menu-wrapper-part2 ::v-deep(main) {
  display: inline-block;
  width: 100%
}


.menu-wrapper-part2 ::v-deep(ul) {
  list-style: none;
  margin: 0.5em;
  padding: 0;
}

.menu-wrapper-part2 ::v-deep(h1),
.menu-wrapper-part2 ::v-deep(h2) {
  margin: 0;
  padding: 0.25em;
}

</style>