
1
/*
Objective: Write an algorithm that read a sentence, which ends with a point,, character by character to determine:

- The number of words in the sentence (assuming that the words are separated by a single space).
- The number of vowels in the sentence

Constraints
- Each character will be treated separately.

- The last character is the point.

- Use three variables as counters

To determine Number of Words

Step1: Function accepts the sentence (with a fullstop) and we store that in a variable "sentence".
Step2: Declare a variable countWords = 0.
Step3: Implement an IF statement on variable "sentence". If there is a space after a character, then, countWords = countWords + 1.
Step4: If there is a fullstop after a character, exit the statement and console.log the countWords.

To determine Number of Vowels
Step1: Declare a variable countVowels = 0.
Step2: Declare another variable "vowels" (which is an array of [a,e,i,o,u]).
Step3: Implement a loop on variable "sentence". Each vowels[i] will be checked against all the characters in the string variable "sentence".
Step4: If there is a match,  countVowels = countVowels + 1.
Step5: This loop repeats until it encounters a fullstop, after which it exits the loop and console.log countVowels.

*/

2


/*
Step1: User inputs the 2 sets.
Step2: Both sets are stored in an array "set1" & "set2".
Step3: Declare a variable sum = 0.
Step4: To get all distinct elements, we iterate indexes of set1 through set2. 
i.e set1[i] is iterated over all elements of set2.
Step5: if after each iteration, the set[i] element is not present in set2, then 
sum = sum +1.
Step6: else, sum = sum  
Step7: After all iteration has been done, console.log the sum variable.

*/

function readSentence(sentence) {
    //sentence = ""
    var vowels = ["a", "e", "i", "o", "u"];
    var vowelCounter = 0;
    var wordCounter = 0;
    for (var i=0; i < sentence.length; i++) {
        for (var j=0; j < vowels.length; j++) {
            if (sentence[i] === vowels[j]) {
                vowelCounter = vowelCounter +1;
                //console.log(counter);
                //return counter;
            } //else {vowelCounter = "no vowels counted"}

        }
        //console.log(i);
    }
    //console.log(vowelCounter);
    // return "This sentence contains " +vowelCounter +" vowels.";

    for (var i=0; i<sentence.length; i++) {
        if ((sentence[i] === "") || (sentence[i] === ".")) {
            wordCounter += 1
        }
    }
    var finale = console.log("This sentence contains " + vowelCounter + " vowels" + "and " + wordCounter + " words");
    return finale;
};
let message = "iouie."
console.log(readSentence(message));





function distinctSum(arr1,arr2) {
    var sum = 0;
    for (let i=0; i<arr1.length; i++) {
            if (arr2.indexOf(arr1[i]) === -1) {
                sum = sum + arr1[i];
            }
    }
    for (let j=0; j<arr2.length; j++) {
            if (arr1.indexOf(arr2[j]) === -1) {
                sum = sum + arr2[j]
            }
    }

    console.log(sum);
    return sum;
};

distinctSum([3,1,7,9], [2,4,1,9,3]);