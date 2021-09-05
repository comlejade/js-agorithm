class Stack {
  constructor() {
    this.source = []
    this.length = this.source.length
  }

  push (item) {
    this.source.push(item)
    // this.length++
  }

  pop () {
    // this.length--
    return this.source.pop()
  }

  peek () {
    return this.source[this.length - 1]
  }
}

const stack = new Stack()

stack.push(1)
stack.push(2)

// function toBinaryStack (num) {
//   if (num > 1) {
//     let mod = num % 2
//     let left = Math.floor(num / 2)
//     stack.push(mod)
//     toBinaryStack(left)
//     return
//   }
//   stack.push(num)
// }

// toBinaryStack(100)

// let res = ''

// function toBinary (stack) {
//   if (stack.length > 0) {
//     res += stack.pop()
//     toBinary(stack)
//   }
// }

// toBinary(stack)
// console.log(res)
