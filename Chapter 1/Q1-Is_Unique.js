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

console.log(isUnique("testing"));
console.log(isUnique("tesing"));
