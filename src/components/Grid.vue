<script setup>
import Row from "./Row.vue"
import { ref } from "vue"
import { grid_generator } from './../utils/grid_generator.js'
import { gridify } from './../utils/utils.js'
import { rules_checker } from './../utils/rules.js'

console.log(rules_checker([
    [1,0,1,0],
    [1,0,0,1],
]))

const grid = ref()
</script>

<template>
    <div class="flex flex-col border-[1px] select-none font-bold border-gray-300">
        <div class="flex flex-row w-full" v-for="(row, index) in grid" :key="index">
            <Row :row="row" />
        </div>
    </div>
</template>

