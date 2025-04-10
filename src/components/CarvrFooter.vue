<script lang="ts">
export default {
  data: () => {
    return {
      name: 'carvr-footer'
    };
  },
}
</script>

<template>
  <section class="footer_background mt-20">
    <div class="flex flex-col items-center justify-center w-full md:flex-row p-4">
      <div class="flex flex-col justify-center items-center md:justify-end md:flex-row md:space-x-16 w-3/4">
        <router-link to="/" class="flex items-center w-1/2 h-1/2 md:w-1/4 md:h-1/4">
          <img src='../assets/CARVR2D.png' alt="carvr logo">
        </router-link>
        <a href="https://www.icxr.org/" class="w-2/3 h-1/2 md:w-1/3 md:h-1/3 flex justify-center">
          <img src="../assets/ICXR-Member-Transparent-White.png" class="" alt="ICXR membership" >
        </a>
      </div>

      <div class="hidden md:block w-px bg-gray-300 self-stretch ml-32"></div>
      <div class="block md:hidden h-px w-full bg-gray-300/20 my-4"></div>

      <div class="flex flex-col justify-center w-3/4 text-lg">
        <div class="flex flex-col justify-center items-center">
        <h2 class="font-bold text-gray-200/50">Connect with us!</h2>
          <div class="flex flex-row space-x-2">
            <ul class="flex flex-row [&>li]:justify-center w-full [&>li]:space-y-4">
              <li class="">
                <a href="https://www.instagram.com/uncarvr/" class="nav_text">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M8,3c-2.761,0 -5,2.239 -5,5v8c0,2.761 2.239,5 5,5h8c2.761,0 5,-2.239 5,-5v-8c0,-2.761 -2.239,-5 -5,-5zM18,5c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,7c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5zM12,9c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"></path></g></g>
                  </svg>
                </a>
              </li>
              <li class="">
                <a href="https://www.linkedin.com/company/uncarvr/" class="nav_text">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M19,3h-14c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2zM9,17h-2.523v-7h2.523zM7.694,8.717c-0.771,0 -1.286,-0.514 -1.286,-1.2c0,-0.686 0.514,-1.2 1.371,-1.2c0.771,0 1.286,0.514 1.286,1.2c0,0.686 -0.514,1.2 -1.371,1.2zM18,17h-2.442v-3.826c0,-1.058 -0.651,-1.302 -0.895,-1.302c-0.244,0 -1.058,0.163 -1.058,1.302c0,0.163 0,3.826 0,3.826h-2.523v-7h2.523v0.977c0.325,-0.57 0.976,-0.977 2.197,-0.977c1.221,0 2.198,0.977 2.198,3.174z"></path></g></g>
                  </svg>
                </a>
              </li>
              <li class="">
                <a href="https://discord.gg/cYseCtevW9" class="nav_text">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M19.952,5.672c-1.904,-1.531 -4.916,-1.79 -5.044,-1.801c-0.201,-0.017 -0.392,0.097 -0.474,0.281c-0.006,0.012 -0.072,0.163 -0.145,0.398c1.259,0.212 2.806,0.64 4.206,1.509c0.224,0.139 0.293,0.434 0.154,0.659c-0.09,0.146 -0.247,0.226 -0.407,0.226c-0.086,0 -0.173,-0.023 -0.252,-0.072c-2.406,-1.492 -5.412,-1.567 -5.99,-1.567c-0.578,0 -3.585,0.075 -5.989,1.567c-0.225,0.14 -0.519,0.07 -0.659,-0.154c-0.14,-0.225 -0.07,-0.519 0.154,-0.659c1.4,-0.868 2.946,-1.297 4.206,-1.509c-0.074,-0.236 -0.14,-0.386 -0.145,-0.398c-0.083,-0.184 -0.273,-0.3 -0.475,-0.28c-0.127,0.01 -3.139,0.269 -5.069,1.822c-1.008,0.931 -3.023,6.379 -3.023,11.089c0,0.083 0.022,0.165 0.063,0.237c1.391,2.443 5.185,3.083 6.05,3.111c0.005,0 0.01,0 0.015,0c0.153,0 0.297,-0.073 0.387,-0.197l0.875,-1.202c-2.359,-0.61 -3.564,-1.645 -3.634,-1.706c-0.198,-0.175 -0.217,-0.477 -0.042,-0.675c0.175,-0.198 0.476,-0.217 0.674,-0.043c0.029,0.026 2.248,1.909 6.612,1.909c4.372,0 6.591,-1.891 6.613,-1.91c0.198,-0.172 0.5,-0.154 0.674,0.045c0.174,0.198 0.155,0.499 -0.042,0.673c-0.07,0.062 -1.275,1.096 -3.634,1.706l0.875,1.202c0.09,0.124 0.234,0.197 0.387,0.197c0.005,0 0.01,0 0.015,0c0.865,-0.027 4.659,-0.667 6.05,-3.111c0.04,-0.072 0.062,-0.153 0.062,-0.236c0,-4.71 -2.015,-10.158 -3.048,-11.111zM8.891,14.87c-0.924,0 -1.674,-0.857 -1.674,-1.913c0,-1.056 0.749,-1.913 1.674,-1.913c0.925,0 1.674,0.857 1.674,1.913c0,1.056 -0.749,1.913 -1.674,1.913zM15.109,14.87c-0.924,0 -1.674,-0.857 -1.674,-1.913c0,-1.056 0.749,-1.913 1.674,-1.913c0.924,0 1.674,0.857 1.674,1.913c0,1.056 -0.75,1.913 -1.674,1.913z"></path></g></g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style>

</style>