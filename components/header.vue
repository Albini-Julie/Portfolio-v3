<template>
  <div class="header">
    <h2 class="header__annee">{{ annee }}</h2>
    <div class="header__iconsBloc">
      <a :href="header.data.lien_cv.url" download>
        <IconsDownload class="icons --download" />
      </a>
      <NuxtLink to="/">
        <IconsHome v-if="home" class="icons" :color="color" />
      </NuxtLink>
    </div>
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
    color: v-bind(color);
    @include large-up {
      font-size: $big-font-size;
    }
  }
  &__iconsBloc {
    gap: rem(10);
    display: flex;
    align-items: center;
  }
}
.icons {
  width: 50px;
  @include large-up {
    width: 70px;
  }
  &.--download {
    opacity: 0;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 1;
    }
  }
}
</style>

<script setup>
defineProps({
  home: Boolean,
  annee: String,
  color: String,
});
// Appel du client usePrismic pour avoir accès aux données de la single page menu
const { client } = usePrismic();
const { data: header, error } = await useAsyncData("header", () =>
  client.getSingle("header")
);
console.log(header);
</script>
