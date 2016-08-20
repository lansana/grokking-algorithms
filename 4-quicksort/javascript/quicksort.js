/**
 * Quicksort implementation
 *
 * @param items
 * @param left
 * @param right
 * @returns {*}
 */
function quicksort(items, left, right) {
    if (items.length > 1) {
        left = typeof left !== 'number' ? 0 : left;
        right = typeof right !== 'number' ? items.length - 1 : right;

        let index = partition(items, left, right);

        if (left < index - 1) {
            quicksort(items, left, index - 1);
        }

        if (index < right) {
            quicksort(items, index, right);
        }
    }

    return items;
}

function swap(items, firstIndex, secondIndex) {
    let temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)],
        i = left,
        y = right;

    while (i <= y) {
        while(items[i] < pivot) {
            i++;
        }

        while(items[y] > pivot) {
            y--;
        }

        if (i <= y) {
            swap(items, i, y);
            i++;
            y--;
        }
    }

    return i;
}

let arr = [10, 3, 7, 5, 9, 2, 8, 1, 6, 4];

console.log(quicksort(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]