<template>
  <a class="boutons__lien" :href="lien">
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
  @include medium-up {
    width: rem(150);
  }
  &__texte {
    font-family: $primary-font-family;
    font-size: $regular-font-size;
    text-transform: uppercase;
    color: $secondary-color;
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
