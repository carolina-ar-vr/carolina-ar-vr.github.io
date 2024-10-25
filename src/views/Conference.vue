<script lang="ts">
import RFMobile from '../assets/RFPoster.png';
import {defineComponent} from "vue";
import CarvrFooter from "../components/CarvrFooter.vue"
import RealityFestBoard from "../components/RealityFestBoard.vue";
import RealityFestSponsors from "../components/RealityFestSponsors.vue";
import RealityFestExhibitors from "../components/RealityFestExhibitors.vue";

export default defineComponent({
  name: 'Conference',
  components: {RealityFestExhibitors, RealityFestSponsors, RealityFestBoard, CarvrFooter},
  methods: {
    scrollToSection() {
      const section = document.getElementById('reality-main');
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
      isVisible: false,
    };
  },
  computed: {
    dropInAnimation() {
      return this.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20";
    },
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true;
    }, 200);
  },
})

</script>

<template>
  <div class="relative w-screen">
    <div
        class="relative h-screen w-full bg-cover bg-bottom md:bg-center bg-fixed"
        :style="{ backgroundImage: `url('${imageUrlMobile}')` }"
    >
      <div :class="dropInAnimation" class="flex flex-col items-center justify-center h-screen">
        <div class="w-full h-1/2 grid place-items-center">
          <div class="grid place-items-center md:hidden">
            <h1 class="text-6xl title text-center" data-text="REALITY">REALITY</h1>
            <h1 class="text-6xl title text-center" data-text="FEST">FEST 2024</h1>
          </div>
          <div class="hidden mt-72 md:grid place-items-center">
            <h1 class="text-9xl title text-center">REALITY FEST 2024</h1>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center mt-10 md:mt-64 z-10 relative">
          <div class="w-auto flex flex-col items-center cursor-pointer" @click="scrollToSection">
            <div class="text-xl md:text-3xl">LEARN MORE</div>
            <div class="animate-bounce mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-current">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Gradient overlay for the fade effect -->
        <div class="absolute inset-x-0 bottom-0 h-[500px] md:h-[200px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-[#121212] before:z-0"></div>
      </div>
    </div>
    <section id="reality-main" class="align-middle h-full">
      <div class="w-full flex flex-col md:flex-row">
        <div class="w-full flex items-center md:h-full md:w-1/2">
          <div class="flex flex-col md:place-items-start w-full md:mt-48">
            <h1 class="text-6xl md:text-7xl title text-center w-full"
                data-text="REALITY FEST">REALITY FEST
            </h1>
            <h1 class="text-5xl title text-center w-full"
                data-text="REALITY FEST">October 26th, 2024
            </h1>
            <div class="flex flex-row justify-center w-full space-x-2 md:space-x-8 mt-20 px-2">
              <div class="flex justify-center md:justify-start">
                <a href="https://www.eventbrite.com/e/reality-fest-tickets-1027663799087?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl ">
                  <button class="purpleGradient h-12 w-32 md:w-48">
                    RSVP
                  </button>
                </a>
              </div>
              <div class="flex justify-center md:justify-start">
                <a href="https://forms.gle/Y2LNtroATTbwy7f8A">
                  <button class="purpleGradient h-12 w-32 md:w-48">
                    VOLUNTEER
                  </button>
                </a>
              </div>
              <div class="flex justify-center md:justify-start">
                <a href="https://docs.google.com/document/d/1Zi27T38dN1tiYmseN1M5yHR6-Ky-LkMoBGyOCU0ecBo/edit?usp=sharing">
                  <button class="purpleGradient h-12 w-32 md:w-48">
                    SCHEDULE
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
    <section class="about">
      <div class="flex flex-col md:place-items-start w-full mt-24">
        <h1 class="text-6xl md:text-7xl title text-center w-full">WHAT IS REALITY FEST?</h1>
        <div class="text-xl text text-center w-full md:px-48 mt-10">Reality Fest is an XR conference
          organized by Carolina AR/VR –
          UNC-Chapel Hill's XR student organization. Reality Fest functions to connect and inspire
          new
          and experienced XR enthusiasts throughout academia and industry in North Carolina and
          beyond.
          It is an opportunity for students and professionals from UNC-Chapel Hill, Duke University,
          NC State University, along with various other institutions and companies to connect.
        </div>
      </div>
    </section>
    <section class="speakers">
      <div class="w-full">
        <div class="grid place-items-center text-center mt-20">
          <h1 class="text-6xl md:text-7xl title text-center overflow-y-hidden">SPEAKERS</h1>
        </div>
        <reality-fest-board/>
      </div>
    </section>

    <section class="exhibitors">
      <div class="w-full">
        <div class="grid place-items-center text-center mt-20">
          <h1 class="text-6xl md:text-7xl title text-center overflow-y-hidden">EXHIBITORS</h1>
        </div>
      </div>
      <reality-fest-exhibitors/>
    </section>

    <section class="sponsors">
      <div class="w-full">
        <div class="grid place-items-center text-center mt-20">
          <h1 class="text-6xl md:text-7xl title text-center overflow-y-hidden">SPONSORS</h1>
        </div>
      </div>
      <reality-fest-sponsors class="mt-10"/>
    </section>
    <section class="align-middle h-[100px]">
    </section>
  </div>
  <carvr-footer></carvr-footer>

</template>