package main

import (
	"fmt"
)

func factorial(num int) int {
	if num == 1 {
		return 1
	}

	return num * factorial(num - 1)
}

func main() {
	fmt.Println(factorial(5)); // 5 * 4 * 3 * 2 * 1 === 120
}