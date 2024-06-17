<template>
  <div >
  <NavBar/>
  <router-view/>
  <Pagination/>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Pagination from './components/Pagination.vue';

</script>

<style lang="scss" scoped>

</style>