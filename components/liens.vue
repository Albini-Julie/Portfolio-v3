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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: rem(0) rem(40);
    border-bottom: solid 2px $secondary-color;
    margin: rem(20);
    gap: rem(50);

    @include x-large-up {
      gap: rem(140);
    }
  }
  &__link {
    text-decoration: none;
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
</style>

<script setup>
defineProps({
  lien_projet: String,
  lien_apropos: String,
});
</script>
