package main

import "fmt"

func shift(arr []int) (int, []int) {
    if len(arr) == 0 {
        return 0, arr
    }
    shiftedElement := arr[0]     // Get the first element
    arr = arr[1:]                // Remove the first element
    return shiftedElement, arr   // Return the shifted element and the updated slice
}
func unshift(arr []int, element int)  []int {
	arr = append([]int{element}, arr...)
	return arr
}
func main() {
    arr := []int{1, 2, 3, 4}
    fmt.Println("Before shift:", arr)

    shiftedElement, arr := shift(arr)
    fmt.Println("Shifted element:", shiftedElement)  // Output: 1
    fmt.Println("After shift:", arr)    
	
	fmt.Println("Before unshift:", arr)

    arr = unshift(arr, 10)  // Add 1 to the beginning of the slice
    fmt.Println("After unshift:", arr)  // Output: [1, 2, 3, 4]// Output: [2, 3, 4]
}
