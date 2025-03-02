//Hashing is a popular technique used for storing and retrieving data as fast as possible. The main reason behind using hashing is that it performs insertion, deletion, searching, and other operations 

//Why use Hashing?
// In hashing, all the operations like inserting, searching, and deleting can be performed in O(1) i.e. constant time. The worst case time complexity for hashing remains O(n) but the average case time complexity is O(1).

// HashTable
// Used in order to create a new hash table.


// -------------------- Basic Operations with Syntax  --------------------

// Get:Used to search a key inside the hash table and return the value that is associated with that key.
// Insert: Used to insert a new key-value pair inside the hash table.
// Search: Used to search for a value.
// Delete: Used to delete a key-value pair from the hash table.



// Components of Hashing in JavaScript
// 1. Hash Table: A hash table is a generalization of the array. It gives the functionality in which a collection of data is stored in such a way that it is easy to find those items later if required. This makes searching for an element very efficient.

// 2. Hash Function: A hash function is used to transform a given key into a specific slot index. it is used to map each and every possible key into a unique slot index. If every key is mapped into a unique slot index, then the hash function is known as a perfect hash function. It is very difficult to create a perfect hash function but our job as a programmer is to create such a hash function with the help of which the number of collisions is as few as possible. 

// A good hash function should have the following properties:

// Efficiently computable. 
// Should uniformly distribute the keys (Each table position is equally likely for each).
// Should minimize collisions.
// Should have a low load factor(the number of items in the table divided by the size of the table). 
// 3. Collision Handling: Since a hash function gets us a small number for a big key, there is a possibility that two keys result in the same value. The situation where a newly inserted key maps to an already occupied slot in the hash table is called collision and must be handled using some collision handling technique. Following are the ways to handle collisions:

// Chaining: The idea is to make each cell of the hash table point to a linked list of records that have the same hash function value. Chaining is simple but requires additional memory outside the table.
// Open Addressing: In open addressing, all elements are stored in the hash table itself. Each table entry contains either a record or NIL. When searching for an element, we examine the table slots one by one until the desired element is found or it is clear that the element is not in the table.
// Implementation with Example:
// Step 1: Create a HashTable class with table and size initial properties.

// Step 2: Add a private setKey(key) function to transform keys into indices.

// Step 3: Add the insert() and get()functions for adding and accessing key-value pairs from the table.

// Step 4: Add a remove() function to remove a key from the hash table.

// Example 1: Suppose we have to store 5 numbers 100,87,86,12,25 and 9 in a hashtable. In this case, we will create a setKey function in which we will take the value as an argument and convert it to an index of the hash table. Below is the implementation.
