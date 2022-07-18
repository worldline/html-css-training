<template>
<div class="editor-pane" :class="lang+'-view'">
      <div class="input-header">
        <div class="file-name" v-if="fileName">{{ fileName }}</div>
        {{ title }}
      </div>
      <div class="file-window" >
        <div class="line-numbers"><template v-for="n in nbLines">{{n}}<br /></template></div>
        <slot />
      </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    title: String,
    fileName: { type: String, required: false },    
    lang: String,
    nbLines: { type: Number, default: 20 }
});
</script>

<style>
.editor-pane {  
  flex: 1;
}

.editor-pane:last-child {
  border-right: solid 1px rgba(255,255,255,.03);
  border-bottom: solid 1px rgba(255,255,255,.03);
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
  height: 100%;
}

.editor .css-view .file-window {
  background: #efefef;
  color: #AAA;

}

.editor .file-name {
  float: right;
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
  animation: enterhit .1s 1;
}

@keyframes enterhit {
  50% {
    border-width: 1px 1px 2px 1px;
    top: 12px;
  }
}

input {
  font-family: menlo, monospace;
  color: #333;
  border: none;
  width: calc(100% - 44px);
  background: none  ;
}

input.input-strobe {
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