<?php

/**
 * Get the factorial of a number using recursion
 *
 * @param $num
 * @return int
 */
function factorial($num) {
    if ($num == 1) {
        return 1;
    }

    return $num * factorial($num - 1);
}

echo factorial(5); // 5 * 4 * 3 * 2 * 1 == 120