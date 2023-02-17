import { rules_checker } from './rules'
import { gridify } from './utils'
import { gen_blanks } from './blank_generator'
import { ref } from 'vue'

const resultStack = ref([])

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
        if (stack.length >= 100) {
            resultStack.value = stack
            return
        }
        if (resultStack.value.length) return
        const rnd_bit = Number(Math.random() < 0.5)
        const inv_bit = Number(!rnd_bit)
        if (check_stack(stack.concat([rnd_bit]))) {
            this.children[rnd_bit] = Node.createNode(this.children[rnd_bit])
            this.children[rnd_bit].buildStack(stack.concat([rnd_bit]))
        }
        if (check_stack(stack.concat([inv_bit]))) {
            this.children[inv_bit] = Node.createNode(this.children[inv_bit])
            this.children[inv_bit].buildStack(stack.concat([inv_bit]))
        }
    }
}

export function grid_generator() {
    resultStack.value = []
    const startTime = Date.now()
    const startNode = new Node(Number(Math.random() < 0.5), 0, 1)
    const stack = startNode.buildStack()
    const res = gen_blanks(gridify([...resultStack.value]), 80)
    console.log(`Temps d’exécution: ${Date.now() - startTime}ms`)
    return res
}
