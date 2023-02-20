<script setup>
import { toRef } from 'vue'

const emit = defineEmits(['click'])
const props = defineProps(['play'])
const play = toRef(props, 'play')
</script>

<template>
    <div @click="() => emit('click')" class="material-symbols-outlined select-none text-white p-1 m-2 rounded-lg bg-blue-400 cursor-pointer">{{ play ? 'pause' : 'play_arrow' }}</div>
</template>