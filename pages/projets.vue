<template>
  <div class="caroussel">
    <div class="slides">
      <Projet
        :style="{ zIndex: slide === 0 ? 50 : 1 }"
        color="#FFD700"
        colorText="#000000"
        v-if="slide === 0"
        :class="{ 'slide-animation-1': slide === 0 }"
      />
      <Projet
        :style="{ zIndex: slide === 1 ? 50 : 1 }"
        color="#105A13"
        colorText="#FFFFFF"
        v-if="slide === 1"
        :class="{ 'slide-animation-2': slide === 1 }"
      />
      <Projet
        :style="{ zIndex: slide === 2 ? 50 : 1 }"
        color="#16105A"
        colorText="#FFFFFF"
        v-if="slide === 2"
        :class="{ 'slide-animation-3': slide === 2 }"
      />
      <Projet
        :style="{ zIndex: slide === 3 ? 50 : 1 }"
        color="#970051"
        colorText="#FFFFFF"
        v-if="slide === 3"
        :class="{ 'slide-animation-4': slide === 3 }"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slides {
  height: 100vh;
}

.slide-animation-1 {
  animation: slideFromLeft 0.5s ease-out forwards;
}

.slide-animation-2 {
  animation: slideFromLeft 0.5s ease-out forwards;
}

.slide-animation-3 {
  animation: slideFromLeft 0.5s ease-out forwards;
}

.slide-animation-4 {
  animation: slideFromLeft 0.5s ease-out forwards;
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
import { slide } from "~/config";

const BackColor = ref("");

if (slide === 0) {
  BackColor.value = "#FFD700";
} else if (slide === 1) {
  BackColor.value = "#105A13";
} else if (slide === 2) {
  BackColor.value = "#16105A";
} else if (slide === 2) {
  BackColor.value = "#16105A";
}
</script>
