<script setup>
import Cell from './Cell.vue'

const { row, index } = defineProps(['row', 'index'])
const emit = defineEmits(['change'])

function handleChange(col, value) {
    emit('change', col, index, value)
}
</script>

<template>
    <div class="flex flex-row" v-for="(cell, i) in row" :key="i">
        <Cell @change="handleChange" :row="i" :cell="cell" :col="index" />
    </div>
</template>
