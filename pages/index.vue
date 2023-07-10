<template>
  <div class="flex h-[100vh] flex-col items-center justify-center md:h-[90vh] lg:h-[80vh] xl:h-[71vh]">
    <!-- personal image -->
    <img class="h-[250px] w-[250px] rounded-full 2xl:h-[280px] 2xl:w-[280px]" src="/images/about/avatar.jpg"
      alt="about avatar" />
    <h3 class="mb-1 mt-6 text-3xl font-semibold dark:text-white">
      Pham Van Hai
    </h3>
    <p class="mb-4 text-[#7B7B7B]">Web Developer</p>
    <!-- social link and social  buttons -->
    <div class="flex space-x-3">
      <!-- facebook -->
      <a href="https://www.facebook.com/phamvanhai.fb" target="_blank" rel="noopener noreferrer">
        <span class="social-btn text-[#1773EA]">
          <i class="fa-brands fa-facebook-f"></i>
        </span>
      </a>
      <!-- github -->
      <a href="https://github.com/phamvanhai2001" target="_blank" rel="noopener noreferrer">
        <span class="social-btn text-black dark:text-white">
          <i class="fa-brands fa-github"></i>
        </span>
      </a>
      <!-- linkedin -->
      <a href="https://www.linkedin.com/in/phamvanhai.info" target="_blank" rel="noopener noreferrer">
        <span class="social-btn text-[#0072b1]">
          <i class="fa-brands fa-linkedin-in"></i>
        </span>
      </a>
    </div>
    <!-- dowanload button -->
    <a class="download-btn" href="#">
      <img src="/images/icons/download.png" alt="icon" class="mr-2" />Download
      CV
    </a>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.base-btn {
  @apply flex items-center justify-center;
  @apply transition-all duration-300 ease-in-out;
}

.social-btn {
  @extend .base-btn;
  @apply h-10 w-10 rounded-md bg-[#f3f6f6];

  .dark & {
    @apply bg-[#212425];
  }

  &:hover {
    @apply bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white;
  }
}

.download-btn {
  @extend .base-btn;
  @apply mt-6 rounded-full bg-gradient-to-r from-[#fa5252] to-[#dd2476] px-10 py-3 text-white;

  &:hover {
    @apply bg-gradient-to-l from-[#fa5252] to-[#dd2476] text-white;
  }
}
</style>
