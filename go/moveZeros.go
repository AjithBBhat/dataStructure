package main

import "fmt"

//Brute force method time-O(n) space-O(n)

// func moveZeroes(nums []int)  {
// 	result := make([]int,0,len(nums))
	
// 	for _,num := range nums {
// 		if num!=0 {
// 			result = append(result,num)
// 	}
// }
// 	for len(result)<len(nums) {
// 		result = append(result,0)
// 	}

// 	copy(nums,result)
// }

//Two-Pass Approach with Extra Space  time-O(n) space-O(1)
// func moveZeroes(nums []int) {
// 	index :=0;

// 	for _,num:= range nums {
// 		if num !=0{
// 			nums[index]=num
// 			index++
// 		}
// 	}
// 	for index<len(nums) {
// 		nums[index]=0
// 		index++
// 	}
// }

//Two-Pointer Approach (Optimal) time-O(n) space-O(1)

func moveZeroes(nums []int){
	lastNonZeroFoundAt := 0;

	for i:=0 ; i<len(nums) ; i++ {
		if nums[i] !=0 {
			nums[lastNonZeroFoundAt], nums[i] = nums[i],nums[lastNonZeroFoundAt]
			lastNonZeroFoundAt++
		}
	}
}


func main() {
	nums := []int {1,3,0,4,0}
	moveZeroes(nums)
	fmt.Println(nums) // Output: [1,3,4,0,0]

}