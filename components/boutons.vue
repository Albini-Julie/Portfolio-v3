<template>
  <a class="boutons__lien" :href="lien" target="_blank">
    <div class="boutons">
      <p class="boutons__texte">{{ texte }}</p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.boutons {
  border: solid 1px $secondary-color;
  width: rem(150);
  padding: rem(1) rem(10);
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  color: $secondary-color;
  transition: border-radius 0.3s ease;
  &:hover {
    border: solid 1px $primary-color;
    border-radius: 20px;
    color: $primary-color;
    background-color: $secondary-color;
  }
  @include medium-up {
    width: rem(150);
  }

  &__texte {
    font-family: $primary-font-family;
    font-size: $regular-font-size;
    text-transform: uppercase;

    @include large-up {
      font-size: rem(20);
    }
  }
  &__lien {
    text-decoration: none;
  }
}
</style>

<script setup>
defineProps({
  texte: String,
  lien: String,
});
</script>
