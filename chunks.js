var input = [1,2,3,4,5,6,7,8,9,10]
var chunk = function(input, chunks) {
  var remainder = input.length % chunks;
  var num = input.length / chunks;
  var chunked = [];
  while (input.length > 0) {
    if (remainder) {
      chunked.push(input.splice(0, num + 1));
      remainder -= 1;
    } else {
      chunked.push(input.splice(0, num));
    }
  }
  console.log(chunked);
  return chunked;
}

console.log(chunks(input, 3));
