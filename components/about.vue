<template>
  <div class="bg-white dark:bg-[#111111] sm:px-5 md:px-10 lg:rounded-2xl lg:px-20 lg:py-12">
    <div class="section-title">
      <h1 class="dark:text-[#FFFFFF] after:h-[2px] after:bg-[#FA5252]
           after:hidden md:after:inline-block after:relative after:align-middle after:w-[12rem]
           after:left-2 text-5xl font-semibold p-4">About Me
      </h1>
    </div>
    <section class="p-4">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-6">
        <div class="col-span-1">
          <img class="rounded-3xl h-[450px]" src="/images/about/avatar-2.jpg" alt="">
        </div>
        <div class="col-span-2">
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
            <h1 class="text-3xl font-medium my-5">Personal Info</h1>
            <div class="grid grid-cols-2 gap-y-8 gap-x-20">
              <div class="flex">
                <span class="icon-box">
                  <i class="fa-solid fa-mobile-screen-button text-[#E93B81]"></i>
                </span>
                <span class="px-2 flex flex-col justify-center">
                  <p class="text-xs text-gray-lite">Phone</p>
                  <p> +84 348 043 ***</p>
                </span>
              </div>
              <div class="flex">
                <span class="icon-box">
                  <i class="fa-solid fa-location-dot text-[#FD7590]"></i>
                </span>
                <span class="px-2 flex flex-col justify-center">
                  <p class="text-xs text-gray-lite">Location</p>
                  <p>Binh Duong, Vietnam</p>
                </span>
              </div>
              <div class="flex">
                <span class="icon-box">
                  <i class="fa-solid fa-envelope text-[#6ab5b9]"></i>
                </span>
                <span class="px-2 flex flex-col justify-center">
                  <p class="text-xs text-gray-lite">Email</p>
                  <p>haipham2001vn@gmail.com</p>
                </span>
              </div>
              <div class="flex">
                <span class="icon-box">
                  <i class="fa-solid fa-cake-candles text-[#ee4242]"></i>
                </span>
                <span class="px-2 flex flex-col justify-center">
                  <p class="text-xs text-gray-lite">Birthday</p>
                  <p>22 years old</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="p-4">
      <h1 class="text-4xl font-semibold my-5">What I do?</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="languages-box p-5 flex">
          <i class="fa-regular fa-swatchbook text-5xl text-[#D365FD]"></i>
          <div class="ms-5">
            <h1 class="text-2xl font-semibold mb-2">Ui/Ux Design</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
          </div>
        </div>
        <div class="languages-box p-5 flex">
          <i class="fa-regular fa-swatchbook text-5xl text-[#D365FD]"></i>
          <div class="ms-5">
            <h1 class="text-2xl font-semibold mb-2">Ui/Ux Design</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
          </div>
        </div>
        <div class="languages-box p-5 flex">
          <i class="fa-regular fa-swatchbook text-5xl text-[#D365FD]"></i>
          <div class="ms-5">
            <h1 class="text-2xl font-semibold mb-2">Ui/Ux Design</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
          </div>
        </div>
        <div class="languages-box p-5 flex">
          <i class="fa-regular fa-swatchbook text-5xl text-[#D365FD]"></i>
          <div class="ms-5">
            <h1 class="text-2xl font-semibold mb-2">Ui/Ux Design</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
          </div>
        </div>
        <div class="languages-box p-5 flex">
          <i class="fa-regular fa-swatchbook text-5xl text-[#D365FD]"></i>
          <div class="ms-5">
            <h1 class="text-2xl font-semibold mb-2">Ui/Ux Design</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
          </div>
        </div>
        <div class="languages-box p-5 flex">
          <i class="fa-regular fa-swatchbook text-5xl text-[#D365FD]"></i>
          <div class="ms-5">
            <h1 class="text-2xl font-semibold mb-2">Ui/Ux Design</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
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

.languages-box {
  @apply bg-[#fcf4ff] rounded-2xl;
}
</style>
