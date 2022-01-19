function runProgram(input) {
    var newInput = input.split("\n");
    for (var i = 0; i < newInput.length; i = i + 2) {
        var line = newInput[i].split(" ").map(Number);
        var data = newInput[i + 1].split(" ").map(Number);
        var n = line[0];
        var k = line[1];

        function takeOutMaximum() {
            var sum = 0;
            for (i = 0; i < k; i++) {
                sum += data[i];
                var result = sum;
                for (i = k; i < n; i++) {
                    sum += data[i] - data[i - k];
                    result = Math.max(result, sum);
                }
            }
            console.log(result);
        }
        takeOutMaximum()
    }


}

if (process.env.USER === "kishore") {
    runProgram(`10 3
-1 -1 -2 1 -2 4 1 9 3 9`);
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