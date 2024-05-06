<template>
  <svg
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    :class="{ hovered: isHovered }"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <path
      d="M19.5 0.75C9.33562 0.75 0.75 9.3375 0.75 19.5C0.75 29.6625 9.33562 38.25 19.5 38.25C29.6644 38.25 38.25 29.6625 38.25 19.5C38.25 9.3375 29.6644 0.75 19.5 0.75ZM19.5 25.125C21.36 25.125 22.9688 24.6281 23.7994 23.7975L26.4506 26.4506C24.3394 28.56 21.1894 28.875 19.5 28.875C14.3306 28.875 10.125 24.6694 10.125 19.5C10.125 14.3306 14.3306 10.125 19.5 10.125C21.1894 10.125 24.3412 10.44 26.4506 12.5494L23.7994 15.2006C22.9706 14.37 21.3619 13.875 19.5 13.875C16.4513 13.875 13.875 16.4513 13.875 19.5C13.875 22.5487 16.4513 25.125 19.5 25.125Z"
      :fill="isHovered ? 'red' : 'black'"
    ></path>
  </svg>
</template>

<script setup>
import { reactive, ref } from "vue";

const isHovered = ref(false);
</script>

<style>
.hovered path {
  fill: red;
}
</style>
