// JavaScript Code to left rotate an array using Reversal Algorithm

// Function to rotate an array by d elements to the left
function rotateArr(arr, d) {
    let n = arr.length;
    //5
    // Handle the case where d > size of array
    d %= n;
    //2
    // Reverse the entire array
    // Reverse the first d elements
    reverse(arr, 0, d - 1);
    console.log('====================================');
    console.log("fisrt");
    console.log('====================================');
    
    // Reverse the remaining n-d elements
    reverse(arr, d, n - 1);
    console.log('====================================');
    console.log("second");
    console.log('====================================');
    // Reverse the entire array
    reverse(arr, 0, n - 1);
    console.log('====================================');
    console.log("third");
    console.log('====================================');
}

// Function to reverse a portion of the array
function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
        console.log('====================================');
        console.log(arr);
        console.log('====================================');
    }
}

const arr = [1, 2, 3, 4, 5, 6];
const d = 2;

rotateArr(arr, d);

console.log(arr);