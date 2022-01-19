function runProgram(input) {
    var newInput = input.split("\n");
    var cases = newInput[0];
    for (var i = 0; i <= 2*cases-2; i = i + 2) {
        var line = newInput[i+1];
        var data = newInput[i + 2].split(" ").map(Number);
        var count = 0;

        function oddsOfOdds() {
            for (var j = 0; j < data.length; j++) {
                if (data[j] % 2 == 1) {
                    count++;
                }
            }
            if (count % 2 == 1) {
                return "Yes";
            }
            else {
                return "No";
            }
        }
        console.log(oddsOfOdds());
    }
}

if (process.env.USER === "kishore") {
    runProgram(`3
1
1
2
1 101
2
1 200`);
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