<template>
  <div class="id">
    <!--Parties intro-->
    <div class="intro">
      <img class="intro__img" src="/plage.jpg" />
      <div class="intro__contentBlock">
        <Header home color="#000" :annee="projet.data.annee_projet[0].text" />
        <div class="intro__content">
          <h1 class="intro__titre">{{ projet.data.titre_projet[0].text }}</h1>
          <p class="intro__texte">
            {{ projet.data.description_projet[0].text }}
          </p>
        </div>
        <div class="intro__flecheBlock">
          <IconsFleche-longue class="intro__fleche" color="#000" />
        </div>
      </div>
    </div>

    <!--Partie contexte-->
    <div class="contexte">
      <div class="contexteBlock">
        <div class="contexte__content --demande">
          <h2 class="contexte__titre">
            {{ projet.data.demande_titre[0].text }}
          </h2>
          <p class="contexte__texte --demande">
            {{ projet.data.demande_texte[0].text }}
          </p>
        </div>
        <div class="contexte__iconsBlock --interrogation">
          <IconsInterrogation class="contexte__icons" />
        </div>
        <div class="contexte__content --reponse">
          <h2 class="contexte__titre">
            {{ projet.data.proposition_titre[0].text }}
          </h2>
          <p class="contexte__texte --reponse">
            {{ projet.data.proposition_texte[0].text }}
          </p>
        </div>
        <div class="contexte__iconsBlock">
          <IconsValidation class="contexte__icons" />
        </div>
      </div>
      <div class="contexte__iconsBlock --desktop">
        <IconsInterrogation class="contexte__icons" />
        <IconsValidation class="contexte__icons" />
      </div>
    </div>
    <!--Partie galerie photo-->
    <div class="galerie">
      <div v-for="i in projet.data.images_projet">
        <img class="galerie__img" :src="i.image_projet.url" />
      </div>
    </div>
    <!--Technologies-->
    <div class="technologies">
      <div class="technologies__logos">
        <div v-for="i in projet.data.technologies_projet">
          <IconsHtml v-if="i.technologie_nom[0].text == 'html'" />
          <IconsCss v-if="i.technologie_nom[0].text == 'css'" />
          <IconsJavascript v-if="i.technologie_nom[0].text == 'javascript'" />
          <IconsSql v-if="i.technologie_nom[0].text == 'sql'" />
          <IconsVue v-if="i.technologie_nom[0].text == 'vuejs'" />
          <IconsNuxt v-if="i.technologie_nom[0].text == 'nuxtjs'" />
          <IconsSass v-if="i.technologie_nom[0].text == 'sass'" />
          <IconsTailwind v-if="i.technologie_nom[0].text == 'tailwind'" />
          <IconsExpress v-if="i.technologie_nom[0].text == 'express'" />
          <IconsNode v-if="i.technologie_nom[0].text == 'nodejs'" />
          <IconsFirebase v-if="i.technologie_nom[0].text == 'firebase'" />
          <IconsOpenweathermap
            v-if="i.technologie_nom[0].text == 'openweathermap'"
          />
          <IconsOpenstreetmap
            v-if="i.technologie_nom[0].text == 'openstreetmap'"
          />
          <IconsLeaflet v-if="i.technologie_nom[0].text == 'leaflet'" />
          <IconsFork v-if="i.technologie_nom[0].text == 'fork'" />
          <IconsNetlify v-if="i.technologie_nom[0].text == 'netlify'" />
          <IconsInfomaniak v-if="i.technologie_nom[0].text == 'infomaniak'" />
        </div>
      </div>
    </div>

    <!--Méthode-->
    <div class="methode">
      <h2 class="methode__titre">{{ projet.data.methode_titre[0].text }}</h2>
      <p
        class="methode__texte"
        v-for="i in projet.data.methode_textes[0].methode_texte"
      >
        {{ i.text }}
      </p>
    </div>

    <!--Boutons-->
    <div class="methode__boutons">
      <Boutons
        :lien="projet.data.maquette_lien.url"
        :texte="projet.data.maquette_texte[0].text"
      />
      <Boutons
        :lien="projet.data.site_lien.url"
        :texte="projet.data.site_texte[0].text"
      />
    </div>
    <div class="conclusion">
      <div class="conclusion__content">
        <NuxtLink class="conclusion__lien" to="/projets">
          <p class="conclusion__texte">
            {{ projet.data.autres_projets_texte[0].text }}
          </p>
        </NuxtLink>
        <NuxtLink class="conclusion__lien" to="/projets">
          <IconsFleche-cercle class="conclusion__icons" color="#000" />
        </NuxtLink>
      </div>
      <Footer class="footer" />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
// Appel du client usePrismic pour avoir accès aux données de la single page menu
const { client } = usePrismic();
const { data: projet, error } = await useAsyncData("projet", () =>
  client.getByUID("projet", `projet-${route.params.id}`)
);
console.log(projet);
</script>

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

