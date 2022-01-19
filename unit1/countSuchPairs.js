function runProgram(input) {
    var data = input.split("\n");
    var line = data[0].split(" ").map(Number);
    var k = line[1];
    var a = data[1].split(" ").map(Number);

    var count = 0;

    for (var i = 0; i < a.length; i++) {
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] + a[j] == k) {
                count++;
            }
        }
    }
    console.log(count);

}

if (process.env.USER === "kishore") {
    runProgram(`5 9
3 0 6 2 7`);
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