<template>
    <div class="flex justify-center items-center">
        <p class="text-red-500">{{ errorMessage }}</p>
    </div>
</template>

<script setup>

const props = defineProps({
    errorMessage:{
        type:String,
        required:true
    }
})

</script>

<style lang="scss" scoped>

</style>