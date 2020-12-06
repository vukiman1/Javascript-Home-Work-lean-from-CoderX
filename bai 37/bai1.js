/**
 * Sử dụng vòng lặp while tính tổng các số lẻ nhỏ hơn x.
 */

function sum(x) {
  // viết code ở đây.
  var i = 0;
  var z = 0;
  while (i < x){
      if ( i%2 != 0 ){
          z += i;
      }
      i++;
  }
  return z;
} 
