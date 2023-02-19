<script setup>
import { resultGrid, initialGrid } from './../utils/grid_generator'
import { ref, toRef, watch } from 'vue'

const props = defineProps(['row', 'col', 'initCell'])
const initCell = toRef(props, 'initCell')

const { row, col } = props
const emit = defineEmits(['change'])
const immutable = ref(initialGrid.value[col][row] >= 0)

watch(initCell, () => {
    immutable.value = initialGrid.value[col][row] >= 0
})

function clickHandler() {
    if (immutable.value) return
    emit('change', col, row)
}
</script>

<template>
    <div @click="clickHandler" :class="immutable ? 'bg-gray-200' : ''" class="p-4 border-gray-300 hover:border-gray-600 border-2">
        <span class="absolute z-0 -translate-x-1/2 -translate-y-1/2">
            {{ resultGrid[col][row] != -1 ? resultGrid[col][row] : '' }}
        </span>
    </div>
</template>
