import { rules_checker } from './rules'
import { gridify } from './utils'

function check_stack(stack) {
    return rules_checker(gridify(stack))
}

class Node {
    constructor(value, ...children) {
        this.value = value
        this.children = children
    }

    static createNode(node) {
        if (typeof node == 'number') return new Node(node, 0, 1)
        return node
    }

    buildStack(stack=[]) {
        if (stack.length >= 100) return stack
        const rnd_bit = Number(Math.random() < 0.5)
        const inv_bit = Number(!rnd_bit)
        if (check_stack(stack.concat([rnd_bit]))) {
            this.children[rnd_bit] = Node.createNode(this.children[rnd_bit])
            return this.children[rnd_bit].buildStack(stack.concat([rnd_bit]))
        }
        if (check_stack(stack.concat([inv_bit]))) {
            this.children[inv_bit] = Node.createNode(this.children[inv_bit])
            return this.children[inv_bit].buildStack(stack.concat([inv_bit]))
        }
    }
}

export function grid_generator() {
    const startNode = new Node(Number(Math.random() < 0.5), 0, 1)
    const stack = startNode.buildStack()
    console.log(stack)
    return gridify(stack)
}
