<template>
  <div class="flex justify-center items-center">
    <img
        :class="imageClasses"
        :src="src"
        :alt="alt"
        class="object-cover transition-all duration-1000 transform"
    />
  </div>
</template>

<script>
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
      isVisible: false, // Controls the visibility of the image
    };
  },
  computed: {
    // Dynamically computes the Tailwind classes based on visibility
    imageClasses() {
      return this.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20";

    },
  },
  mounted() {
    // Trigger the fade-in effect after the component mounts
    // Using a slight delay can make the transition smoother
    setTimeout(() => {
      this.isVisible = true;
    }, 200); // Delay of 100ms
  },
};
</script>

<style scoped>

</style>