package main

import (
    "fmt"
)


// //BruteForce Time Complexity: O(n^2) Space Complexity: O(n)
// func productExceptSelf(nums []int) []int {
// 	result := make ([]int, 0, len(nums))

// 	for i:=0;i<len(nums);i++ {
// 		product:=1;
// 		for j:=0;j<len(nums);j++ {
// 			if(i != j){
// 				product *=nums[j]
// 			}
//         }
// 		result = append(result,product)
// 	}
// 	return result
// }

//Simple Approach with Division 
func productExceptSelf(nums []int) []int {
    result := make([]int, 0, len(nums))
	product := 1
	for i:=0; i<len(nums); i++ {
		product *= nums[i]
	}
	for i:=0; i<len(nums); i++ {
        result = append(result, product / nums[i])
    }
	return result
}

func main() {
	nums := []int{1,2,3,4}
    fmt.Println(productExceptSelf(nums)) // Output: [24, 12, 8, 6]
}

