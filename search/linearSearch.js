const comparator = (a, b) => a - b;

function linearSearch(arr, wanted) {
  let found = [];
  arr.forEach((el, i) => {
    if (comparator(el, wanted) === 0) {
      found.push(i);
    }
  });
  return found;
}
