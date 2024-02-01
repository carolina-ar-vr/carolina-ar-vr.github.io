<template>

  <pink-fade class = "left-0 p-20"></pink-fade>
  <purple-fade class = "right-0 top-2 p-20"></purple-fade>
  <purple-fade class = "top-1/2 right-1/2 p-20"></purple-fade>

  <!-- carolina ar/vr-->
  <section class = "relative flex-col flex align-middle">
    <div class = "w-screen h-screen inset-0 flex">
      <div class = "w-1/2 flex items-center">
        <div class = "pl-14 items-center justify-center flex-col relative pb-28">
          <h1 class = "absolute">
            CAROLINA <br> AR/VR
          </h1>
          <h1 class = "absolute pl-1.5 glow-text">
            CAROLINA <br> AR/VR
          </h1>
          <h3 class = "pt-60 pb-28">
            Carolina AR/VR (aka CARVR) is a student organization at UNC-Chapel Hill that promotes student
            exploration and development of extended reality technologies!
          </h3>
          <button class = "purpleGradient h-16 w-72">
            LEARN MORE
          </button>
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
         <h1 class = "absolute">
           WHAT IS AR/VR
         </h1>
         <h1 class = "absolute pl-1.5 glow-text">
           WHAT IS AR/VR
         </h1>
         <purple-fade class = "top-0 right-0"></purple-fade>
         <h3 class = "pt-32">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
           velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
           proident, sunt in culpa qui officia deserunt mollit anim id est laborum
         </h3>
       </div>
     </div>
   </div>
  </section>

  <!-- what we do section -->
  <section class = "relative">
   <div class = "w-screen h-screen flex">
     <div class = "flex-col">
       <div class = "relative h-1/4 w-screen items-center justify-center flex">
         <h1 class = "absolute">
           WHAT WE DO
         </h1>
         <h1 class = "absolute pl-3 glow-text">
           WHAT WE DO
         </h1>
       </div>
       <div class= "w-screen h-screen">
         <div class = "flex justify-center h-full w-full px-28 space-x-10">
           <div class = "bg-carvr-footer w-1/4 h-1/2 shadow-2xl">
             <div class = "h-1/2 p-6">
               <img src="../assets/GBMPhoto.png" alt="whatwedo1" class = "object-fill h-full w-full">
             </div>
             <div class = "h-1/2 px-6 space-y-2">
               <h4>Linktree</h4>
               <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
               <button class = "blueGradient h-1/4 w-40 shadow-2xl">
                 LEARN MORE
               </button>
             </div>
           </div>
           <div class = "bg-carvr-footer w-1/4 h-1/2 shadow-2xl">
             <div class = "h-1/2 p-6">
               <img src="../assets/ICXR.png" alt="whatwedo2" class = "object-fill h-full w-full">
             </div>
             <div class = "h-1/2 px-6 space-y-2">
               <h4>Member of ICXR</h4>
               <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
               <button class = "blueGradient h-1/4 w-40 shadow-2xl">
               LEARN MORE
               </button>
             </div>
           </div>
           <div class = "bg-carvr-footer w-1/4 h-1/2 shadow-2xl">
             <div class = "h-1/2 p-6">
               <img src="../assets/GBMPhoto.png" alt="whatwedo3" class = "object-fill h-full w-full">
             </div>
             <div class = "h-1/2 px-6 space-y-2">
               <h4>Our Projects</h4>
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