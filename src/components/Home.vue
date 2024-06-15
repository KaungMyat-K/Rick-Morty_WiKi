<template>
    <div>
      <Search/>
        <Spinner v-if="loading"/>
        <Error v-else-if="errorMessage" :errorMessage="errorMessage" />
        <div v-else class="flex justify-center  container mx-auto mt-5">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">  
                <Card :characters="getCharacters" /> 
            </div>
        </div>     
    </div>
</template>

<script setup>
import Search from './Search.vue'
import Card from './Card.vue'
import Spinner from './Spinner.vue'
import Error from './Error.vue'
import {useFetchAPI} from '../API/useFetchAPI'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue'


    const fetchAPI = useFetchAPI();

    const {loading,errorMessage,getCharacters} = storeToRefs(fetchAPI);

    
    onMounted(()=>{ 
        fetchAPI.fetchCharacters()  
    })


</script>

<style lang="scss" scoped>

</style>