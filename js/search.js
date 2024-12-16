//includes 

let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
let element = 3

// Check if the array contains the element
if (arr.includes(element)) {
    console.log(`${element} - exsits`)
}else{
    console.log(`${element} does not exist`)
}

//indexOf()

console.log(arr.indexOf(element))
if (arr.indexOf(element)!=-1) {
    console.log(`${element} - exsits at index ${arr.indexOf(element)}`)
}else{
    console.log(`${element} does not exist`)
}

//find()

let foundelement = arr.find(element => element ===3)
if (foundelement) {
    console.log(`${element} - exsits at index ${arr.indexOf(foundelement)}`)
}else{
    console.log(`${element} does not exist`)
}