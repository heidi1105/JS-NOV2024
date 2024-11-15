
/* 
Given by Riot games.
*/
// b70a164c32a20c10

// b 70
// a 184
// c 42
// isNaN()

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(str) {
    const letterHashCounts = {};
    let numStr = "";
    let letter = str[0];
  
    for (let i = 1; i < str.length; i++) {
      const isNum = !isNaN(str[i]); // boolean
      const isLetter = isNaN(str[i]); // boolean

      if (isNum) {
        numStr += str[i];
      }
  
      // Not an else since it needs to run on last iteration ending with a num.
      if (isLetter || i === str.length - 1) {
        const letterCount = parseInt(numStr);
  
        if (letter in letterHashCounts) {
          letterHashCounts[letter] += letterCount;
        } else {
          letterHashCounts[letter] = letterCount;
        }
  
        // reset for next letter and it's following digits
        letter = str[i];
        numStr = "";
      }
    }
  
    const alphabetized = Object.keys(letterHashCounts).sort();
  
    let newHash = "";
  
    // This could have been chained after the sort as a .forEach and then concat
    // the string, or .reduce instead to create the string to return.
    for (let i = 0; i < alphabetized.length; i++) {
      const letter = alphabetized[i];
      newHash += letter + letterHashCounts[letter];
    }
    return newHash;
}

console.log(rehash(str1))