<template>
  <iframe :src="level.page" ref="iframe"></iframe>
  <button @click="toggleView" id="button-3d">{{is3D ? '2D' : '3D'}}</button>
</template>

<script setup lang="ts">
import { Chapter1Level } from "../chapters/chapter1";
import {state} from "../game";
import { toggle3D } from "../dom-viewer";
import {ref} from "vue";

const level = state.level as Chapter1Level;
const is3D = ref(false)
const iframe = ref(null)

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
}
</style>