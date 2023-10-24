<template>

  <div className="w-full flex py-6 px-6 items-center absolute inset-x-0 top-0 max-h-[96px] nav_background">
    <ul>
      <img src = '/src/assets/CARVR2D.png' alt = "carvr logo" className="w-24 h-20">
      <li><router-link to="/about" className="cursor-pointer mr-12 text-white nav_text hover:scale-125 duration-300 hover:text-black-400">
        About
      </router-link></li>

      <li><router-link to="/events" className="cursor-pointer mr-12 text-white nav_text hover:scale-125 duration-300 hover:text-black-400">
        Events
      </router-link></li>

      <li><router-link to="/discover" className="cursor-pointer mr-12 text-white nav_text hover:scale-125 duration-300 hover:text-black-400">
        Discover
      </router-link></li>

      <li><router-link to="/contact" className="cursor-pointer mr-12 text-white nav_text hover:scale-125 duration-300 hover:text-black-400">
        Contact
      </router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data: () => {
    return {
      name: 'nav-bar'
    };
  },
}
</script>

<style scoped>

  h1 {
    color: #213547;
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;

  }
  li {
    margin-right: 15px;
    color: #FFF;
    font-family: Chakra Petch;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: black;
  }
  img {

  }
  div {

    border-radius: 6px 6px 0px 0px;
    background: rgba(255, 255, 255, 0.20);
    box-shadow: 0px 4px 14px 0px rgba(21, 38, 92, 0.40);
  }
</style>