let arr =[[1,2,3],4,5,6,7,8,9,10]

console.log('====================================');
console.log('before pop',arr);
console.log('====================================');
arr.push(11);
console.log('after push',arr);
console.log('====================================');
arr.at(0).push(13)
console.log('after push at index 0',arr);




console.log('====================================');
console.log('before pop',arr);
console.log('====================================');
arr.pop()
console.log('after pop',arr);
console.log('====================================');
arr.at(0).pop()
console.log('after pop at index 0',arr);
