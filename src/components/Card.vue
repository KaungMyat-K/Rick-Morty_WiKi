<template>
  <div v-for="item in characters" :key="item.id" class="rounded-xl shadow-2xl">
    <div class="p-5 flex flex-col">
      <div class="rounded-xl overflow-hidden">
        <img :src="item.image" alt="" class="w-full h-56"/>
      </div>
      <h5 class="text-2xl md:text-3xl font-medium mt-3">{{ item.name }}</h5>
      <div class="flex justify-between mt-3">
                <span class=" text-slate-500  text-lg  font-bold mt-2">{{ item.gender }}</span>
                <span class="  rounded-full text-white text-s font-bold px-3 py-2 leading-none flex items-center" :class="[item.status==='Alive' &&'bg-green-600', item.status==='Dead' &&'bg-red-600',item.status==='unknown' && 'bg-gray-600']"  >{{ item.status }}</span>
            </div>
      <router-link :to="{name:'cardDetail',params:{id:item.id}}" class="text-center bg-blue-500 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Detail</router-link>
    </div>
  </div>

</template>

<script setup>
  const props = defineProps({
    characters:{
        type: Array,
        required: true,
      }
  })


</script>

<style lang="scss" scoped></style>
