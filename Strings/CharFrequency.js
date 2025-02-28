function charFrequency(str) {
    let freq = {};
    
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    
    return freq;
}

console.log(charFrequency("hello"));  
// Output: { h: 1, e: 1, l: 2, o: 1 }


function charFrequencyUsingMap(str) {
    let freq = new Map();
    
    for (let char of str) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }
    
    return Object.fromEntries(freq); // Convert to a normal object
}

console.log(charFrequencyUsingMap("hello world!"));
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1, '!': 1 }


function charFrequencyUsingReduce(str) {
    return str.split('').reduce((freq, char) => {
        freq[char] = (freq[char] || 0) + 1;
        return freq;
    }, {});
}

console.log(charFrequencyUsingReduce("banana")); 
// Output: { b: 1, a: 3, n: 2 }
