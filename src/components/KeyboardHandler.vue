<script setup>
const emit = defineEmits(['space'])
</script>

<template>
    <div class="absolute" @keydown.space="() => emit('space')"></div>
</template>