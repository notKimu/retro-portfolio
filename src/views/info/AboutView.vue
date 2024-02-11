<script setup lang="ts">
    import "@/assets/styles/info/base.css";
    import WobblyText from "@/components/text/Wobbly.vue";

    import mayGif from "@/assets/animations/may_anggy.gif";
</script>

<template>
    <main class="flex col g-xxl">
        <h1 class="about__title font-pixel text-title">
            <span>> </span>
            <WobblyText text="About me" :delay="0.05" />
        </h1>

        <div class="about__content">
            <!-- Presentation image -->
            <div class="full-w flex j-center g-xx">
                <img width="50%" :src="mayGif" />
                <p class="adaptive-text-m">
                    Heya!
                    <br>
                    I am Kimu =w=
                </p>
            </div>

            <div class="divider" />

            <!-- About me content -->
            <p class="adaptive-text-x">
                A young && smol software developer that likes messing around with computers and software.
                <br><br>
                
                Currently I am learning about Linux systems and building my own servers from scratch, I love 
                using old computers as servers.
                <br><br>

                As of sotfware, I like coding Discord bots and Minecraft plugins.
                <br>
                Rust and TypeScript are my main programming languages, I am trying to find others that I like but
                I end up returning to these two... Always.
                <br><br>

                
            </p>
        </div>
    </main>
</template>
