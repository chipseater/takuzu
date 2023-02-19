<script setup>
const emit = defineEmits(['restart'])
</script>

<template>
    <button @click="() => emit('restart')"
        class="border-2 hover:bg-green-500 border-green-500 text-green-500 active:bg-green-400 active:border-green-400 hover:text-white p-1 font-bold text-sm rounded-xl flex items-center transition-all group my-2">
        <span class="material-symbols-outlined group-hover:-rotate-180 duration-200 transition-transform">
            replay
        </span>
        <div class="mx-1">
            Recommencer
        </div>
    </button>
</template>
