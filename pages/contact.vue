<template>
  <main>
    <div class="bg-white dark:bg-[#111111] sm:px-5 md:px-10 lg:rounded-2xl lg:px-20 lg:py-12">
      <div class="section-title">
        <h1 class="dark:text-[white] after:h-[2px] after:bg-[#FA5252]
           after:hidden md:after:inline-block after:relative after:align-middle after:w-[12rem]
           after:left-2 text-5xl font-semibold p-4">Contact
        </h1>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <div class="info col-span-1">
          <div class="info-box flex">
            <span class="w-8">
              <img src="/images/contact/phone-call.png" alt="">
            </span>
            <span class="px-2 flex flex-col justify-center">
              <p class="text-xl font-semibold dark:text-white">Phone:</p>
              <p class="dark:text-[white]"> +84 348 043 ***</p>
            </span>
          </div>
          <div class="info-box flex">
            <span class="w-8">
              <img src="/images/contact/email.png" alt="">
            </span>
            <span class="px-2 flex flex-col justify-center">
              <p class="text-xl font-semibold dark:text-white">Email:</p>
              <p class="dark:text-[white]"> haipham2001vn@gmail.com</p>
            </span>
          </div>
          <div class="info-box flex">
            <span class="w-8">
              <img src="/images/contact/map.png" alt="">
            </span>
            <span class="px-2 flex flex-col justify-center">
              <p class="text-xl font-semibold dark:text-white">Address:</p>
              <p class="dark:text-[white]"> Binh Duong, Vietnam</p>
            </span>
          </div>
        </div>
        <div class="form-contact col-span-2">
          asdasdsa
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
</script>

<style lang="scss">
.info-box {
  @apply bg-[#FCF4FF] rounded-lg p-8 w-3/4 mb-7
}
</style>
