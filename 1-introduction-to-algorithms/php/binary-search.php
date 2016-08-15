<?php

/**
 * Find the index of $val using a binary search
 *
 * @param array $list
 * @param $val
 * @return float|int
 */
function binarySearch($list = array(), $val) {
    $low = 0;
    $high = count($list) - 1;

    while ($low <= $high) {
        $mid = floor(($low + $high) / 2);

        if ($list[$mid] == $val) {
            return $mid;
        } else if ($list[$mid] > $val) {
            $high = $mid - 1;
        } else if ($list[$mid] < $val) {
            $low = $mid + 1;
        }
    }

    return -1;
}

$list = array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

echo binarySearch($list, 7); // 6
echo binarySearch($list, 16); // -1