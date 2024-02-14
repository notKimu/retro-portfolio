<script setup lang="ts">
    // Audio crap
    import voice_1 from "@/assets/audio/voices/voice_1.mp3";
    import voice_2 from "@/assets/audio/voices/voice_2.mp3";
    import voice_3 from "@/assets/audio/voices/voice_3.mp3";
    import voice_4 from "@/assets/audio/voices/voice_4.mp3";
    import voice_5 from "@/assets/audio/voices/voice_5.mp3";
    import voice_6 from "@/assets/audio/voices/voice_6.mp3";
    import voice_7 from "@/assets/audio/voices/voice_7.mp3";
    import voice_8 from "@/assets/audio/voices/voice_8.mp3";
    import voice_9 from "@/assets/audio/voices/voice_9.mp3";

    const audioFiles =[voice_1, voice_2, voice_3, voice_4, voice_5, voice_6, voice_7, voice_8, voice_9];

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

    function getRandomVoice(): string {
        const randomVoiceNumber = Math.floor(Math.random() * 8);
        return audioFiles[randomVoiceNumber];
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