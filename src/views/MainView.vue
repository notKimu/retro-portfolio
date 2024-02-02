<script setup lang="ts">
  import "../assets/styles/windows.css";
  import ProfileCard from "@/components/ProfileCard.vue";
  import TechAndSocialsCard from "@/components/TechAndSocialsCard.vue";
  import InfoCard from "@/components/InfoCard.vue";

  // Sadly I have to mess up the code and import the images
  // ... *sigh*
  import aboutIcon from "@/assets/img/heart.svg";
  import projectsIcon from "@/assets/img/article.svg";
  import workstationIcon from "@/assets/img/computer.svg";
  import downasaurIcon from "@/assets/img/downasaur.svg";
</script>

<template>
  <main class="flex col g-xxl">
    <ProfileCard />

    <TechAndSocialsCard />

  <div class="information grid g-x">
      <InfoCard title="About" to="/about" :icon-url="aboutIcon" />
      <InfoCard title="Projects" to="/about" :icon-url="projectsIcon" />
      <InfoCard title="Workstation" to="/about" :icon-url="workstationIcon" />
      <InfoCard title="lol" to="/about" :icon-url="downasaurIcon" />
    </div>
  </main>
</template>

<style scoped>
.information {
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

/** RESPONSIVE */
@media screen and (max-width: 1024px) {
  .information {
  grid-template-columns: 1fr 1fr;
}
}
</style>