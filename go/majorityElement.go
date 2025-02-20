package main

import (
	"fmt"
  //  "sort"
)


//Brute Force  Time Complexity: O(n^2) Space Complexity: O(1)
// func majorityElement(nums []int) int {
// 	n:= len(nums)
// 	for i:=0;i<n;i++{
// 		count :=0
// 		for j:=0;j<n;j++{
// 			if nums[j] == nums[i] {
// 				count++
// 			}
// 		}
// 		if count > n/2 {
// 			return nums[i]
// 		}
// 	}
// 	return -1 // if no majority element
// }

//hash map function  Time Complexity: O(n) Space Complexity: O(n)

// func majorityElement(nums []int) int {
// 	countMap := make(map[int]int)
// 	n := len(nums)

// 	for _, num := range nums{
// 		countMap[num] += 1

// 		fmt.Printf("   %d   |       %d       | %v\n", num, countMap[num], countMap)
// 		if countMap[num] > n/2 {
//             return num
//         }
// 	}
// 	return -1 // if no majority element

// }

//sorting  Time Complexity: O(n log n) Space Complexity: O(1)
// func majorityElement(nums []int) int {
// 	sort.Ints(nums)
// 	fmt.Printf(" %d | %d", len(nums), nums)
// 	return nums[len(nums)/2]
// }


//Boyer-Moore Voting Algorithm  Time Complexity: O(n) Space Complexity: O(1) optimal
func majorityElement(nums []int) int {
	count,candiate := 0,0;

	for _,num := range nums {
		if count == 0{
			candiate = num
		}
		if num == candiate {
            count++
        } else {
            count--
        }
	}
	return candiate;
}

func main() {
    nums := []int{2, 1,3,1,4,1,1,1}
    fmt.Println(majorityElement(nums))
} 
