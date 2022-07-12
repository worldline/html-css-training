<template>
  <div class="customer-wrapper">
    <div class="customer-speech-bubble"></div>
    <div class="customer-head"></div>
    <div class="customer-body">
      <div class="code">
        <pre>table {
  color: brown
}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Customer"
}
</script>

<style scoped>
.customer-wrapper{
  position: relative;
  display: inline-block;
  margin: 150px 50px 50px 50px;
  width: 200px;
  height: 300px;
}

.customer-speech-bubble {
  position: absolute;
  left: 20px;
  top: -80px;
  height: 100px;
  width: 180px;
  background-color: antiquewhite;
  color: black;
  border-radius: 50%;
  border: 4px solid black;
}

.customer-speech-bubble::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  color: black;
  border-top: 20px solid antiquewhite;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  position: absolute;
  top: 80px;
  left: 35px;
  transform: rotate(20deg);
}

.customer-head {
  position: absolute;
  left: 30px;
  top: 30px;
  border-radius: 50%;
  background: white;
  width: 100px;
  height: 100px;
  border: 4px solid black;
  z-index: 2;
}

.customer-body {
  position: absolute;
  left: 0;
  top: 100px;
  padding-top: 40px;
  border-radius: 80px 80px 0 0;
  background: white;
  width: 160px;
  height: 140px;
  border: 4px solid black;

}

.code {
  font-family: menlo,monospace;
  font-size: 14px;
  text-align: left;
  line-height: 150%;
  padding: 0;
  margin: .5em;
}
</style>