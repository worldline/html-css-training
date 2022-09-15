<template>
<div class="chapter-intro">
    <h1>Chapter {{state.progress.currentChapter}}:
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
}
.chapter-name {
    margin: 0.25em 0;
    font-size: 200%;
}

hr {
    width: 50%;
}
</style>