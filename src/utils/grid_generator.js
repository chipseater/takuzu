import { rules_checker } from './rules'
import { gridify } from './utils'
import { ref, shallowRef } from 'vue'

const resultStack = shallowRef([])
export const initialGrid = ref([])
export const resultGrid = ref([])

function check_stack(stack) {
    return rules_checker(gridify(stack))
}

function buildStack(stack=[]) {
    if (stack.length >= 100) resultStack.value = stack
    if (resultStack.value.length >= 100) return

    const rnd_bit = Number(Math.random() < 0.5)
    const inv_bit = Number(!rnd_bit)

    if (check_stack(stack.concat([rnd_bit])))
        buildStack(stack.concat([rnd_bit]))
    if (check_stack(stack.concat([inv_bit])))
        buildStack(stack.concat([inv_bit]))
}

function gen_blanks(grid, n) {
    let res = grid
    while (n > 0) {
        const x = Math.floor(Math.random() * 10)
        const y = Math.floor(Math.random() * 10)
        grid[x][y] = !grid[x][y]
        if (!rules_checker(grid)) {
            res[x][y] = -1
        }
        grid[x][y] = !grid[x][y]
        res[x][y] = -1
        n--
    }
    return res
}

export function mutateInitValue(value) {
    initialGrid.value = JSON.parse(JSON.stringify(value))
}

export function grid_generator() {
    resultStack.value = []
    buildStack()

    const grid = [...gen_blanks(gridify([...resultStack.value]), 1)]
    resultGrid.value = JSON.parse(JSON.stringify(grid))
    initialGrid.value = JSON.parse(JSON.stringify(grid))
}
