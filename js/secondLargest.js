function secondLargest(array) {

//decsending array
 array.sort((a, b) =>b-a)

 for(let i = 0; i <array.length; i++){
    if(array[i+1] !== array[i]){
        return array[i+1];  // second largest number
    }
 }
 return -1;
}

let arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log("Second largest number is: ", secondLargest(arr));

