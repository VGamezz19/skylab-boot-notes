function counterDigit(text, letter) {
    var positionLetter = text.indexOf(letter);
    if (positionLetter !== -1) {
        text = text.slice(0, positionLetter) + text.slice(positionLetter + 1);
        return 1 + counterDigit(text, letter);
    }
    return 0
}