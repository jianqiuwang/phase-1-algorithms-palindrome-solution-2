function isPalindrome(word) {
  // Write your algorithm here
  // for(let i=0; i<word.length; i++){
  //   let j = word.length-1 - i
  //   return word[i]===word[j]
  // }
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // compare the letter we're iterating over to the corresponding letter at the end of the string
    const endIndex = word.length - 1 - startIndex;
     return word[startIndex] === word[endIndex]
  
  }

}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
