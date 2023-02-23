//Palindrome Permutations: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase 
//that is the same forwards and backwords. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words

function palindromePermuration(str) {

    str = str.toLowerCase();
    let hash = [] ;
    for(let elem of str) {
        if(elem != ' ')
        hash[elem] = hash[elem] ? hash[elem]+1 : 1;
    }
    let count = 0;
    for (let index in hash ) {
        if(hash[index] % 2 ==  1){
            count++;
        }
        if(count > 1){
            return false;
        }
        
    }
    return true;
    
}

console.log(palindromePermuration("Taco Coatpc"));