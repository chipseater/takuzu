<script setup>
import { ref, toRef } from 'vue'

const emit = defineEmits(['click'])
const props = defineProps(['play'])
const play = toRef(props, 'play')

function handleClick() {
    emit('click')
}
</script>

<template>
    <div @click="handleClick" class="material-symbols-outlined select-none text-white p-1 m-2 rounded-lg bg-blue-400 cursor-pointer">{{ play ? 'pause' : 'play_arrow' }}</div>
</template>