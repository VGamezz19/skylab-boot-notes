function removeRepeatChars(word, i) {
    var i = i ||  0;
    var letter = word[i]
    if (i < word.length) {
        if (word.indexOf(letter) === i) {
            i++;
            return letter + removeRepeatChars(word, i)
        }
        i++;
        return removeRepeatChars(word, i)
    }
    return ""
}
console.log(`input -> removeRepeatChars('aabcbcb') output -> abc`, removeRepeatChars('aabcbcb'));
//input -> removeRepeatChars('aabcbcb') output -> abc