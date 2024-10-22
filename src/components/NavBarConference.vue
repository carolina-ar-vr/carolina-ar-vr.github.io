<script lang="ts">
export default {
  methods: {
    isActive(routePath: any) {
      window.scrollTo(0, 0);
      return this.$route.path === routePath;
    },
  },
  data: () => {
    return {
      name: 'nav-bar-conference',
    };
  },
}
</script>

<template>
  <div class="flex justify-between">
    <!-- Logo -->
    <!-- Adjusted to 'justify-start' to align items to the left -->
    <router-link to="/"
                 class="ml-2 md:w-fit text-[#7EBDE5] hover:text-[#FFF] transition-colors duration-1000">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-18 h-14 md:w-24 md:h-20">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
      </svg>
    </router-link>

  </div>
</template>

<style scoped>

</style>