<template>
  <div class="footer">
    <a :href="link_linkedin"> <IconsLinkedin class="footer__icons" /></a>
    <a :href="link_mail"> <IconsMail class="footer__icons" /></a>
    <NuxtLink to="/legal"> <IconsC class="footer__icons" /></NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: rem(5);
  margin-left: rem(40);
  margin-bottom: rem(40);
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

<script setup>
defineProps({
  link_linkedin: String,
  link_mail: String,
});
</script>
