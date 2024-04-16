<template>
  <div class="projet">
    <img class="projet__img" src="/plage.jpg" />
    <div class="projet__contentBlock">
      <div class="projet__content">
        <Header home :color="colorText" annee="2023" />
        <h2 class="projet__titre">Développement front</h2>
        <p class="projet__texte">
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression.
        </p>
        <div class="projet__voir">
          <p class="projet__voirTexte">voir le projet</p>
          <IconsFleche-cercle :color="colorText" />
        </div>
        <div class="projet__fleches">
          <IconsFleche-gauche :color="colorText" @click="prevSlide" />
          <IconsFleche-droite :color="colorText" @click="nextSlide" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  color: String,
  colorText: String,
});

import { slide } from "~/config";
const prevSlide = () => {
  slide.value -= 1;
  if (slide.value === -1) {
    console.log(slide.value);
    slide.value = 3;
  }
};
const nextSlide = () => {
  slide.value += 1;
  if (slide.value == 4) {
    console.log(slide.value);
    slide.value = 0;
  }
};
</script>

<style lang="scss" scoped>
.projet {
  @include large-up {
    display: flex;

    height: 100vh;
  }

  &__img {
    height: 50vh;
    width: 100%;
    @include large-up {
      width: 50%;
      height: 100vh;
    }
  }
  &__contentBlock {
    background-color: v-bind(color);
    @include only-medium {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  &__content {
    height: 50vh;
    margin: rem(0) rem(30);

    @include medium-up {
      width: 65%;
    }
    @include large-up {
      margin: rem(0) rem(60);
      height: 100vh;
      width: 90%;
    }
    @include x-large-up {
      height: 50vh;
    }
  }
  &__titre {
    font-family: $secondary-font-family;
    font-size: $medium-font-size;
    margin-top: 0px;
    color: v-bind(colorText);
    @include x-large-up {
      font-size: $big-font-size;
    }
  }
  &__texte {
    font-size: $small-font-size;
    font-family: $primary-font-family;
    margin-top: 0px;
    color: v-bind(colorText);
    @include large-up {
      width: 80%;
    }
    @include x-large-up {
      font-size: $regular-font-size;
    }
  }
  &__voir {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: rem(10);
    margin-right: rem(40);
    @include large-up {
      justify-content: start;
    }
  }
  &__voirTexte {
    font-size: $regular-font-size;
    text-transform: uppercase;
    font-family: $primary-font-family;
    color: v-bind(colorText);
    @include x-large-up {
      font-size: rem(25);
    }
  }
  &__fleches {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: rem(30);
    @include x-large-up {
      position: relative;
      left: 0;
      bottom: 0;
    }
  }
}
</style>
