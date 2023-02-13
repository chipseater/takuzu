<script setup>
const { cell } = defineProps(['cell'])
</script>

<template>
    <div class="p-4 border-gray-300 hover:border-gray-600 border-2">
        <span class="absolute -translate-x-1/2 -translate-y-1/2">
            {{ cell < 0 ? '' : cell }}
        </span>
    </div>
</template>