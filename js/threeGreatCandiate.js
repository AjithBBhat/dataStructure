arr =[2,4,6,8,9,20]

function maxSumOfThreeMax(arr){
    // sorting the array in descending order
    arr.sort((a,b) => b - a);

    // sum of the three largest numbers
    return arr[0] + arr[1] + arr[2];
}
function maxProductOfThreeMax(arr){
    // sorting the array in descending order
    arr.sort((a,b) => b - a);

    // sum of the three largest numbers
    return arr[0] * arr[1] * arr[2];
}


console.log(maxProductOfThreeMax(arr)); // Outputs: 31