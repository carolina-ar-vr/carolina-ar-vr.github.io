<script lang="ts">
export default {
  data: () => {
    return {
      name: "banner",
      visible: true
    };
  },
  methods: {
    dismiss() {
      this.visible = false;
    }
  }
}
</script>

<template>
  <transition name="fade" >
    <div v-if="visible" class="bg-[#181d30] text-white md:p-6 rounded-2xl h-36 md:h-24 shadow-md flex align-middle items-center">
      <p class="w-full text-center px-10">Executive Board applications are open for the 2025-26 academic year! Apply before April 18th, 2025 at 11:59 PM EDT</p>
      <button @click="dismiss" class="absolute right-1">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
          <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"></path></g></g>
        </svg>
      </button>
    </div>
  </transition>

</template>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.20s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>