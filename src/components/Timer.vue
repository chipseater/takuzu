<script setup>
import { computed, watch, toRef } from 'vue'
import PauseButton from './PauseButton.vue';

const props = defineProps(['time', 'play'])
const emit = defineEmits(['pause', 'play'])
const time = toRef(props, 'time')
const play = toRef(props, 'play')

const sec = computed(() => Math.floor(time.value % 60))
const min = computed(() => Math.floor(sec.value / 60))
const hours = computed(() => Math.floor(min.value / 60))
</script>

<template>
    <div class="flex items-center w-24 my-2 bg-gray-300 rounded-xl">
        <PauseButton :play="play" @click="() => emit('pause')" />
        <div class="p-2">
            {{ hours ? `${hours}:` : '' }}{{ min }}:{{ sec }}
        </div>
    </div>
</template>