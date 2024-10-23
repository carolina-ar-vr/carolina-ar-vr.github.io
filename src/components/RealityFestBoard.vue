<template>
  <div class="grid p-0 grid-cols-1 md:grid-cols-2 md:p-6 lg:grid-cols-5 mb-16">
    <div v-for="member in realityBoard" class="flex flex-col justify-center items-center">
      <img v-bind:src=member.image alt="Exec Image"
           class="p-5 object-cover rounded-full h-[300px] w-[300px]">
      <h3 class="text-xl font-semibold">{{ member.name }}</h3>
      <!--      <p>{{ member.position }}</p>-->
    </div>
  </div>
</template>

<script lang="ts">

import Alexis from '../assets/speakersPhotos/alexis_spring.png';
import Elizabeth from '../assets/speakersPhotos/elizabeth_stone.png';
import Shawna from '../assets/speakersPhotos/shawna_buchanan.png';
import Sofia from '../assets/speakersPhotos/sofia_aliaga.png';
import Todd from '../assets/speakersPhotos/todd_cherner.png';
import Bryce from '../assets/speakersPhotos/bryce_ikeda.png';
import Jade from '../assets/speakersPhotos/jade_kandel.png';
import Jovan from '../assets/speakersPhotos/jovan_tormes.png';
import Richard from '../assets/speakersPhotos/richard_marks.png';


export default {
  data: () => {
    return {
      name: 'Reality-Board',
      realityBoard: [
        {
          image: Richard,
          name: "Dr. Richard Marks",
        },

        {
          image: Elizabeth,
          name: "Dr. Elizabeth Stone",
        },
        {
          image: Sofia,
          name: "Dr. Sofia Aliaga",
        },
        {
          image: Shawna,
          name: "Shawna Buchanan",
        },
        {
          image: Alexis,
          name: "Alexis Springs",
        },
        {
          image: Todd,
          name: "Todd Cherner",
        },
        {
          image: Bryce,
          name: "Bryce Ikeda",
        },
        {
          image: Jade,
          name: "Jade Kandel",
        },
        {
          image: Jovan,
          name: "Jovan Tormes Vaquerano",
        },
      ],
    };
  },
}
</script>

<style>

</style>