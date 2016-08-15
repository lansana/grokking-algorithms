package main

import (
	"fmt"
)

var list = []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

func binarySearch(list []int, val int) int {
	low := 0
	high := len(list) - 1

	for low <= high {
		mid := (low + high) / 2

		if list[mid] == val {
			return mid
		} else if list[mid] < val {
			low = mid + 1
		} else if list[mid] > val {
			high = mid - 1
		}

		mid = (low + high) / 2
	}

	return -1
}

func main() {
	fmt.Println(binarySearch(list, 1)) // 0
	fmt.Println(binarySearch(list, 11)) // -1, not found
}
