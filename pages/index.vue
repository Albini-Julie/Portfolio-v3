<template>
  <div class="index">
    <Header :annee="index.data.annee[0].text" />
    <div class="index__julieBlock">
      <h1 class="index__titre --julie">{{ index.data.titre_1[0].text }}</h1>
      <Liens
        :lien_apropos="index.data.lien_apropos[0].text"
        :lien_projet="index.data.lien_projets[0].text"
        class="index__liens --desktop"
      />
    </div>
    <div class="index__albiniBlock">
      <h1 class="index__titre --albini">{{ index.data.titre_2[0].text }}</h1>
    </div>
    <Liens
      :lien_apropos="index.data.lien_apropos[0].text"
      :lien_projet="index.data.lien_projets[0].text"
      class="index__liens --mobile"
    />
    <Footer class="index__footer" />
  </div>
</template>

<script setup>
// Appel du client usePrismic pour avoir accès aux données de la single page menu
const { client } = usePrismic();
const { data: index, error } = await useAsyncData("index", () =>
  client.getSingle("index")
);
console.log(index);
</script>

<style lang="scss" scoped>
.index {
  &__titre {
    font-family: $secondary-font-family;
    font-size: $bigger-font-size;
    margin: 0px;
    font-weight: 400;
    @include medium-up {
      font-size: rem(180);
    }
    @include large-up {
      font-size: rem(200);
    }
    @include x-large-up {
      font-size: $giant-font-size;
    }
    &.--julie:hover {
      font-family: $bonus-primary-font-family;
      font-weight: 400;
    }
    &.--albini:hover {
      @include only-small {
        font-size: rem(115);
      }
      font-family: $bonus-secondary-font-family;
      font-weight: 400;
    }
  }
  &__albiniBlock {
    display: flex;
    justify-content: end;
    margin: 0px;
    margin-right: rem(20);
    @include medium-up {
      margin-right: rem(50);
    }
    @include large-up {
      margin-right: rem(100);
      margin-top: rem(0);
    }
    @include x-large-up {
      margin-right: rem(350);
      margin-top: rem(0);
    }
  }
  &__julieBlock {
    margin: 0px;
    display: flex;
    justify-content: start;
    margin-top: rem(0);
    margin-left: rem(20);
    @include medium-up {
      margin-top: rem(30);
      margin-left: rem(50);
    }
    @include large-up {
      margin-left: rem(100);
      margin-top: rem(0);
      display: flex;
      align-items: center;
      gap: rem(70);
    }
    @include x-large-up {
      margin-left: rem(300);
      margin-top: rem(0);
    }
  }

  &__liens {
    &.--desktop {
      display: none;
      @include large-up {
        display: block;
      }
    }
    &.--mobile {
      width: 80%;
      margin: auto;
      margin-top: rem(20);
      display: block;
      @include medium-up {
        width: 60%;
        margin-top: rem(50);
      }
      @include large-up {
        display: none;
      }
    }
  }

  &__footer {
    padding-top: rem(40);
    @include large-up {
      position: fixed;
      left: 0;
      bottom: 0;
      padding: 0px;
    }
  }
}
</style>
