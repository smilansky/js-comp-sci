'use strict';

function quickSort(arr) {
  var left,right,middle, size = arr.length;
  if (size < 2) return arr;

  left = [];
  right = [];
  middle = arr[Math.floor(size/2)];

  for (var i = 0; i < size; i++) {
    if (i != Math.floor(size/2)) {
      if (arr[i] <= middle) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  } 

  return Array.prototype.concat.call(quickSort(left), middle, quickSort(right));
}
