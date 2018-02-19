let sum = 0;
let [node, path, ...nums] = process.argv
//process.argv are all args from node for this code.

for (let i = 0; i<nums.length; i++){
    sum += Number(nums[i])
}

console.log(sum)