function gpAndRecursion(n,r) {
    if (n == 0) {
        return 1;
    }
    return 1 / (r ** n) + gpAndRecursion(n - 1, r);
}

function runProgram(input) {
    var newInput = input.split(" ");
    var n = newInput[0];
    var r = newInput[1];
    var result = gpAndRecursion(n, r);
    console.log(result.toFixed(4));
   
}


if (process.env.USER === "kishore") {
    runProgram(`1 1`);
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