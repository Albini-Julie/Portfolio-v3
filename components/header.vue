<template>
  <div class="header">
    <h2 class="header__annee">{{ annee }}</h2>
    <NuxtLink to="/">
      <IconsHome v-if="home" class="icons" />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: rem(25) rem(40);
  @include large-up {
    padding: rem(50) rem(60);
  }
  @include x-large-up {
    padding: rem(50) rem(60);
  }
  &__annee {
    font-family: $primary-font-family;
    font-size: $medium-font-size;
    font-weight: 500;
    @include large-up {
      font-size: $big-font-size;
    }
  }
}
.icons {
  width: 50px;
  @include large-up {
    width: 70px;
  }
}
</style>

<script setup>
defineProps({
  home: Boolean,
  annee: String,
});
</script>
