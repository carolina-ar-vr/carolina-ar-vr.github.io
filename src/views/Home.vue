<template>
  <landing-page/>

  <what-we-do/>

  <past-events/>

  <exec-board/>

  <carvr-footer/>
</template>

<script lang="ts">
import CarvrFooter from "../components/CarvrFooter.vue";
import ExecBoard from "../components/ExecBoard.vue";
import FadeInImage from "../components/FadeInImage.vue";
import PastEvents from "../components/PastEvents.vue";
import WhatWeDo from "../components/WhatWeDo.vue";
import LandingPage from "../components/LandingPage.vue";

export default {
  components: {LandingPage, WhatWeDo, PastEvents, FadeInImage, ExecBoard, CarvrFooter},
  data: () => {
    return {
      name: 'Home'
    };
  },
}
</script>

<style>
</style>