import { rules_checker } from "./rules"

export function gen_blanks(grid, n) {
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
