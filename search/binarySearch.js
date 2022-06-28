const comparator = (a, b) => a - b;

function binarySearch(arr, wanted) {
  // Границы подмассива для поиска
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // центр подмассива
    let middle = start + Math.floor((end - start) / 2);
    if (comparator(arr[middle], wanted) === 0) return middle;

    // выбираем нужную половину
    if (comparator(arr[middle], wanted) < 0) start = middle + 1;
    else end = middle - 1;
  }

  return -1; // ничего не нашлось
}
