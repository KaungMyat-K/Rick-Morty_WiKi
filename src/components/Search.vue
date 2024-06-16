<template>
<div class="flex flex-col md:flex-row gap-3 mx-3 justify-center mt-5">
   <form @submit="getInput.handleSubmit">
    	<div class="flex">
        	<input @input="getInput.handleInput" v-model="getInput.searchInput" type="text" placeholder="Search for the tool you like"
			class="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
			>
        	<button type="submit" class="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
    	</div>
	</form>
    <select  @change="getInput.handleStatus" id="pricingType" name="pricingType"
		class=" h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
		<option value="" disabled>Status</option>
		<option v-for="(item,index) in status" :value="item" :key="index">{{ item }}</option>
	</select>
    <select  @change="getInput.handleSpecies" id="pricingType" name="pricingType"
		class=" h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
		<option value="" disabled>Species</option>
		<option v-for="(item,index) in species" :value="item" :key="index">{{ item }}</option>
	</select>
    <select  @change="getInput.handleGender" id="pricingType" name="pricingType"
		class=" h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
		<option value="" disabled>Gender</option>
		<option v-for="(item,index) in gender" :value="item" :key="index">{{ item }}</option>
	</select>
</div>

</template>

<script setup>
import { ref } from "vue";
import {useGetInput} from '../store/useGetInput'

const status = ref(["Alive", "Dead", "Unknown"])
const species = ref([ "Human","Alien","Humanoid","Poopybutthole","Mythological","Unknown","Animal","Disease","Robot","Cronenberg","Planet"])
const gender = ref(["female", "male", "genderless", "unknown"])


const getInput = useGetInput();


</script>

<style lang="scss" scoped>

</style>