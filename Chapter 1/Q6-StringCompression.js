/*String Compression: Implement a method to perform basic string compression using the count of the repated characters.
For Example: the string aabcccccaaa would become a2b1c5a3, If the "compressed" string would not become smaller then the original
string, your method should return original string. You can assume the string has only uppercase and lowercase characters. 
*/

function stringCompression (str){
    let newString = [];
    let count = 1;
    let index = 1;
    let char = str[0];
    let indexInNewString = 0;
    while(index < str.length){
        if(char === str[index] ){
            count++;
        }
        else{
            newString[indexInNewString++] = char;
            newString[indexInNewString++] = count;
            char = str[index];
            count = 1;
        }
        index++;

    }
    newString[indexInNewString++] = char;
    newString[indexInNewString++] = count;
    return str.length < newString.length ? str : newString.join('');


}
console.log(stringCompression('aabcccccaaa'));
console.log(stringCompression('abcaa'));