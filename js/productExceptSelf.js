function productExceptSelf(nums){
    let result = []
    
    for(let i=0; i<nums.length; i++){
        let product = 1
        for(let j=0; j<nums.length; j++){
            if(i !== j){
                product *= nums[j]
            }
        }
        result.push(product)
    }
    return result
}

function productExceptSelf(nums){
    let left=1
    let right=1
    let result = []

    for (i=0;i<nums.length; i++){
        
    }
}
const nums = [1,2,3,4]
console.log(productExceptSelf(nums));
