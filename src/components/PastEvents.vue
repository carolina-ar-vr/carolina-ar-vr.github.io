<template>
  <section class="past-events">
    <div class="w-full flex flex-col">
      <div class="grid place-items-center text-center">
        <h1 class="glitch text-5xl my-20 title text-center md:text-6xl md:text-left md:left-auto md:translate-x-0"
            data-text="PAST EVENTS"> PAST EVENTS
        </h1>
        <Splide
            class="w-full"
            :options="{
        rewind: true,
        focus: 'center',
        perPage: 3,
        pagination: false,
        peek: { before: 50, after: 50 },
        breakpoints: {
          1400: {
            perPage: 2,
          },
          940: {
            perPage: 1,
          },
        }
      }">
          <SplideSlide v-for="photo in photos" class="p-4">
            <img class="pastEvents h-[275px] w-[275px] md:h-[450px] md:w-[450px] object-cover mx-auto"
                 v-bind:src=photo.image alt="Sample 2">
            <h3 class="text-lg font-bold mt-8">{{ photo.description }}</h3>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import markstalk23 from '../assets/pastEventsPhotos/drmarkstalk23.png';
import realityfest24 from '../assets/pastEventsPhotos/realityfest24.png';
import aframeworkshop25 from '../assets/pastEventsPhotos/aframeworkshop25.png';
import xrresearchshowcase24 from '../assets/pastEventsPhotos/xrresearchshowcase24.png';

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data: () => {
    return {
      name: 'past-events',
      photos: [
        {
          image: aframeworkshop25,
          description: "Intro to AFrame Workshop 2025",
        },
        {
          image: realityfest24,
          description: "Reality Fest 2024",
        },
        {
          image: xrresearchshowcase24,
          description: "XR Research Showcase 2024",
        },
        {
          image: markstalk23,
          description: "Dr Marks Talk 2023",
        },
      ],
    };
  },
}
</script>

<style scoped>

</style>