import { rules_checker } from './rules'
import { range, check_grid_full, gridify } from './utils'

export function grid_generator() {
    const stack = []

    while (!check_grid_full(gridify(stack))) {
        // Check if adding a zero breaks the rules
        // Check if adding a one breaks the rules
        // If both work, add a random value
        // If either a zero or a one works, add it
        // If none works, pop the stack
    }
}
