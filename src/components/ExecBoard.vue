<template>
  <section class="exec-board">
    <div class="w-full">
      <div class="grid place-items-center text-center">
        <h1 class="glitch text-5xl my-20 title text-center md:text-6xl md:text-left md:left-auto md:translate-x-0"
            data-text="EXECUTIVE BOARD">EXECUTIVE BOARD</h1>
      </div>
      <div class="grid p-0 grid-cols-1 md:p-6 lg:grid-cols-4 mb-16">
        <div v-for="member in executiveBoard" class="flex flex-col justify-center items-center">
          <img v-bind:src=member.image alt="Exec Image"
               class="p-5 object-cover rounded-full h-[300px] w-[300px]">
          <h3 class="text-xl font-semibold">{{ member.name }}</h3>
          <p>{{ member.position }}</p>
        </div>
      </div>
    </div>

    <div class="grid place-items-center text-center">
      <h1 class="glitch text-4xl my-12 title text-center md:text-6xl md:text-left md:left-auto md:translate-x-0"
          data-text="OUR ALUMNI">OUR ALUMNI</h1>
    </div>
    <div class="grid p-0 grid-cols-2 md:p-6 lg:grid-cols-4 mb-16">
      <div v-for="alumnus in alumni" class="flex flex-col justify-center items-center">
        <img v-bind:src=alumnus.image alt="Exec Image"
             class="p-5 object-cover rounded-full h-[180px] w-[180px] md:h-[300px] md:w-[300px]">
        <h3 class="text-2x font-semibold">{{ alumnus.name }}</h3>
        <p>{{ alumnus.position }}</p>
      </div>
    </div>
  </section>
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
import Middleton from '../assets/execPhotos/Middleton.png';
import Rebecca from '../assets/execPhotos/Rebecca.png';
import Bumika from '../assets/execPhotos/Bumika.png';

import Jasmin from '../assets/execPhotos/Jasmin.png'
import Amisha from '../assets/execPhotos/Amisha.png'
import Mana from '../assets/execPhotos/Mana.png'
import Martim from '../assets/execPhotos/Martim.png'


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
        {
          image: Rebecca,
          name: "Rebecca Henriques",
          position: "Hardware Lead",
        },
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
          position: "Web Chair",
        },
        {
          image: Bumika,
          name: "Bumika Vanapalli",
          position: "Event Chair",
        },
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
        },
        {
          image: Middleton,
          name: "Middleton Henry ",
          position: "Lab Director",
        }
      ],
      alumni: [
        {
          image: Martim,
          name: "Martim Gaspar",
          position: "Hardware Lead '22-'24",
        },
        {
          image: Jasmin,
          name: "Jasmin Alvarez Martinez",
          position: "Web Lead '22-'23",
        },
        // {
        //   image: Annie,
        //   name: "Annie Pi",
        //   position: "External Outreach Chair (2023-24)",
        // },
        {
          image: Amisha,
          name: "Amisha Wadhwa",
          position: "Event Chair '23-'24",
        },
        {
          image: Mana,
          name: "Mana Rose",
          position: "Media Chair '23-'24",
        },
      ],
    };
  },
}
</script>

<style scoped>

</style>