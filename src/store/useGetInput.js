import { defineStore } from "pinia";
import { ref } from "vue";


export const useGetInput = defineStore('getInput',()=>{
    const input = ref('')
    const statusInput = ref('')
    const speciesInput = ref('')
    const genderInput = ref('')
    const searchInput = ref('')

    let handleInput = (e)=>{
        console.log(e.target.value)
        input.value = e.target.value 
    }
    
    let handleSubmit = (e)=>{
        e.preventDefault();
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


    
    // return {handleInput,handleSubmit,handleStatus,handleSpecies,handleGender,input,statusInput,speciesInput,genderInput,searchInput}

})