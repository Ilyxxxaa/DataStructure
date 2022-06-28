// Сортировка пузырьком
const comparator = (a, b) => a - b;

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

//  ^ Функция для перестановки местами эелментов массива
// Можно реализовать через деструктуризацию :
// const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

function bubbleSort(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (comparator(arr[i], arr[i + 1]) > 0) {
        swap(arr, i, i + 1);
      }
    }
  }
  return arr;
}

let a = [5, 12, 16, 45, 177, 15, 17, 15, 789, 1, 5, 67];
a = bubbleSort(a);
console.log(a);
