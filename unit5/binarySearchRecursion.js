function binarySearchRecursion(low, high, sortedArr, k) {
      var mid = Math.floor((low + high) / 2);

  if (sortedArr[low] > sortedArr[high]) {
    return -1;
  }
  if (sortedArr[mid] == k) {
    return 1;
  }
  else if (sortedArr[mid] > k) {
    return binarySearchRecursion(low,mid-1,sortedArr, k);
  }
  else {
    return binarySearchRecursion(mid+1,high,sortedArr, k);
  }
    
}

function runProgram(input) {
    var newInput = input.split("\n");
    var line = newInput[0].split(" ").map(Number);
    var n = line[0];
    var k = line[1];
    var arr = newInput[1].split(" ").map(Number);
    var sortedArr = arr.sort((a, b) => {
    return a - b;
    });
    var low = 0;
    var high = sortedArr.length - 1;

    console.log(binarySearchRecursion(low,high,sortedArr,k));
}
  
  
if (process.env.USER === "kishore") {
  runProgram(`5 0
2 -2 0 3 4`);
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