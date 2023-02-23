function URLify(str){
    let len = str.length;
    return str.trim().split(" ").join("%20");

}

console.assert(URLify("Mr John Smith    ") =="Mr%20John%20Smith")