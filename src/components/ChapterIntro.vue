<template>
<div class="chapter-intro">
    <h1 v-if="state.progress.currentChapter === 0" class="main-title">HTML/CSS Training</h1>
    <h1 v-else>Chapter {{state.progress.currentChapter}}:
        <p class="chapter-name">{{currentChapter.name}}</p>
    </h1>
    <hr>
    <p>{{currentChapter.description}}</p>
</div>
</template>

<script lang="ts" setup>
import { state, currentChapter } from "../state"
</script>

<style scoped>
.chapter-intro {
    height: calc(100vh - 150px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #e0e0e0;
    text-shadow: 0 0 1em black;
}

.main-title {
    margin: 0.25em 0;
    font-size: 500%;
}
.chapter-name {
    margin: 0.25em 0;
    font-size: 200%;
}

hr {
    width: 50%;
}
</style>