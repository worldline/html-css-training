<template>
  <div class="table-wrapper">
    <div class="table-surface" ref="surface"></div>
    <div class="table">
      <div v-if="content" v-html="content" ref="board" class="table-board"></div>
      <div v-else ref="board" class="table-board"><slot /></div>
    </div>
    <div class="table-edge" ref="edge">
      <div class="table-leg"></div>
      <div class="table-leg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: ["content"]
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
  margin: 10px 20px 0 20px;
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

.table plate {
  z-index: 99999;
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