.contexteBlock {
  @include large-up {
    display: flex;
    margin-top: rem(0);
  }
}
.contexte {
  background-color: $secondary-color;
  margin: rem(0) rem(0);
  margin-top: rem(50);
  padding: rem(40) rem(40);
  @include medium-up {
    padding: rem(40) rem(50);
  }
  @include large-up {
    margin-top: rem(0);
    padding: rem(100) rem(100);
  }

  &__titre {
    font-family: $secondary-font-family;
    font-size: $medium-font-size;
    color: $primary-color;
    @include x-large-up {
      font-size: $big-font-size;
    }
  }
  &__texte {
    font-family: $primary-font-family;
    font-size: $small-font-size;
    color: $primary-color;
    @include medium-up {
      &.--demande {
        padding-left: rem(100);
      }
      &.--reponse {
        padding-right: rem(100);
      }
    }
    @include large-up {
      &.--demande {
        padding-left: rem(0);
      }
      &.--reponse {
        padding-right: rem(0);
      }
    }
    @include x-large-up {
      font-size: $regular-font-size;
      &.--demande {
        padding-left: rem(80);
      }
      &.--reponse {
        padding-right: rem(80);
      }
    }
  }
  &__iconsBlock {
    display: flex;
    justify-content: end;
    &.--desktop {
      display: none;
      @include large-up {
        display: flex;
        justify-content: space-between;
        margin-top: rem(10);
      }
    }
    &.--interrogation {
      justify-content: start;
    }
    @include large-up {
      display: none;
    }
  }
  &__icons {
    width: 40px;
    height: 40px;
  }
  &__content {
    &.--demande {
      text-align: end;
      border-right: solid 3px $primary-color;
      padding-right: rem(30);
      @include large-up {
        border: none;
      }
    }
    &.--reponse {
      margin-top: rem(50);
      text-align: start;
      border-left: solid 3px $primary-color;
      padding-left: rem(30);
      @include large-up {
        margin: rem(0);
      }
    }
  }
}
.galerie {
  @include medium-up {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
  @include large-up {
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  }
  @include x-large-up {
    grid-template-columns: repeat(auto-fit, minmax(33.3%, 1fr));
  }
  &__img {
    width: 100%;
    margin-top: -10px;
    transition: transform 0.3s ease;
    @include large-up {
      height: 300px;
      overflow: auto;
      &:hover {
        transform: scale(1.3);
      }
    }
    @include x-large-up {
      height: 300px;
      overflow: auto;
      &:hover {
        transform: scale(1.5);
      }
    }
  }
}

.technologies {
  margin: rem(70) rem(0);
  border-top: solid 2px $secondary-color;
  border-bottom: solid 2px $secondary-color;
  overflow-x: auto;
  display: flex;
  padding: rem(20) rem(40);
  justify-content: center;
  /* On ajuste la largeur en fonction du nombre de logos et de leur taille */
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
    display: flex;
    gap: rem(50);
    align-items: center;
  }
}

.methode {
  margin: rem(0) rem(30);
  @include medium-up {
    margin: rem(0) rem(80);
  }
  @include large-up {
    margin: rem(0) rem(150);
  }
  @include x-large-up {
    margin: rem(0) rem(200);
  }
  &__titre {
    font-family: $secondary-font-family;
    font-size: $medium-font-size;
    margin-top: rem(50);
    @include x-large-up {
      font-size: $big-font-size;
    }
  }
  &__texte {
    font-family: $primary-font-family;
    font-size: $small-font-size;
    @include large-up {
      width: 90%;
    }
    @include x-large-up {
      font-size: $regular-font-size;
      width: 80%;
    }
  }
  &__boutons {
    display: flex;
    justify-content: space-around;
    margin-top: rem(50);
    @include medium-up {
      justify-content: center;
      gap: rem(100);
    }
    @include x-large-up {
      margin-top: rem(70);
      gap: rem(150);
    }
  }
}
.conclusion {
  &__texte {
    font-family: $primary-font-family;
    font-size: $regular-font-size;
    text-transform: uppercase;
    font-weight: 500;
    color: $secondary-color;
    @include large-up {
      font-weight: 400;
      font-size: rem(25);
    }
  }
  &__icons {
    @include x-large-up {
      width: 40px;
      height: 40px;
    }
  }
  &__content {
    display: flex;
    justify-content: center;
    gap: rem(20);
    align-items: center;
    margin: rem(30) rem(0);
    @include large-up {
      margin-bottom: rem(0);
      margin-top: rem(30);
    }
  }
  &__lien {
    text-decoration: none;
  }
}
.footer {
  padding-bottom: rem(40);
}
</style>

<script setup></script>
