export function range(n) {
    let counter = -1
    return Array.from({ length: n }, () => 0).map(() => {
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
    for (let i; i < grid.length; i++) {
        const row = []
        for (let j = 0; j < grid[i].length; i++) {
            row.push(grid[j][i])
            console.log('el', grid[j][i])
        }
        reversedGrid.push(row)
    }
    return reversedGrid
}

export function gridify(list, elementsPerSubArray=10) {
    var matrix = [], i, k

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray == 0) {
            k++
            matrix[k] = []
        }

        matrix[k].push(list[i])
    }

    return matrix
}
