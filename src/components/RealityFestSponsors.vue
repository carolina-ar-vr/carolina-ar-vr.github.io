<template>
  <div class="grid p-0 grid-cols-1 md:grid-cols-2 md:p-6 lg:grid-cols-3 mb-16">
    <div v-for="sponsor in realitySponsors" class="flex justify-center items-center">
      <a v-bind:href="sponsor.link">
        <img v-bind:src=sponsor.image alt="RealityFestSponsors"
             class="p-5 object-cover">
      </a>
    </div>
  </div>
</template>

<script lang="ts">

import Cs from '../assets/sponsors/CS_white.png';
import Fcat from '../assets/sponsors/FCAT_white.png';
import Ipep from '../assets/sponsors/IPEP_white.png';


export default {
  data: () => {
    return {
      name: 'Reality-Sponsors',
      realitySponsors: [
        {
          image: Cs,
          link: "https://cs.unc.edu/",
        },
        {
          image: Fcat,
          link: "https://www.fcatalyst.com/overview",
        },
        {
          image: Ipep,
          link: "https://ipep.unc.edu/",
        },
      ],
    };
  },
}
</script>

<style>

</style>