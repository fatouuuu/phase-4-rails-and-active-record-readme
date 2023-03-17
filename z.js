// find the shortest word in a sentence

// bdd
// given a sentence, find the shortest word 

// pseudocode 
// split the sentence into an array words
// find the length of each word
// find the shortest word
// return the shortest word

// code
function findShortestWord(sentence) {
    var words = sentence.split(' ');
    var shortestWord = words[0];
    for (var i = 0; i < words.length; i++) {
        if (words[i].length < shortestWord.length) {
        shortestWord = words[i];
        }
    }
    return shortestWord;
}

// test
console.log(findShortestWord('the quick brown fox jumped over the lazy dog'));