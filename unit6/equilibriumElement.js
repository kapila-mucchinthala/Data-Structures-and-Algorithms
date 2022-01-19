function runProgram(input) {
    var newInput = input.split("\n");
    var n = +newInput[0];
    var data = newInput[1].split(" ").map(Number);

    function equilibrium() {
        for (let i = 1; i < n - 1; i++) {
            var left = 0;
            var right = 0;
            for (let j = 0; j < i; j++) {
                left += data[j];
            }
            for (let k = i + 1; k < n; k++){
                right += data[k];
            }
            if (left == right) {
                return i + 1;
            }
        }
        return "-1"
    }
    console.log(equilibrium());
}

if (process.env.USER === "kishore") {
  runProgram(`5
3 3 5 5 1`);
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