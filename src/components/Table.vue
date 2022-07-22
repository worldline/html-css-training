<template>
  <div class="table-wrapper">
    <div class="table-surface" ref="surface"></div>
    <div class="table">
      <div class="hint-content" v-if="hintContent" v-html="hintContent"></div>
      <div v-if="content" v-html="content" ref="board" class="table-board"></div>
      <div v-else ref="board" class="table-board"><slot /></div>
    </div>
    <div class="table-edge" ref="edge">
      <div class="table-leg"></div>
      <div class="table-leg"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Table",
  props: ["content", "hintContent"]
}
</script>

<style scoped>
.table-wrapper {
  display: inline-block;
  transform: rotateX(20deg);
  min-height: 120px;
  transform-origin: bottom;
  z-index: 9999;
  position: relative;
  margin: 10px 20px 30px 20px;
  width: auto;
}

.table {
  transform-style: preserve-3d;
  outline: solid 1px transparent;
  margin: 0 auto;
  padding: 15px;
  display: inline-block;
  z-index: 999;
  position:relative;
  white-space: nowrap;
}

.hint-content {
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
}

.hint-content ::v-deep(.hint-wrapper){
  display: flex; 
  margin: 20px 10px 0 10px; 
  position: absolute;
  top: 0;
  bottom: 2px;
  left: 0;
  right: 0;
}

.table-surface {
  box-shadow: 0 40px 10px rgba(0,0,0,.2);
  background: #dd992d;
  background: -webkit-linear-gradient(#dd992d,#cd8c26);
  background: linear-gradient(#dd992d,#cd8c26);
  position: absolute;
  height: 100%;
  bottom: 0;
  width: 100%;
}

.table-board ::v-deep(sushi) {
  z-index: 100;
}

.table .hint-content ::v-deep(plate, sushi){
  z-index: 1;
}


.table-edge  {
  width: 100%;
  margin: 0 auto 10px auto;
  background: #ac741c;
  height: 15px;
  transform: rotateX(-40deg);
  transform-origin: top;
  z-index: 2;
  position: absolute;
  top: 100%;
}

.table-leg {
  width: 24px;
  height: 10px;
  background: #84570f;
  position: absolute;
  top: 15px;
}

.table-leg:first-child {
  left: 20px;
}

.table-leg:last-child {
  right: 20px;
}

</style>