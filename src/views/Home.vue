<template>

  <pink-fade class = "left-0 p-20"></pink-fade>
  <purple-fade class = "right-0 top-2 p-20"></purple-fade>
  <purple-fade class = "top-1/2 right-1/2 p-20"></purple-fade>

  <!-- carolina ar/vr-->
  <section class = "relative flex-col align-middle">
    <div class = "w-screen h-screen inset-0 flex">
      <div class = "w-1/2 flex items-center">
        <div class = "pl-14 items-center justify-center flex-col relative pb-28">
          <div class = "absolute title">
            CAROLINA <br> AR/VR
          </div>
          <div class = "absolute title pl-1.5 glow-text">
            CAROLINA <br> AR/VR
          </div>
          <div class = "pt-60 pb-28 text">
            Carolina AR/VR (aka CARVR) is a student organization at UNC-Chapel Hill that promotes student
            exploration and development of extended reality technologies!
          </div>
          <a href = "https://linktr.ee/carvr">
            <button class = "purpleGradient h-16 w-64">
              JOIN
            </button>
          </a>
        </div>
      </div>
      <div class = "w-1/2 flex items-center pb-28">
        <img src="../assets/CARVR2D.png" alt="carvrlogo">
      </div>
    </div>
  </section>

   <!-- what is ar/vr -->
  <section class = "relative">
   <pink-fade class = "bottom-0 left-0 p-20"></pink-fade>
   <div class = "w-screen h-full flex pb-24">
     <div class = "w-1/2">
       <div class = "justify-center p-12">
         <img src="../assets/GBMPhoto.png" alt="gbmphoto" class = "rounded-2xl shadow-2xl">
       </div>
     </div>
     <div class = "w-1/2 pt-12 p-6 flex">
       <div class = "flex-col">
         <div class = "absolute title">
           WHAT IS AR/VR
         </div>
         <div class = "absolute title pl-1.5 glow-text">
           WHAT IS AR/VR
         </div>
         <purple-fade class = "top-0 right-0"></purple-fade>
         <div class = "pt-32 text">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
           velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
           proident, sunt in culpa qui officia deserunt mollit anim id est laborum
         </div>
       </div>
     </div>
   </div>
  </section>

  <!-- what we do section -->
  <section class = "relative">
   <div class = "w-screen h-full flex">
     <div class = "flex-col">
       <div class = "relative h-1/4 w-screen items-center justify-center flex">
         <div class = "absolute title">
           WHAT WE DO
         </div>
         <div class = "absolute title pl-1.5 sm:pl-3 glow-text">
           WHAT WE DO
         </div>
       </div>
       <div class= "w-screen h-screen">
         <div class = "flex justify-center h-full w-full px-28 space-x-10">
           <div class = "bg-carvr-footer w-1/4 h-1/2 shadow-2xl">
             <div class = "h-1/2 p-6">
               <img src="../assets/linktree.png" alt="whatwedo1" class = "object-center h-full w-full">
             </div>
             <div class = "h-1/2 px-6 space-y-2">
               <div class = "subtitle">
                 Linktree
               </div>
               <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
               <button class = "blueGradient h-1/4 w-40 shadow-2xl">
                 LEARN MORE
               </button>
             </div>
           </div>
           <div class = "bg-carvr-footer w-1/4 h-1/2 shadow-2xl">
             <div class = "h-1/2 p-6">
               <img src="../assets/ICXR.png" alt="whatwedo2" class = "object-center h-full w-full">
             </div>
             <div class = "h-1/2 px-6 space-y-2">
               <div class = "subtitle">
                 Member of ICXR
               </div>
               <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
               <button class = "blueGradient h-1/4 w-40 shadow-2xl">
               LEARN MORE
               </button>
             </div>
           </div>
           <div class = "bg-carvr-footer w-1/4 h-1/2 shadow-2xl">
             <div class = "h-1/2 p-6">
               <img src="../assets/GBMPhoto.png" alt="whatwedo3" class = "object-center h-full w-full">
             </div>
             <div class = "h-1/2 px-6 space-y-2">
               <div class = "subtitle">
                 Our Projects
               </div>
               <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
               <button class = "blueGradient h-1/4 w-40 shadow-2xl">
                 LEARN MORE
               </button>
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

  <!-- ICXR -->
  <section class = "relative">
    <div class = "flex-row">
      <div class = "w-3/5">
        <div class = "relative top-0 items-center justify-center flex">
          <div class = "absolute title">
            MEMBER OF ICXR
          </div>
          <div class = "absolute title pl-1.5 glow-text">
            MEMBER OF ICXR
          </div>
        </div>
      </div>
      <div class = "w-2/5 p-6 border">
        <img src="../assets/ICXR-Banner-Transparent-White.png" alt="whatwedo2" class = "object-center">
      </div>
    </div>
  </section>
  <carvr-footer class=" "></carvr-footer>

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