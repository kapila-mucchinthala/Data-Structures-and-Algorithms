function runProgram(input) {
    var newInput = input.split("\n");
    var rc = newInput[0].split(" ").map(Number);
    var rows = newInput.slice(1, rc[0] + 1);
    var data = rows.map(function (row) {
        return row.split(" ").map(Number);
    })

    function transpose() { 
 
        for (var i = 0; i < data[0].length; i++) {
           var result = "";
            for (var j = 0; j < data.length; j++) {
                result += data[j][i] + " ";
            }
            console.log(result);
        }
    }
    transpose()

}

if (process.env.USER === "kishore") {
    runProgram(`5 4
0 0 0 0
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4`);
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