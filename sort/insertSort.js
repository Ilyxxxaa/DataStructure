const comparator = (a, b) => a - b;

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = i;

    while (arr[current - 1] !== undefined && comparator(arr[current], arr[current - 1]) < 0) {
      swap(arr, current - 1, current);
      current--;
    }
  }
  return arr;
}

let a = [5, 2, 1, 10, 7];
a = insertSort(a);
console.log(a);
