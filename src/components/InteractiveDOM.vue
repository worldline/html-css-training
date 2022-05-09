<template>
  <p class="order" :style="{ opacity: level.order && !hasWon ? 1 : 0 }">{{level.order || '&nbsp;'}}</p>
  <iframe src="demo/chapter1.html" ref="iframe" scrolling="no"></iframe>
  <p v-if="level.order && level.selector">Use the <b>3D</b> view and the <b>Ctrl</b> key to select elements in the DOM.</p>
  <button @click="toggleView" id="button-3d">{{is3D ? '2D' : '3D'}}</button>
</template>

<script setup lang="ts">
import { Chapter1Level } from "../chapters/chapter1";
import {completeLevel, state} from "../game";
import { toggle3D } from "../dom-viewer";
import {computed, ref} from "vue";
import { useEventListener } from "@vueuse/core";
import { shake } from "../utils";

const level = computed(() => state.level as Chapter1Level);
const is3D = ref(false)
const iframe = ref(null)
const hasWon = ref(false)

function toggleView(){
  if(!iframe.value) return;
  const demo = iframe.value as HTMLIFrameElement
  if(is3D.value === true && demo.contentWindow){
    demo.contentWindow.location.reload()
    is3D.value = false;
  } else {
    toggle3D(demo)
    is3D.value = true;
  }
}

useEventListener("message", message => {
  if(message.data.event === "elementClick"){
    const tag = message.data.tag
    if(tag == null || !state.level.selector) return;
    let clicked = tag;
    if(message.data.type != null) clicked += `[type="${message.data.type}"]`
    if(clicked === state.level.selector){
      hasWon.value = true;
      setTimeout(() => {
        hasWon.value = false;
        completeLevel()
      }, 600) 
    } 
    else shake("iframe")
  }
})
</script>

<style scoped>
iframe {
  width: 980px;
  height: 640px;
  border: 1px solid #888;
  margin: auto;
}

#button-3d {
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: 200%;
}

.order {
  transition: opacity 500ms linear;
}
</style>