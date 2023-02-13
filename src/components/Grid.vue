<script setup>
import { ref } from "vue"
import Row from "./Row.vue"

const n = Math.random() * 10
const zeroArray = Array.from({length: 10}, () => 0)
const zeroMatrix = zeroArray.map(_ => Array.from({length: 10}, () => 0))

function rule1(matrix) {
    let indexes = []
    for (let i = 0 ; i < 10 ; i++) {
        indexes.push(i)
    }
    indexes = array.sort(_ => 0.5 - Math.random()).slice(0, n)
}

const grid = ref(zeroMatrix)
</script>

<template>
    <div class="flex flex-col border-[1px] select-none font-bold border-gray-300">
        <div class="flex flex-row w-full" v-for="(row, index) in grid" :key="index">
            <Row :row="row" />
        </div>
    </div>
</template>

