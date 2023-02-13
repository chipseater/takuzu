<script setup>
import Cell from './Cell.vue'

const { row } = defineProps(['row'])
</script>

<template>
    <div class="flex flex-row" v-for="(cell, index) in row" :key="index">
        <Cell :cell="cell" />
    </div>
</template>