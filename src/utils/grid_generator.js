import { rules_checker } from './rules'
import { gridify } from './utils'
import { ref } from 'vue'

export const initialGrid = ref([])
export const resultGrid = ref([])

function check_list(list) {
    return rules_checker(gridify(list))
}

function buildList() {
    const stack = [[]]
    while (stack.length) {
        const currentList = stack.pop()
        console.log(currentList)

        if (currentList.length == 100) return currentList

        const rnd_bit = Number(Math.random() < 0.5)
        const inv_bit = Number(!rnd_bit)

        if (check_list(currentList.concat([rnd_bit])))
            stack.push(currentList.concat([rnd_bit]))
        if (check_list(currentList.concat([inv_bit])))
            stack.push(currentList.concat([inv_bit]))
    }
}

function gen_blanks(grid, n) {
    let res = grid
    while (n > 0) {
        const x = Math.floor(Math.random() * 10)
        const y = Math.floor(Math.random() * 10)
        grid[x][y] = !grid[x][y]
        if (!rules_checker(grid) && res[x][y] != -1) {
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
    const grid = gen_blanks(gridify(buildList()), 60)
    resultGrid.value = JSON.parse(JSON.stringify(grid))
    initialGrid.value = JSON.parse(JSON.stringify(grid))
}
