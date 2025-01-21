<template>
  <div class="grid p-0 grid-cols-1 md:grid-cols-2 md:p-6 lg:grid-cols-5 mb-16">
    <div v-for="member in executiveBoard" class="flex flex-col justify-center items-center">
      <img v-bind:src=member.image alt="Exec Image"
           class="p-5 object-cover rounded-full h-[300px] w-[300px]">
      <h3 class="text-xl font-semibold">{{ member.name }}</h3>
      <p>{{ member.position }}</p>
    </div>
  </div>
</template>

<script lang="ts">

import Ashley from '../assets/execPhotos/Ashley.png';
import Arryn from '../assets/execPhotos/Arryn.png';
import Grace from '../assets/execPhotos/Grace.png';
import Kristina from '../assets/execPhotos/Kristina.png';
import Yuanyao from '../assets/execPhotos/Yuanyao.png';
import Kris from '../assets/execPhotos/Kris.png';
import Jonathan from '../assets/execPhotos/Jonathan.png';
import Ivone from '../assets/execPhotos/Ivone.png';
import Carrie from '../assets/execPhotos/Carrie.png';

export default {
  data: () => {
    return {
      name: 'Exec-Board',
      executiveBoard: [
        {
          image: Kris,
          name: "Kris Jordan",
          position: "Advisor",
        },
        {
          image: Ashley,
          name: "Ashley Neall",
          position: "President",
        },
        {
          image: Arryn,
          name: "Arryn O'brien",
          position: "Software Lead",
        },
        {
          image: Jonathan,
          name: "Jonathan Zhao",
          position: "Software Lead",
        },
        // {
        //   image: ,
        //   name: "",
        //   position: "Hardware Lead",
        // },
        {
          image: Grace,
          name: "Grace Fei",
          position: "Design Lead",
        },
        {
          image: Ivone,
          name: "Ivone Alexander",
          position: "Design Lead",
        },
        {
          image: Yuanyao,
          name: "Yuanyao Lin",
          position: "Web Lead",
        },
        // {
        //   image: ,
        //   name: "",
        //   position: "Event Chair",
        // },
        {
          image: Kristina,
          name: "Kristina Valikhovskaya",
          position: "Treasurer",
        },
        // {
        //   image: ,
        //   name: "",
        //   position: "External Outreach Chair",
        // },
        {
          image: Carrie,
          name: "Carrie Gan",
          position: "Internal Outreach Chair",
        }
      ],
    };
  },
}
</script>

<style scoped>

</style>