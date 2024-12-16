package main

import "fmt"

func main() {
	arr := []int{1, 2, 3, 4}
	element := 3
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
}