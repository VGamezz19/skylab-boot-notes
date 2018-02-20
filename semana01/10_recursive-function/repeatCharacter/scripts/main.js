function counterCharacter(input, value){
    var arrayInput =  typeof(input) === "number" ? input.toString() : input;
    var positionCharacter = arrayInput.indexOf(value.toString());

    if(positionCharacter !== -1) {
        input = (arrayInput.slice(0, positionCharacter) + arrayInput.slice(positionCharacter + 1));
        return 1 + counterCharacter(input, value);
    }
    return 0;
}

console.log(`"Hola que tal estas, hehe haaa...", "a". Should return ---> 6 `,counterCharacter("Hola que tal estas, hehe haaa...", "a"));
console.log(`2536228324, 2 should return --> 4`, counterCharacter(2536228324,2))