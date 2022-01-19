function runProgram(input) {
  var N = +input;
  var dArray = Array(N + 1).fill(-1);
  console.log(ways(N,dArray));
    
}

function ways(N, dArray) {
  if (N === 0) return 1;
  if (N < 0) return 0;
  if (dArray[N] !== -1) {
    return dArray[N];
  }
  dArray[N] = ways(N - 1, dArray) + ways(N - 3, dArray)
    + ways(N - 4, dArray);
  return dArray[N];
}


if (process.env.USER === "kishore") {
  runProgram(`5`);
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