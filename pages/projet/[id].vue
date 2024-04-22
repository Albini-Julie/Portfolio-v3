<template>
  <div class="intro">
    <img class="intro__img" src="/plage.jpg" />
    <div class="intro__contentBlock">
      <Header home color="#000" annee="2024" />
      <div class="intro__content">
        <h1 class="intro__titre">Développement web</h1>
        <p class="intro__texte">
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression.
        </p>
      </div>
      <div class="intro__flecheBlock">
        <IconsFleche-longue class="intro__fleche" color="#000" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro {
  @include large-up {
    display: flex;
  }
  &__img {
    height: 55vh;
    width: 100%;
    @include large-up {
      width: 50%;
      height: 50vh;
    }
    @include x-large-up {
      width: 40%;
    }
  }
  &__contentBlock {
    @include large-up {
      width: 60%;
    }
  }
  &__content {
    margin: rem(0) rem(60);
    @include medium-up {
      width: 70%;
    }
    @include x-large-up {
      width: 70%;
    }
  }
  &__titre {
    font-family: $secondary-font-family;
    font-size: $medium-font-size;
    margin-top: 0px;
    @include x-large-up {
      font-size: $big-font-size;
    }
  }
  &__texte {
    font-family: $primary-font-family;
    font-size: $small-font-size;
    font-weight: 300;
    @include x-large-up {
      font-size: $regular-font-size;
    }
  }
  &__flecheBlock {
    display: flex;
    justify-content: center;
  }
  &__fleche {
    transform: rotate(90deg);
    margin-top: rem(50);
  }
}
</style>

<script setup></script>
