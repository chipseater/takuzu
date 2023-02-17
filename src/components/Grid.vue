<script setup>
import Row from "./Row.vue"
import Popup from "./Popup.vue"
import RestartButton from "./RestartButton.vue"
import { ref } from "vue"
import { grid_generator } from './../utils/grid_generator.js'
import { rules_checker } from './../utils/rules.js'

let grid = ref(grid_generator())
const displayPopup = ref(false)

function handleChange(row, col, value) {
    grid.value[col][row] = value

    // Win detection
    if (grid.value.every(batch => !batch.includes(-1)) && rules_checker(grid.value)) {
        displayPopup.value = true
    }
}

function resetGrid() {
    window.location.reload()
}
</script>

<template>
    <div class="flex items-center flex-col">
        <div class="flex flex-col border-[1px] select-none font-bold border-gray-300">
            <div class="flex flex-row w-full" v-for="(row, index) in grid" :key="index">
                <Row @change="handleChange" :row="row" :index="index" />
            </div>
        </div>
        <RestartButton />
        <Popup @restart="resetGrid" @close="() => displayPopup = false" v-if="displayPopup" title="🥳 Grille complétée !" message="Bien joué, j’espère que tu as apprécié mon jeu" />
    </div>
</template>
