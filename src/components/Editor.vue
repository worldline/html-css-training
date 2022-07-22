<template>
  <div class="editor" @click="inputElement?.focus()">
    <EditorPane title="CSS Editor" fileName="style.css" lang="css">
      <slot name="code-before" />
      <textarea id="editor-input" class="input-strobe" type="text"
               ref="inputElement"
               @keydown.enter="enterHit"
               @keyup.prevent="onInputKeyup"
               :placeholder="placeholder"
               :style="inputStyle"/>
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

const getInputValue = () => inputElement.value ? inputElement.value.value : "";
const enterButton: Ref<HTMLElement | null> = ref(null)
const inputElement: Ref<HTMLTextAreaElement | null> = ref(null)

const level = computed(() => state.level)

const inputStyle = computed(() => ({
  height: (state.level.inputLinesNumber ?? 1) * 1.5 + "em"
}))

//Animate the enter button
function enterHit(event: Event){
  const inputValue = getInputValue()
  const lines = inputValue.split('\n')
    .map(l => l.trim())
    .map(l => l.endsWith(';') ? l : l+';')
  if(lines.length >= (level.value.inputLinesNumber ?? 1)){
    event.preventDefault()
    const button = enterButton.value as HTMLElement;
    button.classList.remove("enterhit")
    setTimeout(() => button.classList.add("enterhit"), 0)    
  }
  if(inputElement.value) inputElement.value.value = lines.join('\n')
  emit("input", lines.join('\n'))
}

function onInputKeyup(){
  const input = inputElement.value as HTMLTextAreaElement;
  input.classList.toggle("input-strobe", input.value.length > 0)
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
  padding: 0 7px 0 7px;
  color: #666;
  border: solid 1px #999;
  border-bottom-width: 5px;
  position: relative;
  font-size: 9px;
  cursor: pointer;
  line-height: 16px;
  z-index: 2;
  vertical-align: middle;
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
  font-size: 14px;
  color: #333;
  border: none;
  width: calc(100% - 64px);
  background: none;
  margin-left: 1em;
  outline: none;
  resize: none;
  overflow: auto;
  height: 1.4em;
  vertical-align: middle;
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