class Node{
    constructor(value){
        this.value = value
        this.next =null
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value){
        const newNode =new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if(!this.head){
            return undefined
        }
        else{
            let pre = this.head
            let temp =this.head
            while(temp.next){
                pre = temp
                temp = temp.next
            }
            this.tail = pre
            this.tail.next = null
            this.length--
            return temp
        }
    }
}

let myLL = new LinkedList(10)
myLL.push(20)
myLL.push(30)
console.log(myLL.pop())
console.log(myLL)