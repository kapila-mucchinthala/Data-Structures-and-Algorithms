function runProgram(input) {
  var newInput = input.split("\n");
    var cases = +newInput[0];
    for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
        var line = newInput[i+1].split(" ").map(Number);
        var n = line[0];
        var k = line[1];
        var data = newInput[i + 2].split(" ").map(Number);

        function sumOfSubarray() {
            for (var a = 0; a < data.length; a++) {
                var sum = 0;
                for (var b = a; b < data.length; b++){
                    sum += data[b];
                    // console.log(sum);
                    if (sum == k) {
                        return "Yes"
                    }
                    
                }
                if (sum > k) {
                    continue;
                }
            }
            return "No";
        }

        console.log(sumOfSubarray());
    }

}

if (process.env.USER === "kishore") {
  runProgram(`3
5 3
1 2 1 3 4
4 5
1 2 1 3
3 2
1 2 1`);
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