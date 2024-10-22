<template>
  <section class="h-full z-10 w-full items-center ">
    <div class="flex justify-between">
      <!-- Logo -->
      <!-- Adjusted to 'justify-start' to align items to the left -->
      <router-link to="/" class="w-min-[50px] md:w-fit">
        <img src='../assets/CARVR2D.png' alt="carvr logo" class="w-24 h-20">
      </router-link>
      <!-- NavBar Buttons -->
      <div class="flex items-center h-20">
        <ul class="hidden md:flex">
          <li class="pr-12">
            <router-link to="/" :class="{active: isActive('/')}" class="nav_text">
              Home
            </router-link>
          </li>
          <li class="pr-12">
            <a href="https://discord.gg/cYseCtevW9" class="nav_text">Join</a>
          </li>
          <li class="pr-12">
            <a href="https://github.com/carolina-ar-vr" class="nav_text">Projects</a>
          </li>
          <li class="">
            <!--            <a href="https://www.eventbrite.com/e/reality-fest-tickets-1027663799087?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl" class="nav_text">Reality Fest RSVP</a>-->
            <router-link to="/realityfest" :class="{active: isActive('/realityfest')}"
                         class="nav_text">
              Reality Fest
            </router-link>
          </li>
        </ul>
        <!-- Mobile Menu Button -->
        <div class="p-4">
          <button @click="toggleMobileMenu" class="flex-shrink-0 md:hidden">
            <img src='../assets/mobilemenu.svg' alt="menu" class="w-[25px] h-[25px]"/>
          </button>
        </div>
      </div>
    </div>
    <transition
        enter-active-class="transition transform ease-out duration-300"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition transform ease-in duration-200"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden">
        <ul class="text-right">
          <li class="p-4">
            <router-link to="/" @click="toggleMobileMenu" class="nav_text">
              Home
            </router-link>
          </li>
          <li class="p-4">
            <a href="https://discord.gg/cYseCtevW9" @click="toggleMobileMenu"
               class="nav_text">Join</a>
          </li>
          <li class="p-4">
            <a href="https://github.com/carolina-ar-vr" @click="toggleMobileMenu" class="nav_text">Projects</a>
          </li>
          <li class="p-4">
            <router-link to="/realityfest" @click="toggleMobileMenu" class="nav_text">
              Reality Fest
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </section>
</template>

<script lang="ts">
export default {
  methods: {
    isActive(routePath: any) {
      window.scrollTo(0, 0);
      return this.$route.path === routePath;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
  data: () => {
    return {
      name: 'nav-bar',
      isMobileMenuOpen: false,
    };
  },
}
</script>

<style scoped>
</style>