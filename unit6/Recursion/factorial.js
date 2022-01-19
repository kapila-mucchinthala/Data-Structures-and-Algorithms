function runProgram(input) {
    var data = +input;
    console.log(factorial(data));
}

function factorial(data) {
    if (data == 0) {
        return 1;
    }
    else {
        return data * factorial(data - 1);
    }
}

if (process.env.USER === "kishore") {
  runProgram(`6`);
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