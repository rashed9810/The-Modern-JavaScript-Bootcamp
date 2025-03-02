function simpleHash(key, size) {
    let total = 0;
    for (let i = 0; i<key.length; i++) {
        total += key.charCodeAt(i); 
    }
    return total % size;
}
console.log(simpleHash("rashed", 10));