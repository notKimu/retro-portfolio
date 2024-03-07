<script setup lang="ts">
    import { RouterLink } from "vue-router";

    defineProps({
        title:   String,
        iconUrl: String,
        path:    String,
    });
</script>

<template>
    <RouterLink :to="path ?? '/'" class="card window full-h full-w grid ratio-square p-x">
        <div class="img__container flex p-x">
            <img class="img full-h full-w" :src="iconUrl" alt="">
        </div>

        <h2 class="adaptive-text-m overflow-hidden text-ellipsis">{{ title }}</h2>
    </RouterLink>
</template>

<style scoped>
    .card {
        grid-template-rows: 1fr 2rem;
    }
    .card:hover {
        background-color: var(--fg-light);
    }
    .card:hover h2, .card:hover img {
        filter: invert();
    }
</style>