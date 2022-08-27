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
  background: rgba(0,0,0,.65);
  border-top: solid 1px rgba(255,255,255,.15);
  border-bottom: solid 1px rgba(255,255,255,.15);
  border-radius: 2px 2px 0 0;
  color: rgba(255,255,255,.6);
}

.editor .file-window {
  padding: 10px 10px 2px 46px;
  position: relative;
  height: 100%;
}

.editor .css-view .file-window {
  background: rgba(255,255,255,0.9);
  color: #888;

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
  background: rgba(0,0,0,.9);
}
</style>