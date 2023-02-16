<script setup>
import Row from "./Row.vue"
import { ref } from "vue"
import { grid_generator } from './../utils/grid_generator.js'
import { gridify } from './../utils/utils'
import { rules_checker, rule2 } from './../utils/rules.js'

const grid = ref(grid_generator())
console.log(grid_generator())
</script>

<template>
    <div class="flex flex-col border-[1px] select-none font-bold border-gray-300">
        <div class="flex flex-row w-full" v-for="(row, index) in grid" :key="index">
            <Row :row="row" />
        </div>
    </div>
</template>

