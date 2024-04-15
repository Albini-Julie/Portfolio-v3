<template>
  <div class="header">
    <h2 class="header__annee">{{ menu.data.annee[0].text }}</h2>
    <IconsHome v-if="home" class="icons" />
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
    padding: rem(0) rem(60);
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
});

// Appel du client usePrismic pour avoir accès aux données de la single page menu
const { client } = usePrismic();
const { data: menu, error } = await useAsyncData("menu", () =>
  client.getSingle("menu")
);
console.log(menu);
</script>
