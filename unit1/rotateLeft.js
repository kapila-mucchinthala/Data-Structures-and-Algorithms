function runProgram(input) {
    var newInput = input.split("\n");
    var line = newInput[0].split(" ").map(Number);
    var data = newInput[1].split(" ").map(Number);
    var n = line[0];
    var k = line[1];
    var result = "";

    for (var i = 0; i < n; i++) {
        result += data[(k+i)%n] + " ";
    }
    console.log(result);

}

if (process.env.USER === "kishore") {
    runProgram(`6 4
1 2 5 4 0 6`);
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