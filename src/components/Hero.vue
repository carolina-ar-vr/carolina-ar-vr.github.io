<script lang="ts">
export default {
  name: 'Hero',
}
</script>

<template>
  <div class="">
    <router-view class="router-view" v-slot="{ Component }">
      <component :is="Component" class="absolute inset-0 w-full h-full" />
    </router-view>
  </div>
</template>

<style>
div {
  overflow-x: hidden;
}
</style>