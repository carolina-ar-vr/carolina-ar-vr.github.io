<template>
  <section class="landing-page">
    <div class="w-full min-h-screen flex flex-row align-middle">
      <div class="w-full flex items-center md:w-1/2">
        <div class="justify-center flex-col relative pb-14 md:pl-14">
          <div class="grid place-items-center md:place-items-start">
            <h1 class="glitch text-6xl title text-center md:text-7xl md:text-left md:left-auto md:translate-x-0"
                data-text="CAROLINA">CAROLINA</h1>
            <br>
            <h1 class="glitch text-6xl title text-center md:text-7xl md:text-left md:left-auto md:translate-x-0"
                data-text="AR/VR">AR/VR</h1>
          </div>
          <div class="pt-10 pb-14 px-10 text text-center md:text-left md:px-0">
            UNC-Chapel Hill’s extended reality student organization!
          </div>
          <div class="flex justify-center md:justify-start">
            <a href="https://discord.gg/cYseCtevW9">
              <button class="purpleGradient h-16 w-64">
                JOIN
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="hidden lg:flex lg:items-center lg:justify-center lg:w-1/2 lg:block overflow-hidden">
        <fade-in-image alt="carvr logo"></fade-in-image>
      </div>
    </div>
  </section>

  <section class="what-we-do">
    <div class="w-full flex flex-col md:flex-row md:h-full md:pb-20">
      <div class="w-full flex flex-col">
        <div class="grid place-items-center text-center">
          <h1 class="glitch text-5xl my-20 title text-center md:text-6xl md:text-left md:left-auto md:translate-x-0"
              data-text="WHAT WE DO">WHAT WE DO</h1>
        </div>
        <div class="w-full flex-1 overflow-hidden">
          <div class="flex flex-col justify-center items-center">
            <div
                class="flex flex-col justify-center items-center px-16 py-6 w-full space-y-6 lg:mt-0 lg:space-y-0 lg:space-x-10 lg:flex-row">
              <div class="whatWeDo w-full h-full shadow-2xl ">
                <div class="h-1/2 p-6 justify-center items-center flex">
                  <img src="../assets/CARVR-Explore.jpeg" alt="whatwedo1"
                       class="object-cover h-[208px] w-[322px]">
                </div>
                  <div class="h-full px-6 pb-10 space-y-2 ">
                    <div class="whatWeDoTitle">
                      Explore
                    </div>
                    <p class="h-48 py-2 text-md xl:h-24 2xl:h-20"> We host social events where you can try
                      out various XR hardware while meeting other
                      passionate students!</p>
                    <a href="https://heellife.unc.edu/organization/carvr">
                      <button class="whatWeDoButton h-10 w-40 shadow-2xl">
                        LEARN MORE
                      </button>
                    </a>
                  </div>
              </div>
              <div class="whatWeDo w-full h-full shadow-2xl">
                <div class="h-1/2 p-6 justify-center items-center flex">
                  <img src="../assets/CARVR-Learn.jpeg" alt="whatwedo1"
                       class="object-cover md:h-[208px] md:w-[322px]">
                </div>
                <div class="px-6 pb-10 space-y-2 ">
                  <div class="whatWeDoTitle">
                    Learn
                  </div>
                  <p class="h-48 text-md xl:h-24 2xl:h-20"> We host workshops, panels, research
                    showcases, and other relevant events each semester for students to learn more
                    about XR.</p>
                  <a href="https://linktr.ee/carvr">
                    <button class="whatWeDoButton h-10 w-40 shadow-2xl">
                      LEARN MORE
                    </button>
                  </a>
                </div>
              </div>
              <div class="whatWeDo w-full h-full shadow-2xl ">
                <div class="h-1/2 p-6 justify-center items-center flex">
                  <img src="../assets/CARVR-Develop.jpg" alt="whatwedo1"
                       class="object-cover object-top h-[208px] w-[322px]">
                </div>
                <div class="h-full px-6 pb-10 space-y-2 ">
                  <div class="whatWeDoTitle">
                    Develop
                  </div>
                  <p class="h-48 py-2 text-md xl:h-24 2xl:h-20"> Our development team collaborates to
                    create amazing XR experiences! </p>
                  <a href="https://discord.gg/cYseCtevW9">
                    <button class="whatWeDoButton h-10 w-40 shadow-2xl">
                      LEARN MORE
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="past-events">
    <div class="w-full flex flex-col">
      <div class="grid place-items-center text-center">
        <h1 class="glitch text-5xl my-20 title text-center md:text-6xl md:text-left md:left-auto md:translate-x-0"
            data-text="PAST EVENTS"> PAST EVENTS
        </h1>
        <past-events></past-events>
      </div>
    </div>
  </section>

  <section class="exec-board">
    <div class="w-full">
      <div class="grid place-items-center text-center">
        <h1 class="glitch text-5xl my-20 title text-center md:text-6xl md:text-left md:left-auto md:translate-x-0"
            data-text="ABOUT US">ABOUT US</h1>
      </div>
      <exec-board></exec-board>
    </div>
    <div class="w-full pb-8">
      <div class="w-full h-full flex items-center justify-center">
        <a href="https://www.icxr.org/" class="w-full h-full sm:w-1/3 md:h-1/3">
          <img src="../assets/ICXR-Member-Transparent-White.png" class="w-full">
        </a>
      </div>
    </div>
  </section>

  <carvr-footer></carvr-footer>

</template>

<script lang="ts">
import CarvrFooter from "../components/CarvrFooter.vue";
import ExecBoard from "../components/ExecBoard.vue";
import FadeInImage from "../components/FadeInImage.vue";
import PastEvents from "../components/PastEvents.vue";

export default {
  components: {PastEvents, FadeInImage, ExecBoard, CarvrFooter},
  data: () => {
    return {
      name: 'Home'
    };
  },
}
</script>

<style>
</style>