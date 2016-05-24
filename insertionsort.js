function insertionSort(arr) {
  var value, j, size = arr.length;
  for (var i = 0; i < size; i++ ){
    value = arr[i];
    j = i - 1;

    while((j >= 0) && (arr[j] > value)) {
      arr[j+1] = arr[j]; 
      j--
    }
    arr[j+1] = value;
     
  }  
  return arr;
}
