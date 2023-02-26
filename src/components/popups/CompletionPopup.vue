<script setup>
import RestartButton from '../RestartButton.vue'

const { title, message } = defineProps(['title', 'message'])
const emit = defineEmits(['close', 'restart'])
</script>

<template>
    <div @click="() => emit('close')" class="fixed top-0 z-10 left-0 bg-gray-800 h-screen w-screen opacity-90"></div>
    <div class="fixed top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl h-50 w-64 p-4">
        <span @click="() => emit('close')" class="absolute right-0 top-0 select-none cursor-pointer p-2 material-symbols-outlined">
            close
        </span>
        <h1 class="text-xl font-bold">{{ title }}</h1>
        <div class="text-base">
            {{ message }}
        </div>
        <div class="flex items-center justify-center">
            <RestartButton @restart="() => {emit('restart');emit('close')}" />
        </div>
    </div>
</template>
