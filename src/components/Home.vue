<template>
    <div>
      <!-- <Search 
      @handleInput="handleInput"
      @handleSubmit="handleSubmit"
      @handleStatus="handleStatus"
      @handleSpecies="handleSpecies"
      @handleGender="handleGender"
      /> -->
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
import {useFetchAPI} from '../store/useFetchAPI'
import { storeToRefs } from 'pinia';
import { onMounted, ref, watch } from 'vue'
import {useGetInput} from '../store/useGetInput'

    const fetchAPI = useFetchAPI()
    const {loading,errorMessage,getCharacters} = storeToRefs(fetchAPI);

    // const input = ref('')
    // const statusInput = ref('')
    // const speciesInput = ref('')
    // const genderInput = ref('')

    // let handleStatus = (e)=>{
    //     statusInput.value = e
    //     console.log(e);
    // }

    // let handleSpecies = (e)=>{
    //     speciesInput.value = e
    //     console.log(e);
    // }

    // let handleGender = (e)=>{
    //     genderInput.value = e
    //     console.log(e);
    // }

    // let handleInput = (e)=>{
    //     input.value = e
    // }

    // let handleSubmit = (e)=>{
    //     input.value = e
    // }

    const getInput = useGetInput();

    // let {handleInput,handleSubmit,handleStatus,handleSpecies,handleGender,input,statusInput,speciesInput,genderInput,searchInput} = storeToRefs(getInput)


    onMounted(()=>{ 
        fetchAPI.fetchCharacters()  
    })


</script>

<style lang="scss" scoped>

</style>