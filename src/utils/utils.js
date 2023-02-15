export function range(n) {
    let counter = -1
    return Array.from({length: n}, () => 0).map(() => {
        counter++
        return counter
    })
}

export function convertArrayToInt(array) {
    if (!array.length) return []
    return parseInt(array.join(''), 2)
}

export function reverseGrid(grid) {
    const reversedGrid = []
    for (let i ; i < grid.length ; i++) {
        const row = []
        for (let j ; j < grid[i].length ; i++) {
            row.push(grid[j][i])
            console.log('el', grid[j][i])
        }
        reversedGrid.push(row)
    }
    return reversedGrid
}

export function check_grid_full(grid, size) {
    return grid.length == size && grid.every(row => row.length == size)
}

export function gridify(flatten_grid) {
    const grid = []
    let i = 0
    let row = []
    for (let i = 0 ; i < 10 ; i+=3) {
        row = flatten_grid.slice(i, i+3)
        grid.push(row)
        row = []
    }
    return grid
}
