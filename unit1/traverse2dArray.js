function runProgram(input) {
    var newInput = input.split("\n");
    var rc = newInput[0].split(" ").map(Number);
    var rows = newInput.slice(1, rc[0] + 1);
    var data = rows.map(function (row) {
        return row.split(" ").map(Number);
    })

    function traverse() {
        var result = "";
        for (var i = 0; i < data[0].length; i++) {
            for (var j = data.length-1; j >= 0; j--) {
                result += data[j][i] + " ";
            }
        }
        return result;
    }
    console.log(traverse());

}

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
