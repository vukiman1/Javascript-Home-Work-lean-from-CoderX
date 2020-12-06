/**
 * Sử dụng ternary operator thay thế cho if else sao cho đoạn code sau không thay đổi logic
 */

function doSomething(a) {
  var b;
  if (a > 0) {
    b = 1;
  } else if (a < 0) {
    b = 2;
  } else {
    b = 3;
  }
  return b;
}

function doSomethingTernary(a) {
  // Write code here...
  return (a > 0) ? b = 1 : a < 0 ? b = 2 : b = 3;   
}