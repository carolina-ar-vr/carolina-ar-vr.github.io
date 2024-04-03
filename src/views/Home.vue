<template>
  <!-- carolina ar/vr-->
  <pink-fade class = "left-0 p-20"></pink-fade>
  <purple-fade class = "right-0 top-2 p-20"></purple-fade>
  <purple-fade class = "top-1/2 right-1/2 p-20"></purple-fade>

  <section class = "relative align-middle">
    <div class = "w-full h-screen flex flex-row">
      <div class = "w-full flex items-center md:w-1/2">
        <div class = "justify-center flex-col relative pb-14 md:pl-14">
          <div class="grid place-items-center md:place-items-start">
            <h1 class="glitch text-6xl title text-center md:text-7xl md:text-left md:left-auto md:translate-x-0" data-text="CAROLINA">CAROLINA</h1>
            <br>
            <h1 class="glitch text-6xl title text-center md:text-7xl md:text-left md:left-auto md:translate-x-0" data-text="AR/VR">AR/VR</h1>
          </div>
          <div class = "pt-10 pb-14 px-10 text text-center md:text-left md:px-0">
            Carolina AR/VR (aka CARVR) is UNC-Chapel Hill’s extended reality student organization!
          </div>
          <div class="flex justify-center md:justify-start">
            <a href="https://linktr.ee/carvr">
              <button class="purpleGradient h-16 w-64">
                JOIN
              </button>
            </a>
          </div>
        </div>
      </div>
        <div class="hidden lg:flex lg:items-center lg:justify-center lg:w-1/2 lg:block">
            <img src="../assets/CARVR2D.png" alt="carvrlogo">
        </div>
    </div>
  </section>

  <!-- what is ar/vr -->
  <section class = "relative">
   <pink-fade class = "bottom-0 left-0 p-20"></pink-fade>
   <div class = "w-full h-full flex flex-col pb-16 md:flex-row">
     <div class = "w-full md:w-1/2">
       <div class = "justify-center px-12 flex">
         <img src="../assets/GBMPhoto.png" alt="gbmphoto" class = "rounded-2xl shadow-2xl 2xl:max-w-3xl">
       </div>
     </div>
     <div class = "w-full flex md:w-1/2 md:pt-0">
       <div class = "flex-col md:text-left 2xl:justify-center flex">
         <div class="grid place-items-center text-center pt-10 md:pt-0">
           <h1 class="glitch text-5xl title text-center md:text-6xl md:text-left md:left-auto md:translate-x-0" data-text="WHAT IS XR">WHAT IS XR</h1>
         </div>
         <purple-fade class = "top-0 right-0"></purple-fade>
         <div class = "px-6 pt-6 text text-center md:text-left md:px-0 md:pt-12 2xl:pl-2">
           Extended Reality (XR) is an umbrella term encapsulating any technology that provides immersive experiences through
           any sensory domain. XR technology is constantly expanding, and immersion can be achieved through a variety of interfaces
           (e.g. head-mounted displays, olfactory atomizers, haptic wearables).
         </div>
       </div>
     </div>
   </div>
  </section>

  <!-- what we do section -->
  <section class = "relative ">
   <div class = "w-full flex flex-col md:flex-row md:h-full md:pb-20">
     <div class = "w-full flex flex-col">
       <div class="grid place-items-center text-center">
         <h1 class="glitch text-5xl mt-20 title text-center md:text-6xl md:text-left md:left-auto md:translate-x-0" data-text="WHAT WE DO">WHAT WE DO</h1>
       </div>
       <div class= "w-full flex-1 overflow-hidden">
         <div class = "flex flex-col justify-center items-center">
           <div class = "flex flex-col justify-center items-center px-16 py-6 w-full space-y-6 lg:mt-0 lg:space-y-0 lg:space-x-10 lg:flex-row">
             <div class = "bg-carvr-footer w-full h-full shadow-2xl ">
                 <div class = "h-1/2 p-6 justify-center items-center flex">
                     <img src="../assets/CARVR-Explore.jpeg" alt="whatwedo1" class = "object-cover h-[208px] w-[322px]">
                 </div>
                 <div class = "h-full px-6 pb-10 space-y-2 ">
                     <div class = "subtitle">
                         Explore
                     </div>
                     <p class = "h-32 text-md xl:h-24 2xl:h-20"> We host social events where you can try out various XR hardware while meeting other
                       passionate students!</p>
                     <a href="https://heellife.unc.edu/organization/carvr">
                       <button class = "blueGradient h-10 w-40 shadow-2xl">
                         LEARN MORE
                       </button>
                     </a>
                 </div>
             </div>
             <div class = "bg-carvr-footer w-full h-full shadow-2xl">
                 <div class = "h-1/2 p-6 justify-center items-center flex">
                     <img src="../assets/CARVR-Learn.jpeg" alt="whatwedo1" class = "object-cover h-[208px] w-[322px]">
                 </div>
                 <div class = "px-6 pb-10 space-y-2 ">
                     <div class = "subtitle">
                         Learn
                     </div>
                     <p class = "h-32 text-md xl:h-24 2xl:h-20"> We host workshops, panels, research showcases, and other relevant events each semester for students to learn more about XR.</p>
                     <a href="https://discord.gg/cYseCtevW9">
                       <button class = "blueGradient h-10 w-40 shadow-2xl">
                         LEARN MORE
                       </button>
                     </a>
                 </div>
             </div>
             <div class = "bg-carvr-footer w-full h-full shadow-2xl ">
                 <div class = "h-1/2 p-6 justify-center items-center flex">
                     <img src="../assets/CARVR-Develop.jpg" alt="whatwedo1" class = "object-cover object-top h-[208px] w-[322px]">
                 </div>
                 <div class = "h-full px-6 pb-10 space-y-2 ">
                     <div class = "subtitle">
                         Develop
                     </div>
                     <p class = "h-32 text-md xl:h-24 2xl:h-20"> Our development team collaborates to create amazing XR experiences! </p>


                   <!-- include the link to aboutus after it is implemented-->

                     <a href="/">
                       <button class = "blueGradient h-10 w-40 shadow-2xl">
                         LEARN MORE
                       </button>
                     </a>
                 </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <pink-fade class = "top-1/3 right-1/2"></pink-fade>
     <purple-fade class = "top-0 right-0"></purple-fade>
     <purple-fade class = "bottom-0 right-1/2"></purple-fade>
   </div>
  </section>

  <carvr-footer></carvr-footer>

</template>

<script lang="ts">
import PinkFade from '../components/pinkFade.vue';
import PurpleFade from '../components/purpleFade.vue';
import CarvrFooter from "../components/CarvrFooter.vue";

export default {
  components: {CarvrFooter, PurpleFade, PinkFade},
  data: () => {
    return {
      name: 'Home'
    };
  },
}
</script>

<style>
</style>