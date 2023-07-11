<template>
  <div class="bg-white dark:bg-[#111111] sm:px-5 md:px-10 lg:rounded-2xl lg:px-20 lg:py-12">
    <div class="section-title">
      <h1 class="dark:text-[#FFFFFF] after:h-[2px] after:bg-[#FA5252]
           after:hidden md:after:inline-block after:relative after:align-middle after:w-[12rem]
           after:left-2 text-5xl font-semibold p-4">About Me
      </h1>
    </div>
    <section class="p-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
        <div class="">
          <img class="rounded-3xl" src="/images/about/avatar-2.jpg" alt="">
        </div>
        <div class="p-6">
          <div class="intro">
            <h1 class="text-3xl font-medium">Who am i?</h1>
            <p class="text-justify">I'm Creative Director and UI/UX Designer from Sydney, Australia, working in
              web
              development and print media.
              I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
            <p>My aim is to bring across your message and identity in the most creative way. I created web design for many
              famous brand companies.</p>
          </div>
          <div class="info my-5">
            <h1 class="text-3xl font-medium">Personal Info</h1>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex">
                <span class="icon-box">
                  <i class="fa-solid fa-mobile-screen-button text-[#E93B81]"></i>
                </span>
                <span class="px-2 flex flex-col justify-center">
                  <p class="text-xs text-gray-lite">Phone</p>
                  <p>0123456789</p>
                </span>
              </div>
              <div class="flex">
                <span class="icon-box">
                  <i class="fa-solid fa-mobile-screen-button text-[#E93B81]"></i>
                </span>
                <span class="px-2 flex flex-col justify-center">
                  <p class="text-xs text-gray-lite">Phone</p>
                  <p>0123456789</p>
                </span>
              </div>
              <div class="flex">
                <span class="icon-box">
                  <i class="fa-solid fa-mobile-screen-button text-[#E93B81]"></i>
                </span>
                <span class="px-2 flex flex-col justify-center">
                  <p class="text-xs text-gray-lite">Phone</p>
                  <p>0123456789</p>
                </span>
              </div>
              <div class="flex">
                <span class="icon-box">
                  <i class="fa-solid fa-mobile-screen-button text-[#E93B81]"></i>
                </span>
                <span class="px-2 flex flex-col justify-center">
                  <p class="text-xs text-gray-lite">Phone</p>
                  <p>0123456789</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.icon-box {
  @apply text-2xl flex items-center justify-center rounded shadow-md p-4 w-[48px] h-[46px];
}
</style>
