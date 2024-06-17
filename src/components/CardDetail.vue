<template>
<div>
<!--   
  <Spinner v-if="fetchAPI.loading"/>
  <Error v-else-if="fetchAPI.errorMessage" :errorMessage="fetchAPI.errorMessage" />
  <div
    class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg mt-20">
    <div class="relative">
      <img class="w-full h-48 object-cover"
        :src="fetchAPI.getCharacterById.image"
        alt="Profile Image"/>
    </div>
       <ul class="px-6 py-4">
            <li><span class="font-semibold">Name </span><span class="text-gray-600">{{ fetchAPI.getCharacterById.name }}</span></li>
            <li><span class="font-semibold">Gender </span><span class="text-gray-600">{{ fetchAPI.getCharacterById.gender }}</span></li>
            <li><span class="font-semibold">Location </span><span class="text-gray-600">{{ fetchAPI.getCharacterById.location.name }}</span></li>
            <li><span class="font-semibold">Origin </span><span class="text-gray-600">{{ fetchAPI.getCharacterById.origin.name }}</span></li>
            <li><span class="font-semibold">Species </span><span class="text-gray-600">{{ fetchAPI.getCharacterById.species }}</span></li>
       </ul> 
    <div class="px-6 py-4">
      <span
        class="inline-block px-2 py-1 font-semibold text-teal-900 bg-teal-200 rounded-full"
        >{{ fetchAPI.getCharacterById.status }}</span>
    </div>
  </div> -->

</div>
</template>

<script setup>
import Spinner from './Spinner.vue'
import Error from './Error.vue'
import { useFetchAPI } from "../store/useFetchAPI";
import { onMounted } from 'vue';


const props = defineProps({
      id:{
        type: String,
        required: true,
      }
  })

  const fetchAPI = useFetchAPI();
  console.log('fetch',fetchAPI.getCharacterById)

  onMounted(()=>{
    fetchAPI.fetchCharacterById(props.id)
  })

</script>

<style lang="scss" scoped>
</style>
