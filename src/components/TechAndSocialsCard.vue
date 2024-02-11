<script setup lang="ts">
    import { ref } from "vue";

    // Technologies
    import rustLogo from "@/assets/svg/rust.svg";
    import typescriptLogo from "@/assets/svg/typescript.svg";
    import javaLogo from "@/assets/svg/java.svg";
    import dockerLogo from "@/assets/svg/docker.svg";
    import vueLogo from "@/assets/svg/vue.svg";
    import gitLogo from "@/assets/svg/git.svg";
    import linuxLogo from "@/assets/svg/linux.svg";
    // Socials
    import githubLogo from "@/assets/svg/github.svg";
    import twitterLogo from "@/assets/svg/twitter.svg";
    import youtubeLogo from "@/assets/svg/youtube.svg";
    import discordLogo from "@/assets/svg/discord.svg";

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
            <div class="item-list flex g-xxl j-center wrap p-x">
                <img class="item" :src="rustLogo" alt="The Rust Programming Language logo">
                <img class="item" :src="typescriptLogo" alt="Typescript logo">
                <img class="item" :src="javaLogo" alt="Java Programming Language logo">
                <img class="item" :src="dockerLogo" alt="Java Programming Language logo">
                <img class="item" :src="gitLogo" alt="Java Programming Language logo">
                <img class="item" :src="vueLogo" alt="Java Programming Language logo">
                <img class="item" :src="linuxLogo" alt="Java Programming Language logo">
            </div>
        </div>

        <!-- MY SOCIALS :3 -->
        <div v-else class="content full-h full-w">
            <div class="item-list flex g-xxl j-center wrap p-x">
                <a href="https://github.com/notKimu" target="_blank">
                    <img class="item" :src="githubLogo" alt="Kimu's Github page">
                </a>
                <a href="https://twitter.com/notkimu" target="_blank">
                    <img class="item" :src="twitterLogo" alt="Kimu's Twitter page">
                </a>
                <a href="https://www.youtube.com/@kimu_x64" target="_blank">
                    <img class="item" :src="youtubeLogo" alt="Kimu's Youtube channel">
                </a>
                <a href="https://discord.gg/NfeXrQdXdE" target="_blank">
                    <img class="item" :src="discordLogo" alt="Kimu's Discord server">
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .active {
        background-color: var(--fg-light);
    }
    .active * {
        color: var(--bg-dark);
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
    }
    .selector button {
        padding: .2rem 1rem;
    }

    .content {
        padding: 1rem;
    }

    .item {
        height:  clamp(3rem, 15dvw, 6rem);
        filter:  saturate(0);
    }
    .item:hover {
        filter: none;
        scale: .97;
    }
</style>