function runProgram(input) {
    var newInput = input.split("\n");
    var line = newInput[0].split(" ").map(Number);
    var data = newInput[1].split(" ").map(Number);
    var k = line[1];
    var n = data.length;

    function game() {
        var result = "";
        for (var i = 0; i < n; i++) {
           [n-1-k] = data[i];
            result += data[i] + " ";



        }

        return result;
    }

    console.log(game());

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