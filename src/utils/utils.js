export function range(n) {
    let counter = -1
    return Array.from({length: n}, () => 0).map(() => {
        counter++
        return counter
    })
}

export function convertArrayToInt(array) {
    return parseInt(array.join(''), 2)
}

export function reverseGrid(grid) {
    const reversedGrid = []
    for (let i ; i < grid.length ; i++) {
        const row = []
        for (let j ; j < grid.length ; i++) {
            row.push(grid[j][i])
        }
        reversedGrid.push(row)
    }
    return reverseGrid
}

export function generate_random_indexes(n) {
    let indexes = []
    for (let i = 0 ; i < 10 ; i++) {
        indexes.push(i)
    }
    return array.sort(_ => 0.5 - Math.random()).slice(0, n)
}
