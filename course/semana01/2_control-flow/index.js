function string(...string){
    var newStr = string.join()
    console.log(newStr)
    return newStr.length
}
function conditional(...nums){
	var numArgs = nums
    for(let i = 0; i < numArgs.length; i++) {
        var num = numArgs[i]
        switch (true) {
            case num < 0:
                console.log("The sign is - from number", num)
                break;
        
            default:
                console.log("No specified sing found")
                break;
        }
    }
}

function sort_number(...numArgs){
    var nums = numArgs
    var arrayNum = []
    var maxNum = 0
    console.log("fucnt",nums)
    for(let i =0; i< nums.length; i++){
        for(let x =0; i< nums.length; x++){
            if(nums[x]> maxNum) {
                console.log("IF",nums[x], maxNum)
                maxNum = nums[i] 
            }
        }
       maxNum = 0
       arrayNum.push(maxNum)
    }
    console.log(arrayNum)
}

function imparoPar(...number){
    var i = 0
        while(i < number.length){
            console.log((number[i] % 2) == 0 ? `${number[i]} is even` : `${number[i]} is odd`)
            i ++
        }
    }