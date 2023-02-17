<script setup>
import Grid from './components/Grid.vue'

function resetGrid() {

}
</script>

<template>
  <div class="flex items-center flex-col">
    <div class="justify-center flex text-4xl h-16 p-4 font-bold">
      <h1>Takuzu</h1>
    </div>
    <div class="flex justify-center items-center">
      <Grid />
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
