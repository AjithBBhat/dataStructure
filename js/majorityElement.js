/// hash map method
const nums = [2, 1, 3, 1, 4, 1, 1, 1];

// function majorityElement(nums){
//     const countMap = new Map();

//     for (let num of nums){
//         countMap.set(num, (countMap.get(num) || 0) + 1);
//         console.log(countMap.get(num),countMap );

//         if (countMap.get(num) > Math.floor(nums.length / 2)) {
//             return num;
//         }
//     }
// }

// function majorityElement(nums){
//   nums.sort()
//   return nums[nums.length / 2]
// }

function majorityElement(nums) {
  let count = 0;
  let candidate = null;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += candidate === num ? 1 : -1;
  }
  return candidate;
}

console.log(majorityElement(nums));

// // Creating a new Map
// let myMap = new Map();

// // Adding key-value pairs
// myMap.set("name", "Alice");
// myMap.set(1, "one");
// myMap.set(true, "Boolean Key");

// // Accessing values
// console.log(myMap.get("name"));  // Output: Alice
// console.log(myMap.get(1));       // Output: one
// console.log(myMap.get(true));    // Output: Boolean Key

// // Checking if a key exists
// console.log(myMap.has("name"));  // Output: true
// console.log(myMap.has("age"));   // Output: false

// // Deleting a key
// myMap.delete(1);
// console.log(myMap.has(1));       // Output: false

// // Getting the size of the Map
// console.log(myMap.size);         // Output: 2

// // Iterating over a Map
// myMap.set("age", 25);
// console.log("Iterating over Map:");
// for (let [key, value] of myMap) {
//     console.log(`${key} => ${value}`);
// }

// // Converting Map to an array
// let mapArray = Array.from(myMap);
// console.log(mapArray);  // Output: [ ['name', 'Alice'], [true, 'Boolean Key'], ['age', 25] ]

// // Clearing all elements in the Map
// myMap.clear();
// console.log(myMap.size); // Output: 0
