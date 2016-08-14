package main

import (
	"fmt"
)

func recursiveBinarySearch(list []int, val int, low int, high int) int {
	if low > high {
		return -1
	}

	mid := (low + high) / 2;

	if list[mid] == val {
		return mid
	} else if mid > val {
		return recursiveBinarySearch(list, val, low, mid - 1)
	} else if mid < val {
		return recursiveBinarySearch(list, val, mid + 1, high)
	}

	panic("This is never called")
}

func main() {
	list := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

	fmt.Println(recursiveBinarySearch(list, 4, 0, len(list))) // 3
	fmt.Println(recursiveBinarySearch(list, -5, 0, len(list))) // -1
}