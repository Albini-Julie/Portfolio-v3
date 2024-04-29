<template>
  <div class="propos">
    <!--Partie content-->

    <Header home :annee="apropos.data.propos_annee[0].text" color="#000" />
    <div class="propos__content">
      <h2 class="propos__titre">{{ apropos.data.propos_titre[0].text }}</h2>
      <p class="propos__texte" v-for="(i, index) in apropos.data.propos_textes">
        {{ i.propos_texte[0].text }}
      </p>
    </div>

    <!--Technologies mobile-->
    <div class="technologies">
      <div class="technologies__logos">
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
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.propos {
  height: 80vh;
  &__content {
    margin: rem(0) rem(40);
  }
  &__titre {
    font-family: $secondary-font-family;
    font-size: $medium-font-size;
    margin-bottom: rem(10);
    margin-top: rem(0);
  }
  &__texte {
    margin-top: rem(15);
    font-family: $primary-font-family;
    font-size: $small-font-size;
  }
}

.technologies {
  margin: rem(30) rem(0);
  border-top: solid 2px $secondary-color;
  border-bottom: solid 2px $secondary-color;
  overflow-x: auto;
  display: flex;
  padding: rem(20) rem(40);
  justify-content: start;
  /* On ajuste la largeur en fonction du nombre de logos et de leur taille */
  scrollbar-width: thin; /* Utilise une barre de défilement fine */
  scrollbar-color: $secondary-color $primary-color; /* Couleur de la barre et du fond */
  @include x-large-up {
    justify-content: center;
  }
  &::-webkit-scrollbar-track {
    background-color: $primary-color; /* Couleur du fond de la barre de défilement */
  }
  &::-webkit-scrollbar-thumb {
    background-color: $secondary-color; /* Couleur de la barre de défilement */
    border-radius: rem(4); /* Bord arrondi de la barre de défilement */
  }

  &__logos {
    display: flex;
    gap: rem(50);
    align-items: center;
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
