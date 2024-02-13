<script setup lang="ts">
    import "@/assets/styles/info/base.css";
    import WobblyText from "@/components/text/Wobbly.vue";

    import artixDesktop from "@/assets/img/workstation_artix.webp";
</script>

<template>
    <main class="flex col g-xxl">
        <h1 class="workstation__title font-pixel text-title">
            <span>> </span>
            <WobblyText text="Workstation" :delay="0.05" />
        </h1>

        <div class="workstation__content">
            <!-- Presentation image -->
            <div class="full-w flex j-center">
                <img class="workstation-img" :src="artixDesktop" />
            </div>

            <div class="divider" />

            <!-- About me content -->
            <p class="adaptive-text-x">
                My main OS is Artix Linux, which I use with Windows in a dual boot.
                <br><br>
                I've tried tons of Linux distros but I always end up with Artix, so I will 
                stick with that for a while.
                
            </p>
        </div>
    </main>
</template>

<!-- STYLES -->
<style scoped>
    .workstation-img { width: 50%; }

    /**RESPONSIVE */
    @media screen and (max-width: 728px) {
        .workstation-img { width: 100%; }
    }
</style>