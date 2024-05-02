<template>
  <div class="footer">
    <a :href="footer.data.lien_linkedin.url">
      <IconsLinkedin class="footer__icons"
    /></a>
    <a :href="footer.data.lien_mail.url">
      <IconsMail class="footer__icons"
    /></a>
    <NuxtLink to="/legal"> <IconsC class="footer__icons" /></NuxtLink>
  </div>
</template>

<script setup>
// Appel du client usePrismic pour avoir accès aux données de la single page menu
const { client } = usePrismic();
const { data: footer, error } = await useAsyncData("footer", () =>
  client.getSingle("footer")
);
console.log(footer);
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: rem(5);
  margin-left: rem(40);
  margin-bottom: rem(40);
  width: fit-content;
  @include x-large-up {
    margin-left: rem(60);
  }
  &__icons {
    width: rem(40);
    @include x-large-up {
      width: rem(50);
    }
  }
}
</style>
