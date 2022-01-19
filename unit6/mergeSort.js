function runProgram(input) {
    var newInput = input.split("\n");
    var arr = newInput[1].split(" ").map(Number);
    var result = mergeSort(arr)
    console.log(result.join(" "));
    
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
  var mid = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  var mergeArr = [];
  while (left.length && right.length) {
    left[0] < right[0]
      ? mergeArr.push(left.shift())
      : mergeArr.push(right.shift());
  }
  while (left.length) mergeArr.push(left.shift());

  while (right.length) mergeArr.push(right.shift());

  return mergeArr;
}
if (process.env.USER === "kishore") {
  runProgram(`5
3 5 0 9 8`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}