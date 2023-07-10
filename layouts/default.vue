<template>
  <div>
    <Preloader v-show="!preloading" />
    <div
      class="min-h-screen w-full bg-home-light bg-cover bg-fixed bg-center bg-no-repeat dark:bg-home-dark lg:px-2 xl:px-20 pt-20 lg:pt-0">
      <Header />
      <slot />
    </div>
  </div>
</template>

<script setup>
/* preloader */
const preloading = ref();
onBeforeMount(() => {
  preloading.value = false;
});
onMounted(() => {
  setTimeout(() => {
    preloading.value = true;
  }, 1200);
});
</script>

<style lang="scss" scoped></style>
