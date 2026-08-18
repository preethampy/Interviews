function insert(arr, num, ind) {
  for (let i = arr.length - 1; i > ind; i--) {
    arr[i] = arr[i - 1];
  }
  arr[ind] = num;
  console.log(arr);
}

// insert([1, 2, 3, 4, 5], 0, 2);

function remove(arr, ind) {
  for (let i = ind; i <= arr.length - 1; i++) {
    if (arr[i]) {
      arr[i] = arr[i + 1];
    }
  }
  console.log(arr);
}

remove([1, 2, 3, 4, 5], 2);
