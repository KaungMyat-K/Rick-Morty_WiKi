import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useFetchAPI = defineStore('fetchAPI',()=>{

       let  characters = ref([])
       let loading = ref(false)
       let errorMessage = ref('')

       let getCharacters = computed(()=>{
        return characters.value
         })

        let getCharacterById = computed(()=>{
           return characters.value
        })

        let fetchCharacters = async()=>{
            loading.value = true
             await axios.get('https://rickandmortyapi.com/api/character')
            .then(res=>{
                characters.value=res.data.results
                loading.value = false
            }).catch(err=>{
                errorMessage.value=err.errorMessage
                loading.value=false
            })
        }
        
        return {characters,loading,errorMessage,getCharacters,getCharacterById,fetchCharacters}
})