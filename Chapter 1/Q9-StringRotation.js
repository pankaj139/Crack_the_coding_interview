/*String Rotation: Assume you have a method isSubString, which check if one word is a substring of another, Given two strings, 
s1 and s2, write a code to check if s2 is rotation of s1 using oly one call to isSubString.
(eg "waterbottle" is rotation of "erbottlewat")
*/
function stringRotation(s1, s2) {
    let len1 = s1.length, len2 = s2.length;
    if(len1 == len2){
        let s1s1 = s1+s1;
        return s1s1.indexOf( s2) > 0 ? true: false;
    }

    return false;

}

const str1 = "watrerbottle";
const str2 = "erbottlewat";
console.log(stringRotation(str1, str2));