// LinkedList is the dynamic data structure, as we can add or remove elements at ease, and it can even grow as needed. Just like arrays, linked lists store elements sequentially, but don’t store the elements contiguously like an array. 

// 1. add(element) – It adds an element at the end of the list. 

// adds an element at the end
// of list
add(element)
{
    // creates a new node
    let node = new Node(element);

    // to store current node
    let current;

    // if list is Empty add the
    // element and make it head
    if (this.head == null)
        this.head = node;
    else {
        current = this.head;

        // iterate to the end of the
        // list
        while (current.next) {
            current = current.next;
        }

        // add node
        current.next = node;
    }
    this.size++;
}


//2. insertAt(element, index) – It inserts an element at the given index in a list. 

// insert element at the position index
// of the list
insertAt(element, index)
{
    if (index < 0 || index > this.size)
        return console.log("Please enter a valid index.");
    else {
        // creates a new node
        let node = new Node(element);
        let curr, prev;

        curr = this.head;

        // add the element to the
        // first index
        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            let it = 0;

            // iterate over the list to find
            // the position to insert
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            // adding an element
            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }
}


//3. removeFrom(index) – It removes and returns an element from the list from the specified index 

// removes an element from the
// specified location
removeFrom(index)
{
    if (index < 0 || index >= this.size)
        return console.log("Please Enter a valid index");
    else {
        let curr, prev, it = 0;
        curr = this.head;
        prev = curr;

        // deleting first element
        if (index === 0) {
            this.head = curr.next;
        } else {
            // iterate over the list to the
            // position to remove an element
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            // remove the element
            prev.next = curr.next;
        }
        this.size--;

        // return the remove element
        return curr.element;
    }
}


// 4. removeElement(element) – This method removes element from the list. It returns the removed element, or if it’s not found it returns -1. 

// removes a given element from the
// list
removeElement(element)
{
    let current = this.head;
    let prev = null;

    // iterate over the list
    while (current != null) {
        // comparing element with current
        // element if found then remove the
        // and return true
        if (current.element === element) {
            if (prev == null) {
                this.head = current.next;
            } else {
                prev.next = current.next;
            }
            this.size--;
            return current.element;
        }
        prev = current;
        current = current.next;
    }
    return -1;
}


// -------------------------- Helper Methods  ----------------------------------

//1. indexOf(element) – it returns the index of a given element if the element is in the list. 
// finds the index of element
indexOf(element)
{
    let count = 0;
    let current = this.head;

    // iterate over the list
    while (current != null) {
        // compare each element of the list
        // with given element
        if (current.element === element)
            return count;
        count++;
        current = current.next;
    }

    // not found
    return -1;
}


//2. isEmpty() – it returns true if the list is empty. 

// checks the list for empty
isEmpty()
{
    return this.size == 0;
}


//3. size_of_list() – It returns the size of list 

// gives the size of the list
size_of_list()
{
    console.log(this.size);
}


//3. printList() – It prints the contents of the list. 

// prints the list items
printList()
{
    let curr = this.head;
    let str = "";
    while (curr) {
        str += curr.element + " ";
        curr = curr.next;
    }
    console.log(str);
}
