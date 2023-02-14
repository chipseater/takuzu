import { range, convertArrayToInt, reverseGrid } from './utils.js'

function rule1(array) {
    const n0 = array.filter(el => el == 0).length
    const n1 = array.filter(el => el == 1).length
    return n0 == n1
}

function rule2(array) {
    for (let i = 2 ; i < array.length ; i++) {
        if (array[i - 2] != array[i - 1]) return false
        if (array[i - 1] != array[i]) return false
    }
    return true
}

function rule3(array) {
    const intArray = convertArrayToInt(array)
    const uniqueIntArray = [... new Set(intArray)]
    return uniqueIntArray.length == intArray.length
}

export function rules_checker(matrix) {
    // Rule 1
    for (let i = 0 ; i < matrix.length ; i++) {
        if (!rule1(matrix[i])) return false
        let col = range(matrix.length).map(j => matrix[i][j])
        if (!rule1(col)) return false
    }
    // Rule 2
    for (let i = 0 ; i < matrix.length ; i++) {
        let row = matrix[i]
        if (!rule2(row)) return false
        let col = range(matrix.length).map(j => matrix[i][j])
        if (!rule2(col)) return false
    }
    // Rule 3
    if (!matrix.every(rule3)) return false
    if (!reverseGrid(matrix).every(rule3)) return false
    return true
}
