
/*1. prompt input from user, e.g. Sentence
let userSentence = prompt("Do you need help creating an encoded message?  Enter your message here... ");

/*2. Stores input in variable and display to user 
alert(userSentence);
*/
const element = document.getElementById("mybutton");
element.addEventListener("click", myFunction);
function myFunction(){
  let userSentence = document.getElementById("userSentence").value;
  firstLastLetters(userSentence);
}

/*3. function1 takes ONLY first and last letter of sentence, makes capital, and new string1, e.g. IE */
function firstLastLetters(userSentence){
  let firstLetter = userSentence.charAt(0); 
  let sentenceLength = userSentence.length;
  let lastLetter = userSentence.charAt(sentenceLength-1); 
  let firstLastLetters = firstLetter+lastLetter;
  let upperCaseLetters = firstLastLetters.toUpperCase();
  return upperCaseLetters;
}

let uppercaseFirstLastLetters = firstLastLetters(userSentence);   
/*alert(uppercaseFirstLastLetters);*/

/*4. function2 uses new string, reverse orders first and last letter, return result only string2, e.g. EI */
function reverseLetters(uppercaseFirstLastLetters){
  let reverseFLLetters = uppercaseFirstLastLetters.split("").reverse().join("");
  return reverseFLLetters;
}

let reverseTwoLetters = reverseLetters(uppercaseFirstLastLetters);
/*alert(reverseTwoLetters); */

/*5. function3 calls function1 and function2, concats Sentence+string2 = Sentence2 aka userSentence+LF*/
function combined(userSentence){
  firstLastLetters(userSentence);
  reverseLetters(uppercaseFirstLastLetters);
  let sentenceLetters = userSentence + reverseTwoLetters;
  return sentenceLetters;
}

let sentenceFirstLast = combined(userSentence);
/*alert(sentenceFirstLast);*/

/*6. function4 counts number of letters in userSentence, userSentence/2 -> whole number -> numberIndex, uses numberIndex to add to start of userSentence, creates final sentence with numberIndexLetter + userSentence + LF */
function countLetters(userSentence){
  let halfSentenceLength = Math.floor(userSentence.length/2);
  let indexLetter = userSentence.charAt(halfSentenceLength);
  let initialCipher = indexLetter + sentenceFirstLast;
  return initialCipher;
}

let indexSentenceFirstLast = countLetters(userSentence);
/*alert(indexSentenceFirstLast);*/

/*7. Reverse all letters*/
function reverseReverse(indexSentenceFirstLast){
  let reverseCipher = indexSentenceFirstLast.split("").reverse().join("");
  return reverseCipher;
}
let finalCipher = reverseReverse(indexSentenceFirstLast);
/*alert(`Your new encoded message is ${finalCipher}`);*/

/*8. Enter final cipher in HTML*/
finalCipherReveal(finalCipher);

function finalCipherReveal(finalCipher){
  document.getElementById("output").innerHTML = finalCipher;
}
