class Node {
    constructor(value)
    {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(value){
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

    push(value){
        const newNode = new Node(value)
        if(!this.top) {
            this.top = newNode
        }
        else {
            newNode.next = this.top
            this.top = newNode
        }
         this.length++
         return this
    }

    pop(){
        if(!this.top) return null
        let temp = this.top
        this.top = this.top.next
        temp.next = null
        this.length--

        if(this.length == 0){
            this.top = null
        }
        return temp
        
    }
    
}

let myStack = new Stack(10)
myStack.push(20)
myStack.push(30)
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
myStack.push(40)
console.log(myStack)