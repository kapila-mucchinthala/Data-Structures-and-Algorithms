function runProgram(input) {
    var newInput = input.split("\n");
    var rc = newInput[0].split(" ").map(Number);
    var rows = newInput.slice(1, rc[0] + 1);
    var data = rows.map(function (row) {
        return row.split(" ").map(Number);
    })

    function zigzag() {
        var result = "";
        for (var i = 0;i<data.length; i++) {
            if (i % 2 == 0) {
                for (var j = data[i].length - 1; j >= 0; j--) {
                    result += data[i][j] + " ";
                }
            }
            else if (i % 2 != 0) {
                for (j = 0; j < data[i].length; j++) {
                    result += data[i][j] + " ";
                }
            }
        }
        return result;
    }
    console.log(zigzag());

}

if (process.env.USER === "kishore") {
    runProgram(`5 4
4 2 3 4
2 3 2 3
1 2 3 2
1 2 3 2
1 2 1 2`);
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