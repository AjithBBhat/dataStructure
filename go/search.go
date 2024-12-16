package main

import "fmt"


func contains(arr []int,element int)bool{
	for _, val := range arr {
        if val == element {
            return true
        }
    }
    return false  // element not found in the array
}
func main() {
	arr := []int{1, 2, 3, 4}
	element := 5
	found := false

	for _, i := range arr {
		if i == element {
            found = true
            break
        }
	}
	if found {
		fmt.Println(element," is present in the array.\n")
    } else {
		fmt.Println(element," is not present in the array.\n",)
	}

	if contains(arr, element) {
		fmt.Println(element," is present in the array.\n")
    } else {
        fmt.Println(element," is not present in the array.\n")
	}
}

