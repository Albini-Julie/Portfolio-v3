<template>
  <div class="caroussel">
    <div class="slides">
      <div
        v-for="(projet, index) in projets.data.projet_presentation"
        class="projets"
      >
        <Projet
          :style="{ zIndex: slide === index ? 50 : 1 }"
          :color="projet.projet_color[0].text"
          :colorText="projet.projet_colortext[0].text"
          :annee="projet.projet_annee[0].text"
          :titre="projet.projet_title[0].text"
          :description="projet.projet_description[0].text"
          :voir="projets.data.voir[0].text"
          :image="projet.projet_image.url"
          :href="`/projet/${projet.projet_title[0].text}`"
          v-if="slide === index"
          :class="{
            'slide-animation': slide === index && anime,
            'slide-animation-2': slide === index && anime === false,
          }"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projets {
  background-color: black;
}

.slides {
  height: 100vh;
}

.slide-animation {
  animation: slideFromLeft 0.5s ease-out forwards;
}

.slide-animation-2 {
  animation: slideFromRight 0.5s ease-out forwards;
}

@keyframes slideFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideToLeft {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}

@keyframes slideFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>

<script setup>
import { ref } from "vue";
import { slide, anime } from "~/config";

// Appel du client usePrismic pour avoir accès aux données de la single page menu
const { client } = usePrismic();
const { data: projets, error } = await useAsyncData("projets", () =>
  client.getSingle("projets")
);
console.log(projets);
</script>
