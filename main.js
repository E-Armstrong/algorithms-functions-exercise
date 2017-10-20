
// 2. Write a function which, given a year as a number, returns whether that number is a leap year.

// 2000 -> true
// 1900 -> false
// 2016 -> true

// var isItALeapYear = function(year) {
//     if ( ( (year % 4) === 0 ) && ( (year % 100) === 0 )  && ( (year % 400) !== 0 ) ) {
//         console.log("false")
//     } else if ( (year % 4) === 0) {
//         console.log("true")
//     } else (
//         console.log("false")
//     )
// }

// isItALeapYear(2000)
// isItALeapYear(1900)
// isItALeapYear(2016)

// except num/100 and not num/400
// num/4 % = 0

// 3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
// [1,2,5] -> 3
// [1,2,3,4,5] -> 6
// [3,4,5] -> 1

// testArray1 = [1, 2, 5]
// testArray2 = [1,2,3,4,5]
// testArray3 = [3,4,5]
// masterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// var arrayFixer = function(testArray) {
//     for (i = 0; i < (testArray.length + 1 ); i++) {
//         if (testArray[i] != masterArray[i]) {
//             console.log(masterArray[i])
//             return
//         }
//     }
// }

// arrayFixer(testArray1)
// arrayFixer(testArray2)
// arrayFixer(testArray3)


// 4. Write a function which takes an array of integers and returns an array with any duplicate integers removed.
// [1,1,2,3,1,2,3] -> [1,2,3]
// [1,4,4,4,2,2,4,4,4] -> [1,4,2]

// messyArray1 = [1,1,2,3,1,2,3]
// messyArray2 = [1,4,4,4,2,2,4,4,4]
// var fixedArray = []

// var noDuplicates = function(testArray) {
//     for (i = 0; i < testArray.length; i++) { //cycle for each index of the messyArrays
//         if ( (fixedArray.indexOf(testArray[i]) === -1) ){ //if fixedArray doesn't already have the same value from testArray
//             fixedArray.push(testArray[i]) // addes that index value to testArray
//         }
//     } 
// }

// noDuplicates(messyArray2)

// console.log(fixedArray)

// if fixedArray already has the number, don't add another number
// Add number to fixedArray



// 5. Write function that translates a text to Pig Latin, and another that translates back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding "ay".

// "The quick brown fox" -> "Hetay uickqay rownbay oxfay".
// stringEnglish
// sentenceArray = stringEnglish.split(' ')
// sentenceArray.array.forEach(function(element) {
    
// }, this);
// firstLetter = removed from beginning of word
// firstLetter added to end of every word
// add -"ay" to end of every word
// stringPigLatin = sentenceArray.join( ' ' )

// var stringEnglish1 = "The quick brown fox"

// var toPigLatin = function(englishString) {
//     var stringPigLatin
//     var capitalizeFirstLetter = function(string) {
//         return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(); // this function capitolize the first letter of the string and removes the rest of the string, then it concatinates it to the rest of the string that has the first character removed
//     }
//     var sentenceArray = englishString.split(' ')
//     var editedSentenceArray = sentenceArray.map( function(element) {
//         return element.concat(element.charAt(0)).concat('ay').slice(1) // this method string returns each element of the array after first adding the first letter to the end of each element, then adding "ay" to the end of each element, then .slice removes the first letter of each element
//     });
//     stringPigLatin = editedSentenceArray.join(` `)
//     console.log(capitalizeFirstLetter(stringPigLatin))
// } 
// toPigLatin(stringEnglish1)

// var pigLatinString1 = "HeTay uickqay rownbay oxfay"

// var toEnglish = function(stringPigLatin) {
//     var stringEnglish
//     var capitalizeFirstLetter = function(string) {
//         return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(); // this function capitolize the first letter of the string and removes the rest of the string, then it concatinates it to the rest of the string that has the first character removed
//     }
//     var sentenceArray = stringPigLatin.split(' ')
//     var editedSentenceArray = sentenceArray.map( function(element) {
//         return element.charAt(element.length - 3) + element.slice(0, (element.length-3)) //  psudocode to descirbe what these methods do (letter 3 from the right ) concatinated to (the element with the last 3 letters sliced off)
//     });
//     stringEnglish = editedSentenceArray.join(` `)
//     console.log(capitalizeFirstLetter(stringEnglish))
// } 
// toEnglish(pigLatinString1)


// 6. Write a function which takes in two arrays and determines if they contain the same number of the same values.
// [], [] -> true
// [2, 3, 4], [1, 2, 3] -> false
// ["a", "c", "b"], ["a", "b", "c"] -> true
// [1, 1, 1], [1, 1, 1, 1] -> false

var testArray1a = []
var testArray1b = []
var testArray2a = [2, 3, 4]
var testArray2b = [1, 2, 3]
var testArray3a = ["a", "c", "b"]
var testArray3b = ["a", "b", "c"]
var testArray4a = [1, 1, 1]
var testArray4b = [1, 1, 1, 1]

var arrayComparer = function(array1, array2) {
    var testArrayLength = function(array1, array2) { //function to test if lengths are the same
        return (array1.length === array2.length)
    }
    array1.sort() //sort arrays so I can then compare them even if the values are mixed up 
    array2.sort()
    var arrayContentTester = function(array1, array2) { //function to test if content is the same in arrays 
        for ( i = 0; i < array1.length; i++) {
            if (array1[i] === array2[i]) {
                return true
            }
        }
    }
    if ((array1.length === 0) && (array2.length === 0)) { // tests if both arrays have zero values, then returns true
        console.log(true)
    } else if (testArrayLength(array1, array2) === arrayContentTester(array1, array2)) { // checks if content and array length are both the same, returns true
        console.log(true)
    } else if (testArrayLength(array1, array2) !== arrayContentTester(array1, array2)) { // checks if content and array length are not the same, returns false
        console.log(false)
    } else {
        console.log("There's an error.")
    }
}

arrayComparer(testArray4a, testArray4b)

// 7. Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with elements limited by the cutoff value.
// [1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
// [1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]

// 8. Write a function which takes no input and returns an array of 10 distinct randomly generated integers between 1 and 100.

// -> [48, 5, 32, 2, 10, 11, 34, 95, 82, 93] (good!)
// -> [1, 1, 24, 63, 45, 84, 17, 11, 59, 13] (bad - duplicated number)

// 9. Write a function which takes two sorted lists and merges them into a new sorted list.

// [1,2,5,6,9], [3,4,5,10] -> [1,2,3,4,5,5,6,9,10]
// [], [] -> []
// [-1, 0, 1], [-2, 2] -> [-2, -1, 0, 1, 2]

// (Source: https://adriann.github.io/programming_problems.html)

