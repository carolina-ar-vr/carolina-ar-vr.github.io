<script lang="ts">
export default {
  data: () => {
    return {
      name: 'Hero'
    };
  },
}
</script>

<template>
  <div class="">
    <router-view class="router-view" v-slot="{ Component }">
      <transition name="fade" mode="out-in" appear>
      </transition>
      <component :is="Component"/>
    </router-view>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

div {
  overflow-x: hidden;
}
</style>