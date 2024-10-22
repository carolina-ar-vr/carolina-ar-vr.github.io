<script lang="ts">
import RFMobile from '../assets/RFPoster.png';
import {defineComponent} from "vue";
import CarvrFooter from "../components/CarvrFooter.vue"
import RealityFestBoard from "../components/RealityFestBoard.vue";

export default defineComponent({
  name: 'Conference',
  components: {RealityFestBoard, CarvrFooter},
  methods: {
    scrollToSection() {
      const section = document.getElementById('target-section');
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'  // Smooth scroll
        });
      }
    }
  },
  data() {
    return {
      imageUrlMobile: RFMobile,
    };
  },
})
</script>

<template>
  <div class="relative w-screen">
    <!-- Full-screen background image -->
    <div
        class="relative h-screen w-full bg-cover md:bg-center bg-fixed"
        :style="{ backgroundImage: `url('${imageUrlMobile}')` }"
    >
      <div class="w-full h-1/2">
        <div class="grid place-items-center md:hidden mt-48">
          <h1 class="text-6xl title text-center"
              data-text="REALITY">REALITY</h1>
          <h1 class="text-6xl title text-center"
              data-text="FEST">FEST 2024</h1>
        </div>
        <div class="place-items-center hidden md:block md:place-items-start mt-64">
          <h1 class="text-9xl title text-center"
              data-text="REALITY FEST">REALITY FEST 2024
          </h1>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center mt-10 md:mt-2 z-20">
        <div class="w-auto flex flex-col items-center cursor-pointer"
             @click="scrollToSection">
          <div class="text-xl md:text-3xl">LEARN MORE</div>
          <div class="animate-bounce mt-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-6 h-6 text-current"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- Gradient overlay for the fade effect -->
      <div
          class="absolute inset-0 pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-[#121212] before:z-0"></div>
    </div>
    <section id="target-section" class="align-middle h-full">
      <div class="w-full flex flex-col md:flex-row">
        <div class="w-full flex items-center md:h-full md:w-1/2">
          <div class="flex flex-col md:place-items-start w-full md:mt-48">
            <h1 class="text-6xl md:text-7xl title text-center w-full"
                data-text="REALITY FEST">REALITY FEST
            </h1>
            <h1 class="text-5xl title text-center w-full"
                data-text="REALITY FEST">'Catchphrase'
            </h1>
            <div class="flex flex-row justify-center w-full space-x-12 md:space-x-32 mt-20">
              <div class="flex justify-center md:justify-start">
                <a href="https://www.eventbrite.com/e/reality-fest-tickets-1027663799087?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl ">
                  <button class="purpleGradient h-16 w-32 md:w-64 rounded-sm">
                    RSVP
                  </button>
                </a>
              </div>
              <div class="flex justify-center md:justify-start">
                <a href="https://forms.gle/QVhQQdbAmfVVPxBf6">
                  <button class="purpleGradient h-16 w-32 md:w-64 rounded-sm">
                    CONTRIBUTE
                  </button>
                </a>
              </div>
            </div>

          </div>
        </div>
        <div class="w-full mt-10 px-4 flex items-center md:h-full md:w-1/2">
          <img src="../assets/RF_HL.png" alt="realityfest"
               class="rounded-2xl shadow-2xl">
        </div>
      </div>
    </section>
    <section>
      <div class="flex flex-col md:place-items-start w-full mt-24">
        <h1 class="text-6xl md:text-7xl title text-center w-full">WHAT IS REALITY FEST?</h1>
        <div class="text-xl text text-center w-full md:px-48 mt-10">Reality Fest is an XR conference
          organized by Carolina AR/VR –
          UNC-Chapel Hill's XR student organization. Reality Fest functions to connect and inspire
          new
          and experienced XR enthusiasts throughout academia and industry in North Carolina and
          beyond.
          It is an opportunity for students and professionals from UNC-Chapel Hill, Duke University,
          NC State University, along with various other institutions and companies to connect.'
        </div>
      </div>
    </section>
    <section>
      <div class="w-full">
        <div class="grid place-items-center text-center mt-20">
          <h1 class="text-6xl md:text-7xl title text-center overflow-y-hidden">SPEAKERS</h1>
        </div>
        <reality-fest-board></reality-fest-board>
      </div>
    </section>
    <section class="align-middle h-[100px]">
    </section>
  </div>
  <carvr-footer></carvr-footer>

</template>

<style>

</style>