function runProgram(input) {
    var newInput = input.split("\n");
    var cases = Number(newInput[0]);
    for (var i = 0; i <= 2 * cases - 2; i=i+2) {
        var line = newInput[i + 1].split(" ").map(Number);
        var data = newInput[i + 2].split(" ").map(Number);
        var n = line[0];
        var k = line[1];
        
        function rotateRight() {
            var result = "";
            
            for (var j = 0; j < 100; j++) {
                if (k <= n) {
                    for (var a = 0; a < n; a++) {
                        result += data[(n - k + a) % n] + " ";
                    }
                    return result;
                }
                if (k > n) {
                    k = k % n;
                }
            }
        }
        console.log(rotateRight());
    }
}

if (process.env.USER === "kishore") {
    runProgram(`3
3 1
1 2 3
2 2
1 2
2 3
1 2`);
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