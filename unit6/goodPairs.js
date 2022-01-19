function runProgram(input) {
  var newInput = input.split("\n");
    var cases = +newInput[0];
    for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
        var n = +newInput[i + 1];
        var data = newInput[i + 2].split(" ").map(Number);

        function goodPairs() {
            var count = 0;
            for (var a = 0; a < data.length; a++) {
                for (var b = 0; b < n; b++){
                    if (data[b] == 2 * data[a]) {
                        count++;
                    }
                }
                
            }
            console.log(count);
        }
       goodPairs();
    }
    

}



if (process.env.USER === "kishore") {
  runProgram(`2
5
1 1 1 1 1
6
1 1 2 2 4 1 `);
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