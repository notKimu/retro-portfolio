<script setup lang="ts">
    import "@/assets/styles/info/base.css";
    import WobblyText from "@/components/text/Wobbly.vue";
</script>

<template>
    <main class="flex col g-xxl">
        <h1 class="hobbies__content font-pixel text-title">
            <span>> </span>
            <WobblyText text="Hobbies" :delay="0.05" />
        </h1>

        <main class="info__content"></main>
    </main>
</template>
