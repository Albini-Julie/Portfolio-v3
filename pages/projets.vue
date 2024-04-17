<template>
  <div class="caroussel">
    <div class="slides">
      <div style="background-color: #ffd700">
        <Projet
          :style="{ zIndex: slide === 0 ? 50 : 1 }"
          color="#FFD700"
          colorText="#000000"
          v-if="slide === 0"
          :class="{
            'slide-animation': slide === 0 && anime,
            'slide-animation-2': slide === 0 && anime === false,
          }"
        />
      </div>
      <div style="background-color: #105a13">
        <Projet
          :style="{ zIndex: slide === 1 ? 50 : 1 }"
          color="#105A13"
          colorText="#FFFFFF"
          v-if="slide === 1"
          :class="{
            'slide-animation': slide === 1 && anime,
            'slide-animation-2': slide === 1 && anime === false,
          }"
        />
      </div>
      <div style="background-color: #16105a">
        <Projet
          :style="{ zIndex: slide === 2 ? 50 : 1 }"
          color="#16105A"
          colorText="#FFFFFF"
          v-if="slide === 2"
          :class="{
            'slide-animation': slide === 2 && anime,
            'slide-animation-2': slide === 2 && anime === false,
          }"
        />
      </div>
      <div style="background-color: #970051">
        <Projet
          :style="{ zIndex: slide === 3 ? 50 : 1 }"
          color="#970051"
          colorText="#FFFFFF"
          v-if="slide === 3"
          :class="{
            'slide-animation': slide === 3 && anime,
            'slide-animation-2': slide === 3 && anime === false,
          }"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
</script>
