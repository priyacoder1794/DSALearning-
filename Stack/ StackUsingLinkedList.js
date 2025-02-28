// Node class representing each element in the stack
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Stack class using a Linked List
class Stack {
    constructor() {
        this.top = null; 
        this.size = 0;   
    }

    // Push operation
    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top; 
        this.top = newNode; 
        this.size++;
    }

    // Pop operation
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return null;
        }
        const poppedValue = this.top.value;
        this.top = this.top.next;
        this.size--;
        return poppedValue;
    }

    // Peek operation
    peek() {
        return this.isEmpty() ? null : this.top.value;
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Returns the size of the stack
    getSize() {
        return this.size;
    }

    // Print stack elements
    printStack() {
        let current = this.top;
        let stackValues = [];
        while (current) {
            stackValues.push(current.value);
            current = current.next;
        }
        console.log("Stack:", stackValues.join(" -> "));
    }
}

// Example Usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack();
console.log("Top Element:", stack.peek()); 
console.log("Popped Element:", stack.pop()); 
stack.printStack(); 
