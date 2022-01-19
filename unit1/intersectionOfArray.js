function runProgram(input) {
    var data = input.split("\n");
    var a = data[1].split(" ").map(Number);
    var b = data[2].split(" ").map(Number);
    var result = "";

    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                result += a[i];
            }
        }
    }
    console.log(result);
}

if (process.env.USER === "kishore") {
    runProgram(`3
4 5 7
9 2 5`);
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