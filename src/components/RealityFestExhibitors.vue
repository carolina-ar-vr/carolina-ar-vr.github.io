<template>
  <div class="grid p-0 grid-cols-1 md:grid-cols-2 md:p-6 lg:grid-cols-4 mb-16">
    <div v-for="member in realityFestExhibitors" class="flex flex-col justify-center items-center">
      <img v-bind:src=member.image alt="Exec Image"
           class="p-5 rounded-full h-[300px] w-[300px] object-cover">
      <h3 class="text-xl font-semibold">{{ member.name }}</h3>
      <!--      <p>{{ member.position }}</p>-->
    </div>
  </div>
</template>

<script lang="ts">

import Grace from '../assets/execPhotos/Grace.png';
import Arryn from '../assets/execPhotos/Arryn.png';
import Ivone from '../assets/devPhotos/Ivone.jpg';
import Jae from '../assets/devPhotos/Jae.jpg';
import Michael from '../assets/exhibitorPhotos/michael_halpert.png';
import Yanming from '../assets/exhibitorPhotos/yanming_xiu.png';
import Vanessa from '../assets/exhibitorPhotos/vanessa_tang.png';
import George from '../assets/exhibitorPhotos/george_kilmenko.png';

export default {
  data: () => {
    return {
      name: 'Reality-Exhibitors',
      realityFestExhibitors: [
        {
          image: Grace,
          name: "Grace Fei",
        },
        {
          image: Arryn,
          name: "Arryn O'brien",
        },
        {
          image: Ivone,
          name: "Ivone Alexander",
        },
        {
          image: Jae,
          name: "Jae So",
        },
        {
          image: Michael,
          name: "Michael Halpert",
        },
        {
          image: Yanming,
          name: "Yanming Xiu",
        },
        {
          image: Vanessa,
          name: "Vanessa Tang",
        },
        {
          image: George,
          name: "George Kilmenko",
        },
      ],
    };
  },
}
</script>

<style>

</style>