<template>
  <div
    class="fixed left-0 top-0 z-[9999] flex h-screen w-full items-center justify-center bg-white dark:bg-black"
  >
    <h2 class="animate">
      <img src="/images/icons/portfolio.png" class="w-60" />
    </h2>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@keyframes load {
  0% {
    opacity: 0.08;
    filter: blur(5px);
  }
}

.animate {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: auto;
  animation: load 1.2s infinite 0s ease-in-out;
  animation-direction: alternate;
}
</style>
