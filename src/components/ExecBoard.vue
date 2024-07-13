<template>
  <div class ="grid p-0 grid-cols-1 md:grid-cols-2 md:p-6 lg:grid-cols-5 mb-16">
    <div v-for="member in executiveBoard" class="flex flex-col justify-center items-center">
      <img v-bind:src ="'src/assets/execPhotos/' + member.image" alt="Exec Image" class = "p-5 object-cover rounded-full h-[300px] w-[300px]">
      <h3 class="text-xl font-semibold">{{ member.name }}</h3>
      <p>{{ member.position }}</p>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  data: () => {
    return {
      name: 'Exec-Board',
      executiveBoard: [
        {
          image: "kris.jpeg",
          name: "Kris Jordan",
          position: "Advisor",
        },
        {
          image: "Ashley.png",
          name: "Ashley Neall",
          position: "President",
        },
        {
          image: "Arryn.jpg",
          name: "Arryn O'brien",
          position: "Software Lead",
        },
        {
          image: "Martim.jpg",
          name: "Martim Gaspar",
          position: "Hardware Lead",
        },
        {
          image: "Grace.jpg",
          name: "Grace Fei",
          position: "Design Lead",
        },
        {
          image: "Yuanyao.jpg",
          name: "Yuanyao Lin",
          position: "Web Lead",
        },
        {
          image: "Amisha.jpg",
          name: "Amisha Wadhwa",
          position: "Event Chair",
        },
        {
          image: "Kristina.jpg",
          name: "Kristina Valikhovskaya",
          position: "Treasurer",
        },
        {
          image: "Mana.jpg",
          name: "Mana Rose",
          position: "Media Chair",
        },
        {
          image: "Enes.jpg",
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