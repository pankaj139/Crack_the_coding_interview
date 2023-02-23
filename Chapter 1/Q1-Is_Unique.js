//Is Unique :  Implement an algorithm to determine if a string has all the unique characters. What if you cannot use additional data structure?

function isUnique(str) {
    let len = str.length;
    for (let index = 0; index < str.length-1; index++) {
        let elem = str[index];
        for (let i = index+1; i < len; i++) {
            if(elem === str[i]) {
                return false;
            }
        }
    }

    return true;
}
console.assert(isUnique("testing") == false,"return false for testing");
console.assert(isUnique("tesing"),"return true for testing");
function isUniqueWithHash(str){
    let hash = new Map();
    for (let element of str) {
        if(hash.has(element)) { return false; }
        else{
            hash.set(element,1);
        }
        
    }
    return true;
}
console.assert(isUniqueWithHash("testing") == false,"return false for testing");
console.assert(isUniqueWithHash("tesing"),"return true for testing");

