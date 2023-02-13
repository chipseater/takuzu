<script setup>
import Row from "./Row.vue"
import { ref } from "vue"
import { range } from './../utils/utils.js'

const n = Math.random() * 10
const zeroMatrix = range(n)

const grid = ref(zeroMatrix)
</script>

<template>
    <div class="flex flex-col border-[1px] select-none font-bold border-gray-300">
        <div class="flex flex-row w-full" v-for="(row, index) in grid" :key="index">
            <Row :row="row" />
        </div>
    </div>
</template>

