/* 
  Given to an alumni in an interview
  Given a string
  return whether or not it's possible to make a palindrome out of the string's
  characters.
  What is it about a string that makes it possible for it to become a
  palindrome?
  tacocat , dad, racecar,hannah
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "adaad"; 
const expected5 = true;
// Explanation: "daaad" / "adada"


const  str6 = "abc";
const expected6 = false;


/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(str) {

    if(str.length < 1){
        return false;
    }else if(str.length == 1){
        return true;
    }
    
    let map = {}

    for(let i = 0; i < str.length; i++){
        const letter = str[i];
        if(Object.hasOwn(map, letter)){ // check if the map has that letter in the key
            map[letter] = map[letter] + 1; // if the letter exist in the map, increment
        }else{
            map[letter]= 1; // if the letter does not exist in the map, store it with a freq of 1
        }
    }

    let oddOccurrence = false;
    for(const key in map){ // loop through the object for each key
        if(map[key] %2 ===1){ // check if there is oddOccurence
            if(oddOccurrence === true){  // odd occurence happens for the second time, not a palindrome
                return false;
            }
            oddOccurrence = true; // odd occurence happens for the first time
        }
    }
    return true
}
/*
    "a": 8
*/
console.log(canStringBecomePalindrome(str1))
console.log(canStringBecomePalindrome(str2))
console.log(canStringBecomePalindrome(str3))
console.log(canStringBecomePalindrome(str4))
console.log(canStringBecomePalindrome(str5))
console.log(canStringBecomePalindrome(str6))
console.log(canStringBecomePalindrome("aaaaaaaa"))