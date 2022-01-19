

function subsetSum(arr, n, sum) {
  if (sum == 0) {
    return true;
  } else if (n == 0) {
    return false;
  } else if (arr[n - 1] > sum) {
    return subsetSum(arr, n - 1, sum);
  }

  return subsetSum(arr, n - 1, sum) || subsetSum(arr, n - 1, sum - arr[n - 1]);
}

function runProgram(input) {
  var newInput = input.split("\n");
  var arr = newInput[1].split(" ");
  let n = arr.length;
  var sum = newInput[2];
  var op = subsetSum(arr, n, sum);
  if (op) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
if (process.env.USER === "kishore") {
    runProgram(`9
1 2 3 4 5 6 7 8 9
5`);
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