
<?php
/**
 * Find the index of the lowest value
 *
 * @param array $arr
 * @return int
 */
function findLowest($arr = array()) {
    $lowest = $arr[0];
    $lowestIndex = 0;
    $i = 0;
    $len = count($arr);

    while (++$i < $len) {
        if ($arr[$i] < $lowest) {
            $lowest = $arr[$i];
            $lowestIndex = $i;
        }
    }

    return $lowestIndex;
}

/**
 * Sort an array of numbers
 *
 * @param array $arr
 * @return array
 */
function selectionSort($arr = array()) {
    $newArr = array();
    $i = -1;
    $len = count($arr);

    while (++$i < $len) {
        $lowestIndex = findLowest($arr);
        array_push($newArr, array_splice($arr, $lowestIndex, 1));
    }

    return $newArr;
}

$arr = array(10, 9, 7, 6, 8, 3, 4, 5, 2, 1);

var_dump(selectionSort($arr)); // array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)