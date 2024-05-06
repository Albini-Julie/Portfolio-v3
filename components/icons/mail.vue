<template>
  <svg
    viewBox="0 0 37 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    :class="{ hovered: isHovered }"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <path
      d="M19.3527 21.1894C18.9012 21.641 18.1699 21.641 17.7178 21.1894L16.8044 20.276L13.2882 23.7031H23.7534L20.2384 20.3043L19.3527 21.1894ZM25.5566 13.2969H11.4995L18.5 20.2344L25.5566 13.2969ZM10.4062 13.8785V23.7031H11.5978L15.9499 19.4221L10.4062 13.8785ZM25.4728 23.7031H26.5938V13.949L21.1201 19.4221L25.4728 23.7031ZM18.5 0C8.2828 0 0 8.2828 0 18.5C0 28.7172 8.2828 37 18.5 37C28.7172 37 37 28.7172 37 18.5C37 8.2828 28.7172 0 18.5 0ZM27.75 23.7031C27.75 24.3414 27.232 24.8594 26.5938 24.8594H10.4062C9.768 24.8594 9.25 24.3414 9.25 23.7031V13.2969C9.25 12.6586 9.768 12.1406 10.4062 12.1406H26.5938C27.232 12.1406 27.75 12.6586 27.75 13.2969V23.7031Z"
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
