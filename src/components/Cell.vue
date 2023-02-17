<script setup>
import { ref } from 'vue'

const { cell: initialCell } = defineProps(['cell'])
const cell = ref(initialCell)
const immutable = ref(initialCell >= 0)

function clickHandler() {
    if (!immutable.value) {
        console.log(cell.value)
        if (cell.value == -1) {
            console.log('hey')
            cell.value = 0
        } if (cell.value == 0) {
            cell.value = 1
        } if (cell.value == 1) {
            cell.value = -1
        }
    }
}
</script>

<template>
    <div @click="clickHandler" :class="immutable ? 'bg-gray-200' : ''" class="p-4 border-gray-300 hover:border-gray-600 border-2">
        <span class="absolute -translate-x-1/2 -translate-y-1/2">
            {{ cell != -1 ? cell : '' }}
        </span>
    </div>
</template>