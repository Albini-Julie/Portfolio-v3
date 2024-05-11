<template>
  <div class="propos">
    <!--Partie content-->
    <div class="propos__contentBlock">
      <div class="propos__contentDiv">
        <Header home :annee="apropos.data.propos_annee[0].text" color="#000" />
        <div class="propos__content">
          <h2 class="propos__titre">{{ apropos.data.propos_titre[0].text }}</h2>
          <p
            class="propos__texte"
            v-for="(i, index) in apropos.data.propos_textes"
          >
            {{ i.propos_texte[0].text }}
          </p>
        </div>
        <Footer class="propos__footer --desktop" />
      </div>
      <div class="propos__technologies --desktop">
        <div class="propos__technologies__logos --desktop">
          <IconsHtml />
          <IconsCss />
          <IconsJavascript />
          <IconsSql />
          <IconsVue />
          <IconsNuxt />
          <IconsSass />
          <IconsTailwind />
          <IconsExpress />
          <IconsNode />
          <IconsFirebase />
          <IconsOpenweathermap />
          <IconsOpenstreetmap />
          <IconsLeaflet />
          <IconsFork />
          <IconsNetlify />
          <IconsInfomaniak />
          <IconsSupabase />
          <IconsPrismic />
          <IconsHttp />
          <IconsGithub />
        </div>
      </div>
    </div>

    <!--Technologies mobile-->
    <div class="propos__technologies --mobile">
      <div class="propos__technologies__logos --mobile">
        <IconsHtml />
        <IconsCss />
        <IconsJavascript />
        <IconsSql />
        <IconsVue />
        <IconsNuxt />
        <IconsSass />
        <IconsTailwind />
        <IconsExpress />
        <IconsNode />
        <IconsFirebase />
        <IconsOpenweathermap />
        <IconsOpenstreetmap />
        <IconsLeaflet />
        <IconsFork />
        <IconsNetlify />
        <IconsInfomaniak />
        <IconsSupabase />
        <IconsPrismic />
        <IconsHttp />
        <IconsGithub />
      </div>
    </div>
    <Footer class="propos__footer --mobile" />
  </div>
</template>

<style lang="scss" scoped>
.propos {
  height: 80vh;
  &__content {
    margin: rem(0) rem(40);
    @include medium-up {
      margin: rem(0) rem(100);
    }
    @include large-up {
      margin-left: rem(60);
    }
    @include x-large-up {
      margin-left: rem(200);
      margin-right: rem(200);
    }
  }
  &__contentBlock {
    @include large-up {
      display: flex;
    }
  }
  &__contentDiv {
    @include large-up {
      width: 80%;
    }
    @include x-large-up {
      width: 85%;
    }
  }
  &__titre {
    font-family: $secondary-font-family;
    font-size: $medium-font-size;
    margin-bottom: rem(10);
    margin-top: rem(0);
    @include medium-up {
      margin-bottom: rem(30);
    }
    @include x-large-up {
      font-size: $big-font-size;
    }
  }
  &__texte {
    margin-top: rem(15);
    font-family: $primary-font-family;
    font-size: $smaller-font-size;
    @include medium-up {
      margin-top: rem(20);
    }
    @include large-up {
      font-size: $small-font-size;
    }
    @include x-large-up {
      font-size: $regular-font-size;
    }
  }
  &__technologies {
    scrollbar-width: thin; /* Utilise une barre de défilement fine */
    scrollbar-color: $secondary-color $primary-color; /* Couleur de la barre et du fond */

    &::-webkit-scrollbar-track {
      background-color: $primary-color; /* Couleur du fond de la barre de défilement */
    }
    &::-webkit-scrollbar-thumb {
      background-color: $secondary-color; /* Couleur de la barre de défilement */
      border-radius: rem(4); /* Bord arrondi de la barre de défilement */
    }

    &__logos {
      &.--mobile {
        display: flex;
        gap: rem(50);
        align-items: center;
      }
      &.--desktop {
        display: flex;
        flex-direction: column;
        margin: rem(50) rem(0);
        gap: rem(30);
        align-items: center;
      }
    }
    &.--mobile {
      padding: rem(20) rem(40);
      margin: rem(30) rem(0);
      border-top: solid 2px $secondary-color;
      border-bottom: solid 2px $secondary-color;
      overflow-x: auto;
      display: flex;
      justify-content: start;
      @include medium-up {
        margin: rem(50) rem(0);
      }
      @include large-up {
        display: none;
      }
    }
    &.--desktop {
      display: none;
      @include large-up {
        display: flex;
        flex-direction: column;
        width: 20%;
        border-left: solid 2px $secondary-color;
        overflow-y: auto;
        height: 100vh;
      }
      @include x-large-up {
        width: 15%;
      }
    }
  }
  &__footer {
    &.--mobile {
      display: flex;
      @include large-up {
        display: none;
      }
    }
    &.--desktop {
      display: none;
      @include large-up {
        display: flex;
        margin-top: rem(80);
      }
    }
  }
}
</style>

<script setup>
// Appel du client usePrismic pour avoir accès aux données de la single page menu
const { client } = usePrismic();
const { data: apropos, error } = await useAsyncData("apropos", () =>
  client.getSingle("apropos")
);
console.log(apropos);
</script>
