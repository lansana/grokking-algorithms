/**
 * Quicksort implementation by creating multiple arrays
 *
 * @param arr
 * @returns {*}
 */
function quicksort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let pivotIndex = rand(0, arr.length),
        pivot = arr[pivotIndex],
        less = [],
        more = [],
        sorted = [];

    for (let i = 0, len = arr.length; i < len; i++) {
        if (pivotIndex !== i) { // This prevents adding duplicates of the pivot
            if (arr[i] > pivot) {
                more.push(arr[i]);
            } else {
                less.push(arr[i]);
            }
        }
    }

    return sorted.concat(quicksort(less)).concat([pivot]).concat(quicksort(more));
}

/**
 * Random number (min inclusive, max exclusive)
 *
 * @param min
 * @param max
 * @returns {*}
 */
function rand(min, max) {
    return Math.floor( Math.random() * (max - min) + min );
}

let arr = [8, 4, 1, 10, 9, 7, 6, 2, 5, 3];

console.log(quicksort(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]