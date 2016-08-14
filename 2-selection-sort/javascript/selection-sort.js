/**
 * Find index of smallest value in `arr`
 * 
 * @param arr
 * @returns {number}
 */
function findSmallest(arr) {
    let i = 0,
        smallest = arr[i],
        len = arr.length,
        smallestIndex = i;

    while (++i < len) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

/**
 * Sort from smallest to largest
 *
 * @param arr
 * @returns {Array}
 */
function selectionSort(arr) {
    let newArr = [],
        i = -1,
        len = arr.length,
        smallestIndex;

    while (++i < len) {
        smallestIndex = findSmallest(arr);
        newArr.push(arr.splice(smallestIndex, 1));
    }

    return newArr;
}

let list = [7, 3, 9, 10, 8, 2, 4, 5];

console.log(selectionSort(list)); // [2, 3, 4, 5, 7, 8, 9, 10];
console.log(list); // []