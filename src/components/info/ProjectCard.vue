<script setup lang="ts">
    defineProps({
        title:       String,
        description: String,
        image:       String,
    });
</script>

<template>
    <div class="project relative flex row g-x p-m overflow-hidden">
        <img class="project__img" :src="image" alt="">

        <div class="project__text full-w flex col">
            <h1 class="adaptive-text-x">{{ title }}</h1>
            <h3 class="adaptive-text-m">{{ description }}</h3>
        </div>
    </div>
</template>

<style scoped>
    .project {
        height:           10rem;
        background-color: black;
    }

    /**FANCY STUFF */
    .project:hover::before {
        content:          "";

        position:         absolute;
        left:             -5rem;
        top:              0;
        height:           100%;
        width:            5rem;

        background-color: rgba(255, 255, 255, 0.249);
        transform:        skewX(-15deg);

        animation:        shine 3s cubic-bezier(0.23, 1, 0.320, 1) forwards;
    }

    @keyframes shine {
        0% {
            filter:  blur(10px);
            left:    -10rem;
            opacity: 0;
        }
        50% {
            filter:  blur(0);
            opacity: 1;
        }

        100% {
            filter:  blur(10px);
            left:    100%;
            opacity: 0;
        }
    }
</style>