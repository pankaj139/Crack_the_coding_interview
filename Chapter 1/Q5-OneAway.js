//There are thre types of edits that can be performed on strings: insert a character, remove a character, or replace a character
// Given two strings, write a function to check if they are one edit (or zero edits) away. 

function oneAway(str1, str2){
    let len1 = str1.length;
    let len2 = str2.length;
    let metrix = new Array(len2+1);
    
    for(let i = 0;i<=len2;i++){
        metrix[i] = new Array(len1+1).fill(0);
        metrix[i][0] = i;
    }
    for(let i = 0;i<metrix[0].length;i++){
        metrix[0][i] = i;
    }
    for(let i = 0 ;i<len2;i++){ 
        for(let j = 0;j<len1;j++){
            if(str2[i] == str1[j]){
                metrix[i+1][j+1] = metrix[i][j];
            }
            else{
                metrix[i+1][j+1] = Math.min(metrix[i][j],metrix[i][j+1],metrix[i+1][j]) +1;
            }
        }
    }
    return metrix[len2-1][len1-1] <=1 
    
}

console.log(oneAway("pale","ple"));
console.log(oneAway("pales","pale"));
console.log(oneAway("pale","bale"));
console.log(oneAway("pale","bake"));
console.log(oneAway("pale","pale"));

