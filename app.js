// 1.1. What is the difference between a parameter and an argument?

// A parameter is what is listed in the () section of the function definition and is used throughout the 
// function. The argument is passed in as a value to the function when the function is called later on.

// 1.2. Within a function, what is the difference between return and console.log?

//a returned value is a piece of data that can be used while simply console.logging the result of a function
// won't be an actionable piece of data

// 1. 3. What are the implications of the ability of a function to return a value?

// 2. calculateCube
function calculateCube(num) {
    console.log(Math.pow(num,3))
}

// 3. isAVowel
function isAVowel(letter) {
    letter = letter.toLowerCase();
    if(letter == 'a' | letter == 'e' | letter == 'i' | letter == 'o' | letter == 'u') {
        return true;
    } else {
        return false;
    }
}

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
}

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
}

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
}

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
}

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};