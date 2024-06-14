<template>
    <div>
      <Search/>
        <Spinner v-if="loading"/>
        <Error v-else-if="errorMessage" :errorMessage="errorMessage" />
        <div v-else class="flex justify-center  container mx-auto mt-5">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">  
                <Card :data="data" /> 
            </div>
        </div>     
    </div>
</template>

<script setup>
import Search from './Search.vue'
import Card from './Card.vue'
import Spinner from './Spinner.vue'
import Error from './Error.vue'
import axios from 'axios';
import { onMounted, ref } from 'vue';

let loading = ref(true);
let data = ref([]);
let errorMessage = ref('');

    onMounted(()=>{
           fetchData()   
    })

    let fetchData = async ()=>{
        await axios.get('https://rickandmortyapi.com/api/character')
        .then(res=> {
            data.value= res.data.results
            loading.value=false
        })
        .catch(err=>{
            errorMessage.value = err.message
            loading.value=false
        })
    }

</script>

<style lang="scss" scoped>

</style>