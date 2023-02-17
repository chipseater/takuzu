import { range, convertArrayToInt, reverseGrid } from './utils.js'

function rule1(array) {
    const n0 = array.filter(el => el == 0).length
    const n1 = array.filter(el => el == 1).length
    return n0 <= 5 && n1 <= 5
}

export function rule2(array) {
    for (let i = 2; i < array.length; i++) {
        if (array[i-2] == array[i-1] && array[i-1] == array[i]) return true
    }
    return false
}

function rule3(array) {
    const intArray = array.map(row => convertArrayToInt(row))
    const uniqueIntArray = [... new Set(intArray)]
    return uniqueIntArray.length == intArray.length
}

export function rules_checker(matrix, verbose = false) {
    // Rule 1
    for (let i = 0; i < matrix.length; i++) {
        if (!rule1(matrix[i])) return false
        let col = range(matrix.length).map(j => matrix[j][i])
        if (!rule1(col)) return false
    }
    if (verbose) console.log('Rule 1 passed')
    // Rule 2
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i]
        if (rule2(row)) return false
    }
    const reversedMatrix = reverseGrid(matrix)
    for (let i = 0; i < reversedMatrix.length; i++) {
        let col = reversedMatrix[i]
        if (rule2(col)) return false
    }
    if (verbose) console.log('Rule 2 passed')
    // Rule 3
    if (!matrix.every(rule3)) return false
    if (!(reverseGrid(matrix).every(rule3))) return false
    if (verbose) console.log('Rule 3 passed')
    return true
}
