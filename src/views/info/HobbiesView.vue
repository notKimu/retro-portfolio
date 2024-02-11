<script setup lang="ts">
    import "@/assets/styles/info/base.css";
    import WobblyText from "@/components/text/Wobbly.vue";

    import bridgetSingingGif from "@/assets/animations/bridget_walk.gif";
</script>

<template>
    <main class="flex col g-xxl">
        <h1 class="hobbies__title font-pixel text-title">
            <span>> </span>
            <WobblyText text="Hobbies" :delay="0.05" />
        </h1>

        <main class="hobbies__content grid g-x">
            <img class="hobbies__content__sideimage" :src="bridgetSingingGif" />

            <h3 class="hobbies__content__text">
                Video and photo editing are one of the things I love doing the most
                <br><br>
                I still dunnou what to write here JHDSUOAHFAHDFAJDHFAJKHDAF
                <br><br><br>
                :3
            </h3>
        </main>
    </main>
</template>

<!-- STYLES -->
<style scoped>
    .hobbies__content {
        grid-template-columns: auto 1fr;
    }
    
    .hobbies__content__sideimage { width: clamp(5rem, 20dvw, 10rem) }
</style>