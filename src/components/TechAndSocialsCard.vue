<script setup lang="ts">
    import { ref } from "vue";

    // Technologies
    import rustLogo from "@/assets/img/rust.svg";
    import typescriptLogo from "@/assets/img/typescript.svg";
    import javaLogo from "@/assets/img/java.svg";
    import dockerLogo from "@/assets/img/docker.svg";
    import vueLogo from "@/assets/img/vue.svg";
    import gitLogo from "@/assets/img/git.svg";
    import linuxLogo from "@/assets/img/linux.svg";
    // Socials
    import githubLogo from "@/assets/img/github.svg";
    import twitterLogo from "@/assets/img/twitter.svg";
    import discordLogo from "@/assets/img/discord.svg";

    let showSocials = ref(false);
</script>

<template>
    <div class="window langs-and-socials grid">
        <div class="selector grid g-x">
            <button
                :class="showSocials.valueOf() ? 'inactive' : 'active'"
                @click="showSocials = false"
            >
                <h2>Tech</h2>
            </button>

            <button
                :class="showSocials.valueOf() ? 'active' : 'inactive'"
                @click="showSocials = true"
            >
                <h2>Socials</h2>
            </button>
        </div>

        <!-- TECHNOLOGIES I USE -->
        <div v-if="!showSocials" class="content full-h full-w">
            <div class="item-list flex g-x j-center wrap">
                <img class="item" :src="rustLogo" alt="The Rust Programming Language logo">
                <img class="item" :src="typescriptLogo" alt="Typescript logo">
                <img class="item" :src="javaLogo" alt="Java Programing Language logo">
                <img class="item" :src="dockerLogo" alt="Java Programing Language logo">
                <img class="item" :src="gitLogo" alt="Java Programing Language logo">
                <img class="item" :src="vueLogo" alt="Java Programing Language logo">
                <img class="item" :src="linuxLogo" alt="Java Programing Language logo">
            </div>
        </div>

        <!-- MY SOCIALS :3 -->
        <div v-else class="content full-h full-w">
            <div class="item-list flex g-x j-center wrap">
                <img class="item" :src="githubLogo" alt="Kimu's Github page">
                <img class="item" :src="twitterLogo" alt="Kimu's Twitter page">
                <img class="item" :src="discordLogo" alt="Kimu's Discord server">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .active {
        background-color: var(--fg-light);
        & * {
            color: var(--bg-dark);
        }
    }
    .inactive {
        opacity: 0.5;
    }

    .langs-and-socials {
        grid-template-rows: auto 1fr;
    }

    .selector {
        border-bottom:         var(--border-width) solid var(--fg-light);
        grid-template-columns: 1fr 1fr;
        & button {
            padding:          .2rem 1rem;
        }
    }

    .content {
        padding: 1rem;
    }

    .item {
        height:  clamp(3rem, 15dvw, 6rem);
        filter:  saturate(0);
        padding: .7rem;
        &:hover {
            filter: none;
            scale: .97;
        }
    }
</style>