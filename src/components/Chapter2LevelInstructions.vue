<template>
  <div class="display-help" v-if="state.level">    
    <h3 class="title">{{ state.level.helpTitle }}</h3>
    <p class="syntax" v-if="state.level.syntax">{{ state.level.syntax }}</p>
    <div class="hint" v-html="state.level.help"></div>
    <h4 class="examples-title" v-if="state.level.examples?.length > 0">Examples</h4>
    <div class="examples">
      <div class='example' v-for="example in state.level.examples" :key="example" v-html="example"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { state } from "../game"
</script>

<style scoped>
.display-help {
  font-size: 15px;
  color: rgba(255,255,255,.6);
}

.display-help .selector-name {
  font-size: 18px;
  margin: 0 0 4px 0 ;
}

.display-help .syntax {
  font-size: 24px;
  margin: 0 0 18px 0;
  font-weight: 200;
  opacity: .8;
  background: rgba(255,255,255,.05);
  display: inline-block;
  padding: 5px 8px;
  border-bottom: solid 2px rgba(255,255,255,.1);
}

.display-help .hint {
  margin-bottom: 20px;
  line-height: 150%;
}

.display-help .examples-title {
  margin: 45px 0 10px 0;
  padding: 0;
}

.display-help .hint,
.display-help .example {
  color: #888;
  font-size: 15px;
}

.display-help .example {
  border-bottom: solid 1px rgba(255,255,255,.1);
  padding: 10px 0 12px 0;
  line-height: 170%;
}

.display-help .example:last-child {
  border: none;
}

.display-help strong,
.display-help tag {
  color: #AAA;
  background: rgba(255,255,255,.1);
  padding: 3px 6px 3px 6px;
  margin: 0 2px;
  font-size: 13px;
  font-family: menlo,monospace;
  font-weight: normal;
}

.display-help .example strong:first-of-type {
  margin-left: 0;
}

.display-help .selector-wrapper {
  color: #777;
}

.display-help .selector {
  background: #DDD;
  margin: 5px 0 10px 0;
  padding: 14px 20px 14px 20px;
  font-size: 24px;
  border: solid 1px #DDD;
  font-family: menlo, monospace;
  display: none;
  color: #666;
  position: relative;
}

.display-help .selector:before {
  content: "Try";
  color: #999;
  position: absolute;
  font-size: 15px;
  font-weight: normal;
  top: 8px;
  left: -55px;
  padding: 10px;
}
</style>