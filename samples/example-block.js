var square = (function(x) {
  return x * x;
});
var add = (function(a, b) {
  return a + b;
});
var pi = (function() {
  return 3.1415;
});
console.log(square(5));
console.log(add(3, 4));
console.log(pi());
