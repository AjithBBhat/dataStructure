package main

import "fmt"

//push

func main() {
	arr := [] int { 1, 2, 3, 4}
	fmt.Println("before push",arr)
	//push
	arr = append(arr, 5)
    fmt.Println("after push",arr)

	//pop
	popped := arr[len(arr)-1]
    arr = arr[:len(arr)-1]
    fmt.Println("after pop",arr)
    fmt.Println("popped element:", popped)
}