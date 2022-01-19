function runProgram(input) {
  var newInput = input.split("\n");
    var cases = +newInput[0];
    for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
        var line = newInput[i + 1].trim().split(" ").map(Number);
        var n = line[0];
        var k = line[1];
        var data = newInput[i + 2].trim().split(" ").map(Number);

        function suchPairReturns() {
            for (let a = 0; a < n; a++){
                for (let b = a+1; b < n; b++){
                    if (data[a]+data[b]==k) {
                        return "1";
                    }
                }
            }
            return '-1';
        }
        console.log(suchPairReturns());

    
    }

}
if (process.env.USER === "kishore") {
  runProgram(`1
5 2
3 4 0 2 7`);
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