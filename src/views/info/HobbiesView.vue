<script setup lang="ts">
    import "@/assets/styles/info/base.css";
    import WobblyText from "@/components/text/Wobbly.vue";
</script>

<template>
    <main>
        <h1 class="font-pixel text-title">
            <span>> </span>
            <WobblyText text="Hobbies" :delay="0.05" />
        </h1>
    </main>
</template>
