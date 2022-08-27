<template>
    <div id="correct-animation">
        ✔️ Correct
    </div>
</template>

<style>
@keyframes correct {
    0% {
        opacity: 0;
        top: 50px;
    }
    10%{
        opacity: 1;
    }
    90%{
        opacity: 0;
    }
    100%{
        top: 0;
        opacity: 0;
    }
}
#correct-animation {
    animation: correct 1500ms linear;
    animation-fill-mode: forwards;
    position: absolute;
    left: 90%;
    font-size: 5rem;
    color: lime;
    z-index: 10;
    display: none;
}

.win #correct-animation {
    display: block;
}
</style>