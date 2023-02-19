<script setup>
import Cell from "./Cell.vue"
import Popup from "./Popup.vue"
import RestartButton from "./RestartButton.vue"
import { ref } from "vue"
import { grid_generator, resultGrid, initialGrid, mutateInitValue } from './../utils/grid_generator.js'
import { rules_checker } from './../utils/rules.js'

grid_generator()
const displayPopup = ref(false)

function handleChange(row, col) {
    const value = resultGrid.value[row][col]
    console.log(row, col)

    if (value == -1) resultGrid.value[row][col] = 0
    if (value == 0) resultGrid.value[row][col] = 1
    if (value == 1) resultGrid.value[row][col] = -1

    // Win detection
    if (resultGrid.value.every(batch => !batch.includes(-1)) && rules_checker(resultGrid.value)) {
        displayPopup.value = true
    }
}

function resetGrid() {
    grid_generator()
    mutateInitValue([...resultGrid.value])
}
</script>

<template>
    <div class="flex items-center flex-col">
        <div class="flex flex-col border-[1px] select-none font-bold border-gray-300">
            <div class="flex flex-row w-full" v-for="(row, i) in initialGrid" :key="i">
                <div class="flex flex-row" v-for="(cell, j) in row" :key="j">
                    <Cell @change="handleChange" :col="i" :row="j" :init-cell="cell" />
                </div>
            </div>
        </div>
        <RestartButton @restart="resetGrid" />
        <Popup @restart="resetGrid" @close="() => displayPopup = false" v-if="displayPopup" title="🥳 Grille complétée !" message="Bien joué, j’espère que tu as apprécié mon jeu" />
    </div>
</template>
