//Check Permutation : Given two strings, write a method to decide if one is a permutation of the other

function checkPermutation(str1,str2){
    return str1.split("").sort().join() === str2.split("").sort().join();
}

function checkPermutationWithHash(str1,str2){ 
    let hash = [];
    for (let elem of str1) {
        hash[elem] =  hash[elem] ? hash[elem]+1 : 1;   
    }

    for( let elem of str2){
        if(!hash[elem]){
            return false;
        }
        else{
            hash[elem]--;
        }
    }
    for(let index in hash){
        if (hash[index] !== 0) {
            return false;
        }
    }
    return true;
}

console.assert(checkPermutation("test","estt"));
console.assert(checkPermutation("test","eestt"),"test and eestt strings are not permutation");
console.assert(checkPermutationWithHash("check","cchek"));
console.assert(checkPermutationWithHash("test","eestt"),"test and eestt strings are not permutation");