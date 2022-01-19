function runProgram(input) {
    var data = input.split(" ").map(Number);
    var n = data[0];
    var m = data[1];
    var count = 0;

    for (var x = 0; x <= n; x++) {
        for (var y = 0; y <= m; y++) {
            if ((x ** 2) + y == n && (y ** 2) + x == m) {
                count++;
            }
        }
    }
    console.log(count);

}

if (process.env.USER === "kishore") {
    runProgram(`9 3`);
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