<template>
  <div class ="grid p-0 grid-cols-1 md:grid-cols-2 md:p-6 lg:grid-cols-5 mb-16">
    <div v-for="member in executiveBoard" class="flex flex-col justify-center items-center">
      <img :src ="member.image" alt="Exec Image" class = "p-5 object-cover rounded-full h-[300px] w-[300px]">
      <h3 class="text-xl font-semibold">{{ member.name }}</h3>
      <p>{{ member.position }}</p>
    </div>
  </div>
</template>

<script lang="ts">

import Ashley from '../assets/execPhotos/Ashley.png';
import Arryn from '../assets/execPhotos/Arryn.jpg';
import Amisha from '../assets/execPhotos/Amisha.jpg';
import Enes from '../assets/execPhotos/Enes.jpg';
import Grace from '../assets/execPhotos/Grace.jpg';
import Kristina from '../assets/execPhotos/Kristina.jpg';
import Mana from '../assets/execPhotos/Mana.jpg';
import Martim from '../assets/execPhotos/Martim.jpg';
import Yuanyao from '../assets/execPhotos/Yuanyao.jpg';



export default {
  data: () => {
    return {
      name: 'Exec-Board',
      executiveBoard: [
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
          image: Martim,
          name: "Martim Gaspar",
          position: "Hardware Lead",
        },
        {
          image: Grace,
          name: "Grace Fei",
          position: "Design Lead",
        },
        {
          image: Yuanyao,
          name: "Yuanyao Lin",
          position: "Web Lead",
        },
        {
          image: Amisha,
          name: "Amisha Wadhwa",
          position: "Event Chair",
        },
        {
          image: Kristina,
          name: "Kristina Valikhovskaya",
          position: "Treasurer",
        },
        {
          image: Mana,
          name: "Mana Rose",
          position: "Media Chair",
        },
        {
          image: Enes,
          name: "Enes Eroglu",
          position: "Outreach Chair",
        }
      ],
    };
  },
}
</script>

<style scoped>

</style>