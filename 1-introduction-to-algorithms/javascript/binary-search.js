/**
 * Find index of `val` in sorted `list`
 *
 * @param list
 * @param val
 * @returns {number}
 */
function binarySearch(list, val) {
    let low = 0,
        high = list.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (list[mid] === val) {
            return mid;
        } else if (list[mid] < val) {
            low = mid + 1;
        } else if (list[mid] > val) {
            high = mid - 1;
        }
    }

    return -1;
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

binarySearch(list, 11); // -1: 11 not in list
binarySearch(list, 7); // 6: 7 found at index 6.