<template>
  <header class="fixed left-0 top-0 z-[1000] flex w-full items-center justify-between lg:static">
    <div
      class="flex h-20 w-full justify-between bg-[#F3F6F6] px-4 dark:bg-black lg:h-32 lg:bg-transparent lg:px-0 lg:dark:bg-transparent">
      <div class="flex w-full items-center justify-between space-x-4">
        <!-- website logo -->
        <a class="text-5xl font-semibold" href="/">
          <img class="h-[26px] lg:h-[32px]" src="/images/logo/logo.png" alt="logo" />
        </a>

        <div class="flex items-center lg:hidden">
          <!-- light and dark mode button -->
          <button id="theme-toggle-mobile" type="button" class="toggle-btn" @click="onToggleColorMode">
            <i id="theme-toggle-dark-icon-mobile" class="fa-solid fa-moon hidden text-xl" v-show="isLightMode()"></i>
            <i id="theme-toggle-light-icon-mobile" class="fa-solid fa-sun hidden text-xl" v-show="!isLightMode()"></i>
          </button>
          <!-- mobile toggle button -->
          <button id="menu-toggle" type="button" class="toggle-btn" @click="onToggleMobileMenu">
            <i id="menu-toggle-open-icon" class="fa-solid fa-bars text-xl" v-show="!isMobileMenuOpen"></i>
            <i id="menu-toggle-close-icon" class="fa-solid fa-xmark hidden text-xl" v-show="isMobileMenuOpen"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- header items two for large screens -->
    <nav class="hidden lg:block">
      <ul class="flex">
        <li v-for="menuItem in menuItems" :key="menuItem">
          <NuxtLink class="menu-items menu-item" :href="menuItem.link">
            <span class="mr-2 text-base"> <i :class="menuItem.icon"></i> </span>
            {{ menuItem.name }}
          </NuxtLink>
        </li>
        <!-- light and dark mode button -->
        <li>
          <button id="theme-toggle" type="button" class="toggle-btn" @click="onToggleColorMode">
            <i id="theme-toggle-dark-icon" class="fa-solid fa-moon hidden text-xl" v-show="isLightMode()"></i>
            <i id="theme-toggle-light-icon" class="fa-solid fa-sun hidden text-xl" v-show="!isLightMode()"></i>
          </button>
        </li>
      </ul>
    </nav>

    <!-- mobile menu start -->
    <nav id="navbar" class="lg:hidden" v-show="isMobileMenuOpen" ref="menuRef">
      <ul class="absolute left-0 top-20 z-[1000] block w-full rounded-b-3xl bg-white shadow-md dark:bg-[#1d1d1d]">
        <li>
          <NuxtLink class="menu-items mobile-menu-item" href="/">
            <span class="w-9 text-xl">
              <i class="fa-solid fa-house"></i>
            </span>
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="menu-items mobile-menu-item" href="/about">
            <span class="w-9 text-xl">
              <i class="fa-regular fa-user"></i>
            </span>
            About
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <!-- mobile menu end -->
  </header>
</template>

<script setup>
const menuItems = ref([
  {
    name: "Home",
    link: "/",
    icon: "fa-solid fa-house",
  },
  {
    name: "About",
    link: "/about",
    icon: "fa-regular fa-user",
  },
]);

// toggle light and dark mode
const colorMode = useColorMode();
const colorModeCookie = useCookie("color-mode");
const onToggleColorMode = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
  colorModeCookie.value = colorMode.preference;
};
const isLightMode = () => {
  return colorMode.preference === "light";
};
onMounted(() => {
  if (colorModeCookie.value) {
    colorMode.preference = colorModeCookie.value;
  }
});

// toggle menu mobile
const isMobileMenuOpen = ref(false);
const onToggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
// close menu mobile when route changes
const router = useRouter();
watch(
  () => router.currentRoute.value,
  () => {
    isMobileMenuOpen.value = false;
  }
);
// close menu mobile when clicked outside the menu
const menuRef = ref(null);
const onClickOutsideMenu = (event) => {
  if (
    isMobileMenuOpen.value &&
    !menuRef.value.contains(event.target) &&
    !event.target.closest("#menu-toggle")
  ) {
    isMobileMenuOpen.value = false;
  }
};
onMounted(() => {
  document.addEventListener("click", onClickOutsideMenu);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", onClickOutsideMenu);
});
</script>
<style lang="scss" scoped>
.base-btn {
  @apply flex items-center justify-center;
  @apply h-[44px] cursor-pointer;
  @apply transition-all duration-300 ease-in-out;
}

.toggle-btn {
  @extend .base-btn;
  @apply ml-2 w-[44px] rounded-full bg-white text-black;

  &:hover {
    @apply bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white;
  }

  .dark & {
    @apply bg-[#4d4d4d] text-white;
  }
}

.menu-items {
  @extend .base-btn;
  @apply text-sm font-medium text-[#44566c];

  .dark & {
    @apply text-[#a6a6a6];
  }

  &.menu-item {
    @apply mx-2 rounded-md bg-white px-5;

    .dark & {
      @apply bg-[#212425];
    }

    &:hover,
    &.router-link-active {
      @apply bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white;
    }
  }

  &.mobile-menu-item {
    @apply justify-start px-5 py-6;

    &:hover,
    &.router-link-active {
      @apply text-[#ef4060];
    }
  }
}
</style>
