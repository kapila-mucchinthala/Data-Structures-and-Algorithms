function runProgram(input) {
    var newInput = input.split("\n");
    var n = +newInput[0];
    var data = newInput[1].split(" ").map(Number);
    var queries = +newInput[2];
    for (var i = 0; i < queries; i++){
        var q = +newInput[i+3];

        function ShopSoap() {
            // console.log(q);

            var count = 0;
            for (var j = 0; j < data.length; j++) {
                if (data[j] < q) {
                    count++;
                }
            }
            console.log(count);
            // console.log("-----");
        }
        ShopSoap();
    }
  
}
if (process.env.USER === "kishore") {
  runProgram(`5
1 4 10 5 6
4
2
3
5
11`);
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