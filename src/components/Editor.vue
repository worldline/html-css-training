<template>
  <div class="editor" @click="inputElement?.focus()">
    <EditorPane title="CSS Editor" fileName="style.css" lang="css">
      <input class="input-strobe" type="text"
               ref="inputElement"
               @keydown.enter.prevent="enterHit"
               @keyup.prevent="onInputKeyup"
               placeholder="Type in a CSS selector"/>
        <span class="plus">+</span>
        <div class="enter-button" @click="enterHit" ref="enterButton">enter</div>
        <div>
          {<br/>
          /* Styles would go here. */<br/>
          }
        </div>
    </EditorPane>
    <EditorPane title="HTML Viewer" fileName="table.html" lang="html"> 
      <HTMLMarkup :markup="level.tableMarkup" />
    </EditorPane>
  </div>
</template>

<script setup lang="ts">
import EditorPane from "./EditorPane.vue";
import HTMLMarkup from "./HTMLMarkup.vue";
import {computed, ref, Ref} from "vue"

import {state} from "../game";
import { Chapter2Level, fireRule } from "../chapters/chapter2";

let inputValue="";
const enterButton: Ref<HTMLElement | null> = ref(null)
const inputElement: Ref<HTMLElement | null> = ref(null)

const level = computed(() => state.level as Chapter2Level)

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
  fireRule(text);
}

function onInputKeyup(){
  const input = inputElement.value as HTMLInputElement;
  inputValue = input.value
  input.classList.toggle("input-strobe", inputValue.length > 0)
}
</script>

<style>
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
</style>