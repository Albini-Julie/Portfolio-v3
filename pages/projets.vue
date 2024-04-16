<template>
  <div class="caroussel">
    <div class="slides">
      <Projet color="#FFD700" colorText="#000000" v-if="slide === 0" />
      <Projet color="#105A13" colorText="#FFFFFF" v-if="slide === 1" />
      <Projet color="#16105A" colorText="#FFFFFF" v-if="slide === 2" />
      <Projet color="#970051" colorText="#FFFFFF" v-if="slide === 3" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slides {
  height: 100vh;
}
</style>

<script setup>
import { slide } from "~/config";
</script>
