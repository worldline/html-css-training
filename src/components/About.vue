<template>
  <div class="credits" v-if="credits">
    <p v-html="credits"></p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { currentChapter } from '../chapters/chapters';

const credits = computed(() => currentChapter.value.credits)
</script>

<style scoped>

.credits {
  text-align: center;
  padding: 20px 0;
  width: 725px;
  color: rgba(255,255,255,.3);
  font-size: 15px;
  margin: 0 auto;
  font-weight: 400;
}


.credits ::v-deep(a) {
  color: white;
  opacity: .5;
  text-decoration: none;
}

.credits ::v-deep(a:hover) {
  opacity: .7;
}
</style>