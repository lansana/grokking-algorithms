/**
 * Recursive binary search implementation
 *
 * @param list
 * @param val
 * @param low
 * @param high
 */
function recursiveBinarySearch(list, val, low, high) {
    if (low > high) {
        return -1;
    }

    let mid = Math.floor((low + high) / 2);

    if (list[mid] === val) {
        return mid;
    } else if (mid > val) {
        return recursiveBinarySearch(list, val, low, mid  -1);
    } else if (mid < val) {
        return recursiveBinarySearch(list, val, mid + 1, high);
    }
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

recursiveBinarySearch(list, 7, 0, list.length); // 6
recursiveBinarySearch(list, 11, 0, list.length); // -1