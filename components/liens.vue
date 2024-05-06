<template>
  <div class="liens">
    <NuxtLink class="liens__link" to="/projets">
      <div class="liens__liens">
        <p class="liens__texte">{{ lien_projet }}</p>
        <IconsFleche class="liens__icons" />
      </div>
    </NuxtLink>
    <NuxtLink class="liens__link" to="/apropos">
      <div class="liens__liens">
        <p class="liens__texte">{{ lien_apropos }}</p>
        <IconsFleche class="liens__icons" />
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.liens {
  &__liens {
    transition: border 0.1s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: rem(0) rem(40);
    margin: rem(20);
    margin-bottom: 0px;
    gap: rem(50);
    @include x-large-up {
      gap: rem(140);
    }
    &:hover {
      border-bottom: none;
    }
  }
  &__link {
    text-decoration: none;
    &::after {
      content: "";
      display: block;
      height: 0.15rem;
      background: black;
      transform: scale(0);
      transition: transform 0.6s;
      transform-origin: right;
      animation: fade-in 0.6s;
    }
    &:hover::after {
      transform: scale(1);
      transform-origin: left;
    }
  }
  &__texte {
    text-transform: uppercase;
    font-family: $primary-font-family;
    font-size: $small-font-size;
    text-decoration: none;
    font-weight: 700;
    color: $secondary-color;

    @include large-up {
      font-size: $regular-font-size;
    }
  }
  &__icons {
    width: rem(25);
  }
}

@keyframes smooth {
  0% {
    opacity: 0;
  }

  90% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}
</style>

<script setup>
defineProps({
  lien_projet: String,
  lien_apropos: String,
});
</script>
