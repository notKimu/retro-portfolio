<script setup lang="ts">
    const props = defineProps({
        text:  String,
        delay: {
            type: Number,
            default: 0.02,
        },
    });

    let currentDelay = 0;
    function addDelay(): void {
        currentDelay += props.delay;
    }
</script>

<template>
    <span
        class="wobbly-text"
        :style="{ animationDelay: `${currentDelay}s` }"
        v-for="letter in text"
    >
        {{ letter }}{{ addDelay() }}
    </span>
</template>

<style scoped>
    .wobbly-text {
        opacity:   0;
        position:  relative;
        animation: wobbly 1s infinite linear, reveal .1s linear forwards;
    }

    @keyframes wobbly {
        0% {
            bottom: 0;
        }
        50% {
            bottom: 2px;
        }
        100% {
            bottom: 0;
        }
    }

    @keyframes reveal {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>