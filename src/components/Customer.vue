<template>
  <div class="customer-wrapper">
    <div class="customer-speech-bubble">{{ request }}</div>
    <div class="customer-head"></div>
    <div class="customer-body">
      <div class="code">
        <pre>{{ selector }} {
  meal: {{ meal }};
}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  request: String,
  selector: String,
  meal: String
})
</script>

<style scoped>
.customer-wrapper{
  position: relative;
  display: inline-block;
  margin: 100px 10px 0 10px;
  width: 200px;
  height: 250px;
}

.customer-speech-bubble {
  position: absolute;
  left: 20px;
  top: -80px;
  height: 100px;
  width: 180px;
  background-color: white;
  color: black;
  border-radius: 50%;
  border: 4px solid black;
  padding: 1.1em;
  display: flex;
  align-items: center;
}

.customer-speech-bubble::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  color: black;
  border-top: 20px solid white;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  position: absolute;
  top: 80px;
  left: 45px;
  transform: rotate(20deg);
}

.customer-head {
  position: absolute;
  left: 30px;
  top: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fff, #ccc);
  width: 100px;
  height: 100px;
  border: 4px solid black;
  z-index: 2;
}

.customer-body {
  position: absolute;
  left: 0;
  top: 100px;
  padding-top: 20px;
  border-radius: 50px 50px 0 0;
  background: linear-gradient(135deg, #fff, #ccc);
  width: 160px;
  height: 120px;
  border: 4px solid black;

}

.code {
  font-family: menlo,monospace;
  font-size: 14px;
  text-align: left;
  line-height: 150%;
  padding: 0;
  margin: .5em;
  color: #666;
}
</style>