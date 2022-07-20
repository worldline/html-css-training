<template>
  <div class="editor" @click="inputElement?.focus()">
    <EditorPane title="CSS Editor" fileName="style.css" lang="css">
      <slot name="code-before" />
      <input id="editor-input" class="input-strobe" type="text"
               ref="inputElement"
               @keydown.enter.prevent="enterHit"
               @keyup.prevent="onInputKeyup"
               :placeholder="placeholder"/>
        <span class="plus">+</span>
        <div class="enter-button" @click="enterHit" ref="enterButton">enter</div>
        <slot name="code-after" />
    </EditorPane>
    <EditorPane title="HTML Viewer" fileName="table.html" lang="html"> 
      <HTMLMarkup :markup="level.markup" />
    </EditorPane>
  </div>
</template>

<script setup lang="ts">
import EditorPane from "./EditorPane.vue";
import HTMLMarkup from "./HTMLMarkup.vue";
import {computed, ref, Ref} from "vue"

import {state} from "../game";

defineProps({
  placeholder: String
});

const emit = defineEmits([ "input" ])

let inputValue="";
const enterButton: Ref<HTMLElement | null> = ref(null)
const inputElement: Ref<HTMLElement | null> = ref(null)

const level = computed(() => state.level)

//Animate the enter button
function enterHit(){
  const button = enterButton.value as HTMLElement;
  button.classList.remove("enterhit")
  setTimeout(() => button.classList.add("enterhit"), 0)
  handleInput(inputValue);
}

//Parses text from the input field
function handleInput(text: string){
  const input = inputElement.value as HTMLInputElement;
  inputValue = input.value
  emit("input", text)
}

function onInputKeyup(){
  const input = inputElement.value as HTMLInputElement;
  inputValue = input.value
  input.classList.toggle("input-strobe", inputValue.length > 0)
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

.enter-button {
  background: #ddd;
  display: inline-block;
  border-radius: 2px;
  padding: 2px 7px 2px 7px;
  color: #666;
  border: solid 1px #999;
  border-bottom-width: 6px;
  position: relative;
  font-size: 9px;
  cursor: pointer;
  z-index: 999;
}

.enterhit {
  animation: enterhit .1s 1;
}

@keyframes enterhit {
  50% {
    border-width: 1px 1px 2px 1px;
    top: 12px;
  }
}

#editor-input {
  font-family: menlo, monospace;
  color: #333;
  border: none;
  width: calc(100% - 64px);
  background: none;
  margin-left: 1em;
}

#editor-input.input-strobe {
  background: rgba(62,203,255,.3);
  animation: input .5s infinite;  
}

@keyframes input {
  50% { background:none ; }
}

input:focus {
  outline: none;
  border-color: #555;
}
</style>