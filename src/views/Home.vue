<template>
  <!-- carolina ar/vr-->
  <pink-fade class = "left-0 p-20"></pink-fade>
  <purple-fade class = "right-0 top-2 p-20"></purple-fade>
  <purple-fade class = "top-1/2 right-1/2 p-20"></purple-fade>

  <section class = "relative flex-col align-middle">
    <div class = "w-full h-screen flex">
      <div class = "w-full flex items-center md:w-1/2">
        <div class = "justify-center flex-col relative pb-14 md:pl-14">
          <div class="grid place-items-center md:place-items-start">
            <h1 class="glitch glitch-title title font-extrabold text-center md:text-left md:left-auto md:translate-x-0" data-text="CAROLINA">CAROLINA</h1>
            <br>
            <h1 class="glitch glitch-title title font-extrabold text-center md:text-left md:left-auto md:translate-x-0" data-text="AR/VR">AR/VR</h1>
          </div>
          <div class = "pt-10 pb-28 px-10 text text-center md:text-left md:px-0">
            Carolina AR/VR (aka CARVR) is a student organization at UNC-Chapel Hill that promotes student
            exploration and development of extended reality technologies!
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
      <div class = "hidden flex items-center lg:w-1/2 lg:block">
        <img src="../assets/CARVR2D.png" alt="carvrlogo">
      </div>
    </div>
  </section>

  <!-- what is ar/vr -->
  <section class = "relative">
   <pink-fade class = "bottom-0 left-0 p-20"></pink-fade>
   <div class = "w-full h-full flex flex-col pb-16 md:flex-row">
     <div class = "w-full md:w-1/2">
       <div class = "justify-center px-12">
         <img src="../assets/GBMPhoto.png" alt="gbmphoto" class = "rounded-2xl shadow-2xl">
       </div>
     </div>
     <div class = "w-full flex md:w-1/2 md:pt-0">
       <div class = "flex-col md:text-left">
         <div class="grid place-items-center text-center">
           <h1 class="glitch glitch-subtitle title text-center md:glitch-title md:text-left md:left-auto md:translate-x-0" data-text="WHAT IS XR">WHAT IS XR</h1>
         </div>
         <purple-fade class = "top-0 right-0"></purple-fade>
         <div class = "px-6 pt-6 text md:px-0 md:pt-12">
          XR or Extended Reality is an umbrella term encapsulating any technology that provides immersion into experiences through any sensory domain.
          We can further categorize XR into AR, MR, VR. AR being Augmented Reality where we augment what's already there.
          MR for Mixed Reality having real-world interactions with virtual augmentation. VR for Virtual Reality where there is a total immersion in a virtual space.
          Our different senses correlate to the different XR sensory domains!
         </div>
       </div>
     </div>
   </div>
  </section>

  <!-- what we do section -->
  <section class = "relative ">
   <div class = "w-full flex flex-col md:flex-row md:h-screen">
     <div class = "w-full flex flex-col">
       <div class="grid place-items-center text-center">
         <h1 class="glitch glitch-subtitle title text-center md:glitch-title md:text-left md:left-auto md:translate-x-0" data-text="WHAT WE DO">WHAT WE DO</h1>
       </div>
       <div class= "w-full flex-1 overflow-hidden">
         <div class = "flex flex-col justify-center items-center">
           <div class = "flex flex-col justify-center items-center mt-10 p-16 w-full space-y-12 md:mt-0 md:space-y-0 md:space-x-10 md:flex-row">
             <div class = "bg-carvr-footer w-full h-full shadow-2xl ">
                 <div class = "h-1/2 p-6 justify-center items-center flex">
                     <img src="../assets/linktree.png" alt="whatwedo1" class = "object-cover h-[208px] w-[322px]">
                 </div>
                 <div class = "h-full px-6 pb-10 space-y-2 ">
                     <div class = "subtitle">
                         Linktree
                     </div>
                     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                     <button class = "blueGradient h-10 w-40 shadow-2xl">
                         LEARN MORE
                     </button>
                 </div>
             </div>
             <div class = "bg-carvr-footer w-full h-full shadow-2xl ">
                 <div class = "h-1/2 p-6 justify-center items-center flex">
                     <img src="../assets/linktree.png" alt="whatwedo1" class = "object-cover h-[208px] w-[322px]">
                 </div>
                 <div class = "h-full px-6 pb-10 space-y-2 ">
                     <div class = "subtitle">
                         Linktree
                     </div>
                     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                     <button class = "blueGradient h-10 w-40 shadow-2xl">
                         LEARN MORE
                     </button>
                 </div>
             </div>
             <div class = "bg-carvr-footer w-full h-full shadow-2xl ">
                 <div class = "h-1/2 p-6 justify-center items-center flex">
                     <img src="../assets/linktree.png" alt="whatwedo1" class = "object-cover h-[208px] w-[322px]">
                 </div>
                 <div class = "h-full px-6 pb-10 space-y-2 ">
                     <div class = "subtitle">
                         Linktree
                     </div>
                     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                     <button class = "blueGradient h-10 w-40 shadow-2xl">
                         LEARN MORE
                     </button>
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