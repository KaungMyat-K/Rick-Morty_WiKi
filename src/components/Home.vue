<template>
    <div>
      <Search/>

        <Spinner v-if="fetchAPI.loading"/>
        <Error v-else-if="fetchAPI.errorMessage" :errorMessage="fetchAPI.errorMessage" />
        <div v-else class="flex justify-center  container mx-auto mt-5">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">  
                <Card :characters="fetchAPI.getCharacters" /> 
            </div>
        </div>     
    </div>
</template>

<script setup>
import Search from './Search.vue'
import Card from './Card.vue'
import Spinner from './Spinner.vue'
import Error from './Error.vue'
import {useFetchAPI} from '../store/useFetchAPI'
import { onMounted, watch } from 'vue'
import {useGetInput} from '../store/useGetInput'

    const fetchAPI = useFetchAPI()
    const getInput = useGetInput();

    watch([getInput.getInput,getInput.getStatusInput,getInput.getGenderInput,getInput.getSpeciesInput],
    ([input,status,gender,species])=>fetchAPI.fetchCharactersByFilter(input,status,gender,species))

    onMounted(()=>{ 
        fetchAPI.fetchCharacters()  
    })
</script>

<style lang="scss" scoped>

</style>