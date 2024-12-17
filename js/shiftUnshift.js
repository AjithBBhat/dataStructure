let arr = [1, 2, 3, 4];
let shiftedElement = arr.shift();
console.log("Shifted element:", shiftedElement);  // Output: 1
console.log("Array after shift:", arr);          // Output: [2, 3, 4]

let newLength = arr.unshift(1);
let newLength1 = arr.unshift(4);
console.log("New array:", arr);  // Output: [1, 2, 3, 4]
console.log("New length:", newLength1);  // Output: 4
