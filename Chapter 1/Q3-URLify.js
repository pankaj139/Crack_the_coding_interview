function URLify(str){
    return str.trim().split(" ").join("%20");

}
function URLifyReverse(str){
    const len = str.length;
    const strArr = str.split("");
    let i = len - 1;
    for( ; i >= 0; i-- ){
        if(str[i] !== ' ')
        break;
    }
    for(let j = len - 1; j >= 0; j-- ){
        if(strArr[i] ==" "){
            strArr[j--] = "0";
            strArr[j--] = "2";
            strArr[j] = "%";
        }
        else{
            strArr[j] = strArr[i];
        }
        i--;

    }
    str = strArr.join('')
    return str;

}

console.assert(URLifyReverse("Mr John Smith    ") =="Mr%20John%20Smith")
console.assert(URLify("Mr John Smith    ") =="Mr%20John%20Smith")