<script lang="ts">
export default {
  data: () => {
    return {
      name: 'what-we-do'
    };
  },
}
</script>

<template>
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
                class="flex flex-col justify-center items-center px-6 py-6 w-full md:px-16 space-y-6 lg:mt-0 lg:space-y-0 lg:space-x-10 lg:flex-row">
              <div class="whatWeDo w-full h-full shadow-2xl ">
                <div class="h-1/2 p-6 justify-center items-center flex">
                  <img src="../assets/CARVR-Explore.jpeg" alt="whatwedo1"
                       class="object-cover h-[208px] w-[322px]">
                </div>
                <div class="h-full px-6 pb-10 space-y-2 ">
                  <div class="whatWeDoTitle">
                    Explore
                  </div>
                  <p class="h-32 py-2 text-md 2xl:h-20"> We host social events where you can
                    try
                    out various XR hardware while meeting other
                    passionate students!</p>
                  <a href="https://heellife.unc.edu/organization/carvr" class="flex justify-center md:justify-start">
                    <button class="button h-10 w-40 shadow-2xl">
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
                  <p class="h-32 text-md 2xl:h-20"> We host workshops, panels, research
                    showcases, and other relevant events each semester for students to learn more
                    about XR!
                  </p>
                  <a href="https://linktr.ee/carvr" class="flex justify-center md:justify-start">
                    <button class="button h-10 w-40 shadow-2xl">
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
                  <p class="h-32 py-2 text-md 2xl:h-20"> Our development team collaborates
                    to create amazing XR experiences! Join our Discord to learn more!
                  </p>
                  <a href="https://discord.gg/cYseCtevW9" class="flex justify-center md:justify-start">
                    <button class="button h-10 w-40 shadow-2xl">
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
</template>

<style scoped>

</style>