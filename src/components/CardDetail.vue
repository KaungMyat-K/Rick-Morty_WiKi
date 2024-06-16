<template>
<div>
  <!-- <Spinner v-if="loading"/>
  <Error v-else-if="errorMessage" :errorMessage="errorMessage" />
  <div
    class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg mt-20">
    <div class="relative">
      <img class="w-full h-48 object-cover"
        :src="character.image"
        alt="Profile Image"/>
    </div>
       <ul class="px-6 py-4">
            <li><span class="font-semibold">Name </span><span class="text-gray-600">{{ character.name }}</span></li>
            <li><span class="font-semibold">Gender </span><span class="text-gray-600">{{ character.gender }}</span></li>
            <li><span class="font-semibold">Location </span><span class="text-gray-600">{{ character.location.name }}</span></li>
            <li><span class="font-semibold">Origin </span><span class="text-gray-600">{{ character.origin.name }}</span></li>
            <li><span class="font-semibold">Species </span><span class="text-gray-600">{{ character.species }}</span></li>
       </ul> 
    <div class="px-6 py-4">
      <span
        class="inline-block px-2 py-1 font-semibold text-teal-900 bg-teal-200 rounded-full"
        >{{ character.status }}</span>
    </div>
  </div> -->

</div>
</template>

<script setup>
import Spinner from './Spinner.vue'
import Error from './Error.vue'
import { useFetchAPI } from "../store/useFetchAPI";


const props = defineProps({
      id:{
        type: String,
        required: true,
      }
  })

  const fetchAPI = useFetchAPI();


</script>

<style lang="scss" scoped>
</style>
