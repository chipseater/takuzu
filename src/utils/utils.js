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

export function reverseGrid(matrix) {
    if (matrix.length == 0) return []
    return matrix[0].map((val, index) => matrix.map(row => row[index])
    .filter(cell => typeof cell != 'undefined').reverse())
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
