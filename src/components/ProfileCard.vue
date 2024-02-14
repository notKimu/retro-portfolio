<script setup lang="ts">
    import { ref } from "vue";
    import WobblyText from "@/components/text/Wobbly.vue";

    import arrowIcon from "@/assets/svg/play.svg";

    let idx = 0;
    let messageIndex = 0;

    let displayedMessage = ref("Heya! I am Kimu, a smol software engineer that likes messing around with code and computers.");
    const messageList = [
        "My first program was a Discord bot written in Python... With my phone.",
        "My fav programming language is Rust!",
        "I love open source software, knowing how all the stuff you use works is important!",
        "Spaghetti is good but my fingers smell like tomato all day...",
        "I look like an NPC with these messages...",
        "Programming is more about the process and what you give to people rather than the money :3",
        "A long time ago, I tried creating my own videogame. It didn't go very well...",
        "I love minimalist apps that are packed of features.",
        "Nope, I don't use Wordpress, I don't wanna cry.",
        "Stardew Valley is one of my favourite games!",
        "Linux is my mainly driver, Artix Linux to be precise hehe~",
        "I don't like generic, corporate like stuff :<",
    ]

    const randomizeMessage = (): void => {
        let randomMessageIndex = Math.floor(Math.random() * (messageList.length - 1));
        if (randomMessageIndex === messageIndex) {
            randomMessageIndex += 1;
        }
        messageIndex = randomMessageIndex;
        
        // console.warn(randomMessageIndex+"<< Random | Length >> "+messageList.length)
        displayedMessage.value = messageList[randomMessageIndex];
        
        // Update index so the wobbly component re-renders
        idx += 1;
    }
</script>

<template>
    <button v-on:click="randomizeMessage" class="profile window full-w flex g-x p-x">
        <img src="https://github.com/notkimu.png" class="profile__image full-h" alt="Github profile">

        <div class="textbox flex col g-m">
            <h1>Kimu</h1>
            <h1 class="adaptive-text-x">
                <WobblyText :text="displayedMessage" :key="idx" />
            </h1>
        </div>

        <img class="arrow" :src="arrowIcon" alt="" srcset="">
    </button>
</template>

<style scoped>
    .profile {
        position:         relative;
        background-color: transparent;
        text-align:       left;
    }

    .profile__image {
        height: clamp(3rem, 20dvw, 12rem);
    }

    /** Verry fancy stuff */
    .textbox {
        padding-bottom: 3rem;
    }

    .arrow {
        position: absolute;
        bottom:   0;
        right:    0;

        height:   4rem;

        animation: arrow-next 3s infinite linear;
    }

    .animated-text {
        opacity:   0;
        position:  relative;
        animation: wobbly 1s infinite linear, reveal .1s linear forwards;
    }

    @keyframes reveal {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

     @keyframes arrow-next {
        0% {
            right: 0;
        }
        50% {
            right: 1rem;
        }
        100% {
            right: 0;
        }
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
</style>