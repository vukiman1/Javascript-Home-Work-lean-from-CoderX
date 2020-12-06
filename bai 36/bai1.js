/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
  // your code here
  var map = arr.map(function (arr) {
    switch (arr) {
      case 'A':
        return 1;
        break;
      case 'B':
        return 2;
        break;
      case 'a':
        return 1;
        break;
      case 'b':
        return 2;
        break;
      default:
        return 0;
        break;
    }
  })
  return map;
}