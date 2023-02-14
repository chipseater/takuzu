import { rules_checker } from './rules'
import { range } from './utils'

export function grid_generator() {
    const randomGrid = range(10).map(() => 
        range(10).map(() => Math.floor(10 * Math.random)
    ))
    do {
        const randomGrid = range(10).map(() => 
            range(10).map(() => Math.floor(10 * Math.random)
        ))
    } while (!rules_checker(randomGrid))
}
