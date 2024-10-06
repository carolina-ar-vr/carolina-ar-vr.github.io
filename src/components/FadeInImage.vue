<!-- FadeInImage.vue -->
<template>
  <div class="flex justify-center items-center">
    <img
        :class="imageClasses"
        :src="CARVR2D"
        :alt="alt"
        class="object-cover transition-all duration-1000 transform"
    />
  </div>
</template>

<script lang ="ts">

import CARVR2D from '../assets/CARVR2D.png'

export default {
  name: "FadeInImage",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "Image",
    },
  },
  data() {
    return {
      isVisible: false,
      CARVR2D,
    };
  },
  computed: {
    imageClasses() {
      return this.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20";
    },
    imageSrc() {
      // Resolve the correct image path using Vite's asset handling
      return new URL(this.src, import.meta.url).href;
    }
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true;
    }, 200);
  },
};
</script>
