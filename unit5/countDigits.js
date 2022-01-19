function runProgram(input) {
    var newInput = input.split("\n");
    var n = +newInput[0];
    var arr = newInput[1].split(" ").map(Number);

    var zero = 0;
    var one = 0;
    var two = 0;
    for (var i = 0; i < n; i++) {
        if (arr[i] == 0) {
            zero++;
        }
        else if (arr[i] == 1) {
            one++;
        }
        else if (arr[i] == 2) {
            two++;
        }
    }
    console.log(zero,one,two);
    
}
if (process.env.USER === "kishore") {
  runProgram(`10
0 1 0 1 1 1 0 2 2 0 `);
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
