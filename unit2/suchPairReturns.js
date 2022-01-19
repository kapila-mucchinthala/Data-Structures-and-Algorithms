
function suchPairReturns(data,k) {
            for (var a = 0; a < data.length; a++) {
                for (var b = a + 1; b < data.length; b++) {
                    if (data[a] + data[b] == k) {
                        return "1";
                    }
                }
            }
            return "-1"
        }

function runProgram(input) {
    var newInput = input.split("\n");
    var cases = Number(newInput[0]);
    for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
        var line = newInput[i + 1].split(" ").map(Number);
        var data = newInput[i + 2].split(" ").map(Number);
        var n = line[0];
        var k = line[1];

        
        console.log(suchPairReturns(data,k));
    }

}

if (process.env.USER === "kishore") {
    runProgram(`1
5 2
3 4 0 1 7`);
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