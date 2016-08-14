package main

import (
	"fmt"
)

func findSmallest(arr []int) int {
	i := 1
	smallest := arr[0]
	length := len(arr)
	smallestIndex := 0

	for i < length {
		if arr[i] < smallest {
			smallest = arr[i]
			smallestIndex = i
		}
		i++
	}

	return smallestIndex
}

func selectionSort(arr []int) []int {
	i := 0
	length := len(arr)
	newArr := []int{}

	for i < length {
		smallestIndex := findSmallest(arr)
		newArr = append(newArr, arr[smallestIndex])
		arr = append(arr[:smallestIndex], arr[smallestIndex+1:]...)
		i++
	}

	return  newArr
}

func main() {
	list := []int{10, 6, 7, 5, 9, 8, 4, 2, 3, 1}

	fmt.Println(selectionSort(list))
}