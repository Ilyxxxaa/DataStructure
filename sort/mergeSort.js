//Сортировка слиянием

const comparator = (a, b) => a - b;

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  // середина массива
  let middle = Math.floor(arr.length / 2);

  // два подмассива, которые будут сортироваться отдельно
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  // слияние отсортированных подмассивов
  return mergeSortedArrays(mergeSort(left), mergeSort(right));
}

function mergeSortedArrays(arr1, arr2) {
  // Результат слияния
  let newArray = [];

  // текущие индексы сравниваемых элементов
  let index1 = 0;
  let index2 = 0;

  // сравнение активных элементов
  while (index1 < arr1.length && index2 < arr2.length) {
    let min = null;
    if (comparator(arr1[index1], arr2[index2]) <= 0) {
      min = arr1[index1]; // добавление минимального элемента в массив
      index1++; // сдвиг индекса активного элемента первого массива
    } else {
      min = arr2[index2];
      index2++;
    }

    newArray.push(min);
  }

  return [...newArray, ...arr1.slice(index1), ...arr2.slice(index2)];
}
