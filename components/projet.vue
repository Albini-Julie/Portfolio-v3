<template>
  <div class="projet">
    <img class="projet__img" :src="image" />
    <div class="projet__contentBlock">
      <div class="projet__content">
        <Header home :color="colorText" :annee="annee" />
        <h2 class="projet__titre">{{ titre }}</h2>
        <p class="projet__texte">
          {{ description }}
        </p>
        <div class="essai">
          <NuxtLink class="projet__lien" :to="href">
            <div class="projet__voir">
              <p class="projet__voirTexte">{{ voir }}</p>
              <IconsFleche-cercle :color="colorText" />
            </div>
          </NuxtLink>
        </div>

        <div class="projet__fleches">
          <IconsFleche-longue
            class="projet__fleche --gauche"
            :color="colorText"
            @click="prevSlide"
          />
          <IconsFleche-longue
            class="projet__fleche"
            :color="colorText"
            @click="nextSlide"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  color: String,
  colorText: String,
  annee: String,
  titre: String,
  description: String,
  voir: String,
  image: String,
  href: String,
});

import { slide, anime } from "~/config";
const prevSlide = () => {
  slide.value -= 1;
  anime.value = false;
  if (slide.value === -1) {
    console.log(slide.value);
    slide.value = 3;
  }
};
const nextSlide = () => {
  anime.value = true;
  slide.value += 1;
  if (slide.value == 4) {
    console.log(slide.value);
    slide.value = 0;
  }
};
</script>

<style lang="scss" scoped>
.essai {
  width: fit-content;
}
.projet {
  @include large-up {
    display: flex;
    height: 100vh;
  }

  &__img {
    height: 50vh;
    width: 100%;
    @include large-up {
      width: 30%;
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
    @include large-up {
      width: 70%;
      height: 100vh;
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
    font-size: $smaller-font-size;
    font-family: $primary-font-family;
    margin-top: 0px;
    color: v-bind(colorText);
    @include large-up {
      width: 80%;
      font-size: $small-font-size;
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
    width: fit-content;
    @include large-up {
      width: 100%;
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
    margin-top: rem(10);

    @include x-large-up {
      position: relative;
      left: 0;
      bottom: 0;
    }
  }
  &__fleche {
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
      transform: translateX(20px);
    }
    &.--gauche {
      transform: rotate(180deg);
      &:hover {
        transform: translateX(-20px) rotate(180deg);
      }
    }
  }
  &__lien {
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
}
</style>
