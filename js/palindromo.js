const word = prompt("Inserisci una parola")
console.log(word)

let result = isPalindrome(word)
console.log(result)

function isPalindrome (word_) {
    let reversed = reverseWord(word)
    if (reversed === word_) {
        return true;
    } else {
        return false;
    }
}


function reverseWord(word_) {
   let reverseWord = ""

   for (let i=0; i < word_.length; i++) {
        const char = word_.at(-1 -i)
        reverseWord += char
   }
   return reverseWord
}