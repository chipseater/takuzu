export function range(n) {
    let counter = -1
    return Array.from({length: n}, () => 0).forEach(() => {
        counter++
        return counter
    })
}

export function generate_random_indexes(n) {
    let indexes = []
    for (let i = 0 ; i < 10 ; i++) {
        indexes.push(i)
    }
    return array.sort(_ => 0.5 - Math.random()).slice(0, n)
}

export function rule1() {
    // TODO: Faire ça
}
