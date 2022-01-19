function runProgram(input) {
    var newInput = input.split("\n");
    var N = +newInput[0];
    var arr = newInput[1].split(" ").map(Number);
    var K = +newInput[2];

    function kazama() {
        for (var i = 0; i < N; i++) {
            if (arr[i] >= K) {
                return i;
            }
        }
    }
    console.log(kazama());
    
}
if (process.env.USER === "kishore") {
  runProgram(`4
1 3 5 6
5 `);
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
