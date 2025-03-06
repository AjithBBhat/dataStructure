const array = [1,4,0,3,0];

function moveZeros(array) {
    let lastZeroFoundAt = 0
    for( let i=0;i<array.length;i++ ){
        if(array[i]!==0){
            [array[i],array[lastZeroFoundAt]] = [array[lastZeroFoundAt],array[i]]
            lastZeroFoundAt++
        }
    } 
    return array;  // [1, 4, 3, 0, 0]  // [1, 4, 3, 0, 0] is the expected output. The zeros are moved to the end, and the order of the non-zero elements remains unchanged.
}

console.log(moveZeros(array))