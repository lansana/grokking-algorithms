<?php

/**
 * Find the index of $val in $arr using recursion
 *
 * @param array $arr
 * @param $val
 * @param $low
 * @param $high
 * @return int
 */
function recursiveBinarySearch($arr = array(), $val, $low, $high) {
    if ($low > $high) {
        return -1;
    }

    $mid = floor(($low + $high) / 2);

    if ($arr[$mid] == $val) {
        return $mid;
    } else if ($arr[$mid] > $val) {
        return recursiveBinarySearch($arr, $val, $low, $mid - 1);
    } else if ($arr[$mid] < $val) {
        return recursiveBinarySearch($arr, $val, $mid + 1, $high);
    }
}

$arr = array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

echo recursiveBinarySearch($arr, 13, 0, count($arr)); // 12