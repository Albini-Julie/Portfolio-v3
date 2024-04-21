<template>
  <div class="intro">
    <img class="intro__img" src="/plage.jpg" />
    <div>
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
  &__img {
    height: 55vh;
    width: 100%;
  }
  &__content {
    margin: rem(0) rem(30);
  }
  &__titre {
    font-family: $secondary-font-family;
    font-size: $medium-font-size;
    margin-top: 0px;
  }
  &__texte {
    font-family: $primary-font-family;
    font-size: $small-font-size;
    font-weight: 300;
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
