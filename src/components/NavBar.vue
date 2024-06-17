<template>
  <nav class="shadow mb-2">
<div class="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
  <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black">
    <span class="text-black p-1">Rick & Morty</span><span class="bg-gradient-to-r from-blue-900 via-blue-500 to-indigo-300 inline-block text-transparent bg-clip-text text-3xl"> Wiki</span>
  </a>
  <input type="checkbox" class="peer hidden" id="navbar-open" />
  <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
    <span class="sr-only">Toggle Navigation</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </label>
  <nav aria-label="Header Navigation" class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
    <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
      <li class="text-gray-600 md:mr-12 hover:text-blue-600"><router-link to="/">Characters</router-link></li>
      <li class="text-gray-600 md:mr-12 hover:text-blue-600"><router-link  to="/episodes">Episode</router-link></li>
      <li class="text-gray-600 md:mr-12 hover:text-blue-600"><router-link  to="/location">Location</router-link></li>
      <li class="text-gray-600 md:mr-12 hover:text-blue-600">
      </li>
    </ul>
  </nav>
</div>
</nav>
</template>

<script setup>



    
</script>

<style lang="scss" scoped>

</style>