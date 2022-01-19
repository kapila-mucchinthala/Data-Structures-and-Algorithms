function runProgram(input) {
  var newInput = input.split("\n");
    var cases = +newInput[0];
    for (var i = 0; i < cases; i++) {
        var number = +newInput[i + 1];

        function squareRoot() {
            var low = 0;
            var high = number;
            while (low <= high) {
                var mid = parseInt((low + high) / 2);
                if (mid * mid > number) {
                    high = mid - 1;
                }
                else {
                    low = mid + 1;
                }
            }
            return high;
        }
       console.log(squareRoot());

    }
}



if (process.env.USER === "kishore") {
  runProgram(`2
4
8`);
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