import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useFetchAPI = defineStore('fetchAPI',()=>{

       let  characters = ref([])
       let character = ref({})
       let loading = ref(false)
       let errorMessage = ref('')

        let getCharacters = computed(()=>characters.value)
        let getCharacterById = computed(()=>character.value)

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

        let fetchCharactersByFilter = async(input,status,gender,species)=>{
            loading.value = true
             await axios.get(`https://rickandmortyapi.com/api/character/?name=${input}&status=${status}&gender=${gender}&species=${species}`)
            .then(res=>{
                characters.value=res.data.results
                loading.value = false
            }).catch(err=>{
                errorMessage.value=err.errorMessage
                loading.value=false
            })
        }

        let fetchCharacterById = async(id)=>{
            loading.value = true
             await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res=>{
                console.log(res.data)
                character.value = res.data
                loading.value = false
                console.log(character.value)
            }).catch(err=>{
                errorMessage.value=err.errorMessage
                loading.value=false
            })
        }
        
        return {characters,character,loading,errorMessage,getCharacters,getCharacterById,fetchCharacters,fetchCharactersByFilter,fetchCharacterById}
})