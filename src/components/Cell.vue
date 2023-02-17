<script setup>
import { ref } from 'vue'

const { cell: initialCell, col } = defineProps(['cell', 'col'])
const emit = defineEmits(['change'])
const cell = ref(initialCell)
const immutable = ref(initialCell >= 0)

function clickHandler() {
    if (!immutable.value) {
        if (cell.value == -1) {
            cell.value = 0
            emit('change', col, 0)
        } else if (cell.value == 0) {
            cell.value = 1
            emit('change', col, 1)
        } else if (cell.value == 1) {
            cell.value = -1
            emit('change', col, -1)
        }
    }
}
</script>

<template>
    <div @click="clickHandler" :class="immutable ? 'bg-gray-200' : ''" class="p-4 border-gray-300 hover:border-gray-600 border-2">
        <span class="absolute z-0 -translate-x-1/2 -translate-y-1/2">
            {{ cell != -1 ? cell : '' }}
        </span>
    </div>
</template>
