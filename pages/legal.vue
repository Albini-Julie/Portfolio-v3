<template>
  <Header home color="#000000" :annee="legal.data.legal_annee[0].text" />
  <div class="legal">
    <h2 class="legal__titre">{{ legal.data.legal_titre[0].text }}</h2>
    <div class="legal__content" v-for="i in legal.data.legal_content">
      <h3 class="content__titre">{{ i.content_titre[0].text }}</h3>
      <div v-for="(j, index) in i.content_texte">
        <p class="content__texte">{{ j.text }}</p>
      </div>
    </div>
  </div>
  <Footer class="legal__footer" />
</template>

<style lang="scss" scoped>
html{
    background-color: $primary-color;
}
.legal {
  margin: rem(0) rem(40);
  @include medium-up {
    margin: rem(0) rem(60);
  }
  @include large-up {
    margin-left: rem(60);
  }
  @include x-large-up {
    margin-left: rem(200);
    margin-right: rem(200);
  }
  &__titre {
    font-family: $secondary-font-family;
    font-size: $medium-font-size;
    @include x-large-up {
      font-size: $big-font-size;
      margin-bottom: rem(50);
    }
  }
  &__content {
    @include medium-up {
      width: 80%;
    }
    @include large-up {
      width: 80%;
    }
    @include large-up {
      width: 70%;
    }
  }
  &__footer {
    margin-top: rem(40);
    padding-bottom: rem(40);
  }
}
.content {
  &__titre {
    font-family: $secondary-font-family;
    font-size: rem(20);
    margin-top: rem(30);
    font-weight: 500;
    @include x-large-up {
      font-size: rem(25);
    }
  }
  &__texte {
    font-family: $primary-font-family;
    font-size: $smaller-font-size;
    @include large-up {
      font-size: $small-font-size;
    }
    @include x-large-up {
      font-size: $regular-font-size;
    }
  }
}
</style>

<script setup>
// Appel du client usePrismic pour avoir accès aux données de la single page menu
const { client } = usePrismic();
const { data: legal, error } = await useAsyncData("legal", () =>
  client.getSingle("legal")
);
console.log(legal);
</script>
