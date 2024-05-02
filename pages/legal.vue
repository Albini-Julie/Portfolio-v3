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
.legal {
  margin: rem(0) rem(40);
  &__titre {
    font-family: $secondary-font-family;
    font-size: $medium-font-size;
  }
  &__footer {
    margin-top: rem(40);
    padding-bottom: rem(20);
  }
}
.content {
  &__titre {
    font-family: $secondary-font-family;
    font-size: rem(20);
    margin-top: rem(30);
  }
  &__texte {
    font-family: $primary-font-family;
    font-size: $smaller-font-size;
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
