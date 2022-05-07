<template>
  <div class="editor" @click="inputElement?.focus()">

    <div class="editor-pane">
      <div class="input-header">
        <div class="file-name">style.css</div> CSS Editor
      </div>
      <div class="file-window css-view">
        <div class="line-numbers">
          1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15<br/>16<br/>17<br/>18<br/>19<br/>20
        </div>
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
      </div>
    </div>

    <div class="editor-pane html-view">
      <div class="input-header">
        <div class="file-name">table.html</div>
        HTML Viewer
      </div>
      <div class="file-window">
        <div class="line-numbers">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15<br/>16<br/>17<br/>18<br/>19<br/>20</div>
        <HTMLMarkup :markup="state.level.boardMarkup" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, Ref} from "vue"
import HTMLMarkup from "./HTMLMarkup.vue";
import {state} from "../game";
import { fireRule } from "../chapters/chapter2";

let inputValue="";
const enterButton: Ref<HTMLElement | null> = ref(null)
const inputElement: Ref<HTMLElement | null> = ref(null)

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

<style scoped>

.editor {
  position: relative;
  text-align: left;
  width: 90%;
  margin: 0 auto;
  border: solid 10px rgba(0,0,0,.35);
  border-radius: 4px;
  overflow: hidden;
}

.editor-pane {
  float: left;
  width: 50%;
}

.editor-pane:last-child {
  border-right: solid 1px rgba(255,255,255,.03);
  border-bottom: solid 1px rgba(255,255,255,.03);
}

.editor * {
  font-family: menlo,monospace;
  font-size: 14px;
  line-height: 150%;
  padding: 0;
  margin: 0;
}

.editor .input-header {
  text-align: left;
  padding: 10px 15px;
  background: rgba(0,0,0,.15);
  border-top: solid 1px rgba(255,255,255,.05);
  border-bottom: solid 1px rgba(255,255,255,.05);
  border-radius: 2px 2px 0 0;
  color: rgba(255,255,255,.6);
}

.editor .file-window {
  padding: 10px 10px 10px 46px;
  position: relative;
  min-height: 432px;
}

.editor .css-view {
  background: #efefef;
  color: #AAA;

}

.editor .file-name {
  float: right;
  opacity: .5;
}

.editor .line-numbers {
  position: absolute;
  top: 0;
  left: 0;
  font-family: menlo, monospace;
  padding: 10px 10px;
  height: 100%;
  line-height: 150%;
  text-align: right;
}

.css-view .line-numbers {
  color: #999;
  background: #DDD;
}

.html-view .line-numbers {
  color: #666;
  border-right: solid 1px #333;
}

.html-view .file-window {
  background: rgba(0,0,0,.3);
}

.editor input {
  font-family: menlo, monospace;
  color: #333;
  border: none;
  width: calc(100% - 44px);
  background: none  ;
}

.editor input.input-strobe {
  background: rgba(62,203,255,.3);
  -webkit-animation: input .5s infinite;
  -moz-animation: input .5s infinite;

}

@-webkit-keyframes input {
  50% { background:none ; }
}

@-moz-keyframes input {
  50% { background:none ; }
}

.editor input:focus {
  outline: none;
  border-color: #555;
}

.enter-button {
  background: #ddd;
  display: block;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  padding: 2px 7px 2px 7px;
  color: #666;
  border: solid 1px #999;
  border-bottom-width: 6px;
  position: absolute;
  font-size: 9px;
  cursor: pointer;
  top: 7px;
  right: 7px;
  z-index: 999;
}

.enterhit {
  -webkit-animation: enterhit .1s 1;
  animation: enterhit .1s 1;
}

@-webkit-keyframes enterhit {
  50% {
    border-width: 1px 1px 2px 1px;
    top: 12px;
  }
}
@keyframes enterhit {
  50% {
    border-width: 1px 1px 2px 1px;
    top: 12px;
  }
}

</style>