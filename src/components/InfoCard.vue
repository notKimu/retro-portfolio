<script setup lang="ts">
    defineProps({
        title:   String,
        iconUrl: String,
    });
</script>

<template>
    <div class="card window grid ratio-square p-x">
        <div class="img__container full-h full-w grid p-center p-x">
            <img class="img" :src="iconUrl" alt="">
        </div>

        <h2>{{ title }}</h2>
    </div>
</template>

<style scoped>
    .card {
        grid-template-rows: 1fr 2rem;
        overflow:           hidden;
    }
    .card:hover {
        background-color: var(--fg-light);
    }
    .card:hover h2, .card:hover img {
        filter: invert();
    }

    .img {
        max-height: 100%;
    }
    .img__container {
        max-height: 100%;

    }
</style>