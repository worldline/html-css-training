<template>
<div class="markup">
  <div ref="container"></div>
</div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";

const props = defineProps({
  markup: String
})

const container = ref<HTMLElement | null>(null)
onMounted(updateMarkup)

watch(() => props.markup, updateMarkup)

function updateMarkup(){
  const el = document.createElement("div");
  el.innerHTML = props.markup ?? "";
  if(container.value){
    container.value.innerHTML = getMarkup(el, true).innerHTML
  }
}

function getMarkup(el: Element, ignoreRoot: boolean){
  const elName = el.tagName.toLowerCase();
  const wrapperEl = document.createElement("div")
  const attributeString = el.getAttributeNames()
      .map(attr => `${attr}="${el.getAttribute(attr)}"`)
      .join(" ")

  const children = Array.from(el.children)
  if(children.length > 0) {
    if(!ignoreRoot) wrapperEl.textContent = `<${elName}${attributeString?" "+attributeString:''}>`;
    children.forEach(child => wrapperEl.appendChild(getMarkup(child, false)));
    if(!ignoreRoot)  wrapperEl.appendChild(document.createTextNode(`</${elName}>`))
  } else {
    wrapperEl.textContent = `<${elName}${attributeString?" "+attributeString:''} />`;
  }
  return wrapperEl;
}

</script>

<style>

.markup {
  line-height: 150%;
  font-family: menlo, sans-serif;
  z-index: 1;
  margin-bottom: -5px;
}

.markup * {
  color: rgba(255,255,255,.75);
}

.markup div {
  padding-left: 20px;
}

.markup > div {
  padding-left: 0;
}

.markup * {
  font-family: menlo,monospace;
  cursor: default;
}
</style>