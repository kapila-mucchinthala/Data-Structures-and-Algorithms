function runProgram(input) {
    var newInput = input.split("\n");
    var rows = Number(newInput[0]);
    var data = [];
    for (var i = 1; i <= rows; i++) {
        data.push(newInput[i].split(" ").map(Number));
    }

    function antiClockWiseRotation() {
        for (i = data.length - 1; i >= 0; i--) {
            var output = "";
            for (var j = 0; j < data.length; j++) {
                output += data[j][i] + " ";
            }
            console.log(output);
        }
    }
    antiClockWiseRotation()

}

if (process.env.USER === "kishore") {
    runProgram(`4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`);
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