import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useGetInput = defineStore('getInput',()=>{

    const searchInput = ref('')
    const statusInput = ref('')
    const speciesInput = ref('')
    const genderInput = ref('')

    let handleInput = (e)=>{
        searchInput.value = e.target.value  
    }
    
    let getInput = computed(()=> searchInput)
    let getStatusInput = computed(()=> statusInput)
    let getSpeciesInput = computed(()=> speciesInput)
    let getGenderInput = computed(()=> genderInput)

    let handleSubmit = (e)=>{
        e.preventDefault();
        statusInput.value = ''
        speciesInput.value = ''
        genderInput.value = ''
    }
    
    let handleStatus = (e)=>{  
        statusInput.value = e.target.value
    }
    
    let handleSpecies = (e)=>{
        speciesInput.value = e.target.value
    }
    
    let handleGender = (e)=>{
        genderInput.value = e.target.value
    } 

    return {handleInput,handleSubmit,handleStatus,handleSpecies,handleGender,searchInput,getInput,getStatusInput,getSpeciesInput,getGenderInput}

})