<template>
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    :class="{ hovered: isHovered }"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <g clip-path="url(#clip0_113_378)">
      <path
        d="M18.438 32H22V46H42V32H45.562L32 18.406L18.438 32ZM32 0C14.327 0 0 14.327 0 32C0 49.673 14.327 64 32 64C49.673 64 64 49.673 64 32C64 14.327 49.673 0 32 0ZM46.018 34H44.016V46C44.016 47.104 43.12 48 42.018 48H38.016H26.017H22.016C20.912 48 20.016 47.104 20.016 46V36C20.013 36 20.011 36.002 20.008 36.002V36H20.016V34H18.016C16.912 34 16.016 33.104 16.016 32H15.978C15.982 31.898 16.038 31.808 16.075 31.713C16.196 30.902 16.783 30.275 17.571 30.09L31.503 16.186C31.824 15.865 32.147 15.865 32.468 16.186L46.384 30.075C47.307 30.253 48.018 31.026 48.018 32.001C48.016 33.104 47.12 34 46.018 34Z"
        :fill="isHovered ? 'red' : color"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_113_378">
        <rect width="64" height="64" fill="white"></rect>
      </clipPath>
    </defs>
  </svg>
</template>

<script setup>
import { reactive, ref } from "vue";
defineProps({
  color: String,
});

const isHovered = ref(false);
</script>

<style>
.hovered path {
  fill: red;
}
</style>
