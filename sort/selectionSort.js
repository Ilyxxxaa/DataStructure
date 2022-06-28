//Сортировка выбором
const comparator = (a, b) => a - b;

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

//  ^ Функция для перестановки местами эелментов массива
// Можно реализовать через деструктуризацию :
// const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[min], arr[j]) > 0) {
        min = j;
      }
    }
    if (min !== i) swap(arr, i, min);
  }
  return arr;
}

let a = [5, 2, 1, 10, 7];
a = selectionSort(a);
console.log(a);
