<script setup>
import { toRef } from 'vue'
import PauseButton from './PauseButton.vue';

const props = defineProps(['pause'])
const emit = defineEmits(['pause'])
const pause = toRef(props, 'pause')
</script>

<template>
    <div class="relative">
        <div :class="pause ? 'blur-[10px]' : ''" class="flex flex-col border-[1px] select-none font-bold border-gray-300 relative">
            <slot />
        </div>
        <div v-if="pause" class="absolute flex items-center flex-col select-none z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div class="text-4xl text-gray-700 font-bold">
                Pause
            </div>
            <PauseButton @click="() => emit('pause')" />
        </div>
    </div>
</template>