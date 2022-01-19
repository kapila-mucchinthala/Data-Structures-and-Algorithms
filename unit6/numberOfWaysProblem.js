function runProgram(input) {
    var n = +input;
    var result = ways(n - 1) + ways(n - 2) + ways(n - 3);
    console.log(result);
}
function ways(n) {
    if (n <= 0) return 1;
    else {
        return ways(n - 1) + ways(n - 2) + ways(n - 3);
    }
}

if (process.env.USER === "kishore") {
  runProgram(`4`);
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